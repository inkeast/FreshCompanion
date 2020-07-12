import Sysconfig as config
import D435Driver as driver
import perception
import scipy.signal as signal
import ImageProcessing as processer
import cv2
import network


data = []

profile, pipeline = driver.init()  # 初始化D435
pos = config.Region_config(pipeline)  # 设置监测范围

# input()
# background_color, background_deep = perception.background_init(pipeline,pos)
# b2 = signal.medfilt(background_deep,kernel_size=7)
#
# cv2.imwrite("bd1.jpg",driver.getdeepimg(background_deep))
# cv2.imwrite("bd2.jpg",driver.getdeepimg(b2))

i = 0
while True:
    try:
        space = driver.getVolumeRealtime(pipeline,pos,profile)
        if i == 3:
            network.SetSpace(1,1,space)
            print(space)
            i = 0
        else:
            i+=1
    except Exception as e:
        print(e)

# processer.Objectsave(background_color,pos,"b1")
# input()
# background_colora, background_deepa = perception.background_init(pipeline,pos)
# processer.Objectsave(background_colora,pos,"b2")
#
# diff = cv2.absdiff(background_color, background_colora)
# cv2.imwrite("d.jpg",diff)

# for i in range(30):
#     data.append(driver.getEvnAdjust(pipeline,pos,""))
# print(data)