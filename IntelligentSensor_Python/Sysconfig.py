import numpy as np
import cv2

mouse_config_p = 0


# 空间坐标
x_min = 0
y_min = 0
x_max = 0
y_max = 0

#鼠标交互
def onmouse(event, x, y, flags, param):      #标准鼠标交互函数
    global mouse_config_p,x_min,y_min,x_max,y_max
    if event==cv2.EVENT_LBUTTONDOWN:           #当鼠标点击时
        if mouse_config_p == 0 :
            x_min = x                        #获取坐标
            y_min = y
            mouse_config_p += 1
        elif mouse_config_p == 1:
            x_max = x
            y_max = y
            mouse_config_p += 1
            with open("./config.ini","w") as f: #存储到文件（预留）
                f.write(str(x_min))
                f.write(" ")
                f.write(str(y_min))
                f.write(" ")
                f.write(str(x_max))
                f.write(" ")
                f.write(str(y_max))

#划定选区
def Region_config(pipeline):
    finish = False
    while finish == False:                    #循环直到获取到有效帧
        cv2.namedWindow('FreshCompanion')
        cv2.setMouseCallback('FreshCompanion', onmouse) #绑定鼠标动作
        frames = pipeline.wait_for_frames()     #获取帧
        color_frame = frames.get_color_frame()  #获取彩色帧
        if not color_frame :
            continue
        color_image = np.asanyarray(color_frame.get_data())
        cv2.imshow("FreshCompanion", color_image)
        cv2.waitKey(1)                         #必须使用waitkey，否则会卡住
        if x_min != 0 and y_min != 0 and  x_max != 0 and y_max != 0: #判断是否完成
            finish = True
    cv2.destroyAllWindows()
    return [y_min,y_max,x_min,x_max]