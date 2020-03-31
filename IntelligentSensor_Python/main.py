import Sysconfig as config
import D435Driver as driver
import perception
import ImageProcessing as processer
import ResNet as model
import network

def main():
    profile, pipeline = driver.init()                       #初始化D435
    pos = config.Region_config(pipeline)                    #设置监测范围
    inferprogram,inferexe = model.model_init("./model")     #读取深度学习模型
    s = network.init()                                      #初始化与服务器的连接
    while True:
        background_color, background_deep = perception.background_init(pipeline,pos)            #获取冰箱状态
        processer.BackgroundSave(background_color)                                              #存储冰箱状态照片
        network.sendBackground(s,"background.jpg")                                              #上传冰箱状态照片
        perception.waitForAction(pipeline,pos)                                                  #等待冰箱内出现人为操作
        perception.waitForStop(pipeline,pos)                                                    #等待人为操作停止
        background_color_now, background_deep_now = perception.background_init(pipeline,pos)    #获取新的冰箱状态
        diff = processer.DifferentialImage(background_color,background_color_now)               #对比变化前后，获取变化位置
        boundGather = processer.getArea(diff)                                                   #获取变化区域坐标集
        ActionGather = perception.ActionAdjust(background_deep, background_deep_now, boundGather)#判断动作（放置，拿取）
        result = perception.Objectinfer(inferprogram, inferexe, boundGather, background_color, background_color_now)#使用深度学习判断放置/拿取的事物名称
        for i in range(len(result)):
            if result[i][1] > 0.5:                                              #置信度大于50%
                if ActionGather[i] == 1:
                    network.add(s, True, result[i][0], str(i)+".jpg")           #上传用户操作信息
                elif ActionGather[i] == -1:
                    network.delete(s, True, result[i][0], str(i)+".jpg")
            else:
                if ActionGather[i] == 1:
                    network.add(s, False, "NULL", str(i)+".jpg")
                elif ActionGather[i] == -1:
                    network.delete(s, False, "NULL", str(i)+".jpg")
        volume = driver.getVolume(pipeline, pos, profile)                       #获取当前冰箱内剩余空间
        network.setspace(s, volume)                                             #上传冰箱剩余空间信息


if __name__ == '__main__':
    main()
