import pyrealsense2 as rs
import numpy as np
import cv2
import math
import time
import scipy.signal as signal

S0 = 4*math.tan(34.7/180*math.pi)*math.tan(21.25/180*math.pi)/1280/720  #单位像素点代表面积 单位：平方厘米
FrontDistance = 0.20        #距离可摆放空间的距离 单位cm


def init():
    pipeline = rs.pipeline()
    config = rs.config()
    config.enable_stream(rs.stream.depth, 1280, 720, rs.format.z16, 30)
    config.enable_stream(rs.stream.color, 1280, 720, rs.format.bgr8, 30)
    profile = pipeline.start(config)
    for i in range(10):
        pipeline.wait_for_frames()
    return profile, pipeline

def getInputData(pipeline):
    frame = pipeline.wait_for_frames()
    depth_frame = frame.get_depth_frame()
    color_frame = frame.get_color_frame()
    depth_image = np.asanyarray(depth_frame.get_data())
    color_image = np.asanyarray(color_frame.get_data())
    return color_image, depth_image

def getLimitData(pipeline,pos):
    color_image, depth_image = getInputData(pipeline)
    color_cut_image = color_image[pos[0]:pos[1], pos[2]:pos[3]]
    depth_cut_image = depth_image[pos[0]:pos[1], pos[2]:pos[3]].astype(float)
    depth_cut_image = signal.medfilt2d(depth_cut_image, (3, 3))
    return color_cut_image, depth_cut_image

def getEvnAdjust(pipeline,pos,state):
    var = []
    for i in range(10):
        #deepGather = []
        #for i in range(5):
        color, deep = getLimitData(pipeline, pos)
        cv2.putText(color, state, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        cv2.imshow("FreshCompanion", color)
        cv2.waitKey(1)

        if var == []:
            var = np.expand_dims(deep,0)
        else :
            var = np.append(var, np.expand_dims(deep,0),axis=0)
            #dist, _, _, _ = cv2.mean(deep)
            #deepGather.append(dist)
        #var.append(np.var(deepGather))
    varvalue = np.var(var,axis=0)
    print(np.mean(varvalue))
    return np.mean(varvalue)

def getVolume(pipeline,pos,profile):
    V = []
    for i in range(30):
        color,depth = getLimitData(pipeline,pos)
        depth_scale = profile.get_device().first_depth_sensor().get_depth_scale()
        depth = depth[depth-FrontDistance > 0]
        depth = depth * depth_scale
        V0 = depth * depth * (depth-FrontDistance) * S0 * 1000
        V.append(np.sum(V0))
        # print(np.sum(V0))
        if i != 29:
            cv2.putText(color, "Measure remain space", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
            cv2.imshow("FreshCompanion", color)
            cv2.waitKey(1)
    V = (signal.medfilt(V, 11))
    cv2.putText(color, "Remain space is" + str(format(np.mean(V), '.2f')) +" L", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
    cv2.imshow("FreshCompanion", color)
    cv2.waitKey(1)
    time.sleep(3)
    return np.mean(V)

def getVolumeRealtime(pipeline,pos,profile):
    V = []
    for i in range(30):
        color,depth = getLimitData(pipeline,pos)
        depth_scale = profile.get_device().first_depth_sensor().get_depth_scale()
        depth = depth[depth != 0]
        depth = depth * depth_scale
        V0 = depth * depth * (depth-FrontDistance) * S0 * 1000
        V.append(np.sum(V0))
        # print(np.sum(V0))
    V = (signal.medfilt(V,11))
    cv2.putText(color, "Remain space is" + str(format(np.mean(V), '.2f')) +" L", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
    cv2.imshow("FreshCompanion", color)
    cv2.waitKey(1)
    return np.mean(V)

def getdeepimg(depth_image):
    return cv2.applyColorMap(cv2.convertScaleAbs(depth_image, alpha=0.5), cv2.COLORMAP_JET)