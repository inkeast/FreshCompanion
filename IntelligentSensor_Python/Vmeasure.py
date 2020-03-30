import pyrealsense2 as rs
import numpy as np
import cv2
import sys
import math

pipeline = rs.pipeline()
config = rs.config()
config.enable_stream(rs.stream.depth, 1280, 720, rs.format.z16, 30)
config.enable_stream(rs.stream.color, 1280, 720, rs.format.bgr8, 30)

profile = pipeline.start(config)

mouse_config_p = 0

#单位面积基数
S0 = 4*math.tan(34.7/180*math.pi)*math.tan(21.25/180*math.pi)/1280/720

# 空间坐标
x_min = 0
y_min = 0
x_max = 0
y_max = 0

def onmouse(event, x, y, flags, param):      #标准鼠标交互函数
    global mouse_config_p,x_min,y_min,x_max,y_max
    if event==cv2.EVENT_LBUTTONDOWN:           #当鼠标移动时
        if mouse_config_p == 0 :
            x_min = x
            y_min = y
            #print(str(x)+","+str(y)+"\n")
            mouse_config_p += 1
        elif mouse_config_p == 1:
            x_max = x
            y_max = y
            #print(str(x) + "," + str(y) + "\n")
            mouse_config_p += 1
            with open("./config.ini","w") as f:
                f.write(str(x_min))
                f.write(" ")
                f.write(str(y_min))
                f.write(" ")
                f.write(str(x_max))
                f.write(" ")
                f.write(str(y_max))

def Region_config():
    finish = False
    while finish == False:
        cv2.namedWindow('FreshCompanion')
        cv2.setMouseCallback('FreshCompanion', onmouse)
        frames = pipeline.wait_for_frames()
        color_frame = frames.get_color_frame()
        if not color_frame :
            continue
        color_image = np.asanyarray(color_frame.get_data())
        cv2.imshow("FreshCompanion", color_image)
        cv2.waitKey(1)
        if x_min != 0 and y_min != 0 and  x_max != 0 and y_max != 0:
            finish = True

def get_dis():
    while True:
        # Wait for a coherent pair of frames: depth and color
        for i in range(5):
            pipeline.wait_for_frames()

        frames = pipeline.wait_for_frames()

        depth_frame = frames.get_depth_frame()

        color_frame = frames.get_color_frame()

        if not depth_frame or not color_frame:
            continue

        # Convert images to numpy arrays
        depth_image = np.asanyarray(depth_frame.get_data())
        color_image = np.asanyarray(color_frame.get_data())


        depth = np.asanyarray(depth_frame.get_data())
        # Crop depth data:
        depth = depth[y_min:y_max,x_min:x_max].astype(float)

        depth_scale = profile.get_device().first_depth_sensor().get_depth_scale()
        depth = depth[depth!=0]
        depth = depth * depth_scale
        V0 = depth*depth*depth*S0*1000
        V = np.sum(V0)
        dist, _, _, _ = cv2.mean(depth)
        cv2.rectangle(color_image, (x_min, y_min),(x_max, y_max), (255, 255, 255), 2)
        cv2.putText(color_image, "V = " + str(V) + "L", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        cv2.putText(color_image, "Dis = " + str(dist) + "m", (10, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        cv2.imshow("FreshCompanion", color_image)
        cv2.waitKey(1)
        #print(dist)
        #np.set_printoptions(threshold=np.inf)
        #with open("debug","w") as fs:
            #fs.write(str(depth))
        #sys.exit(0)
        # Apply colormap on depth image (image must be converted to 8-bit per pixel first)
        #depth_colormap = cv2.applyColorMap(cv2.convertScaleAbs(depth_image, alpha=0.5), cv2.COLORMAP_JET)

        # Stack both images horizontally
        #images = np.hstack((color_image, depth_colormap))

        # Show images
        #cv2.namedWindow('RealSense', cv2.WINDOW_AUTOSIZE)
        #cv2.imshow('RealSense', images)
        #cv2.imshow("FreshCompanion",color_image)
        #key = cv2.waitKey(1)
        # Press esc or 'q' to close the image window
        #if key & 0xFF == ord('q') or key == 27:
            #cv2.destroyAllWindows()
            #break


#finally:

    # Stop streaming
    #pipeline.stop()

Region_config()
get_dis()
