import pyrealsense2 as rs
import numpy as np
import cv2
import math

S0 = 4*math.tan(34.7/180*math.pi)*math.tan(21.25/180*math.pi)/1280/720  #单位像素点代表面积 单位：平方厘米
FrontDistance = 20.0            #距离可摆放空间的距离 单位cm


def init():
    pipeline = rs.pipeline()
    config = rs.config()
    config.enable_stream(rs.stream.depth, 1280, 720, rs.format.z16, 30)
    config.enable_stream(rs.stream.color, 1280, 720, rs.format.bgr8, 30)
    profile = pipeline.start(config)
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
    return color_cut_image, depth_cut_image

def getEvnAdjust(pipeline,pos):
    var = []
    for i in range(3):
        deepGather = []
        for i in range(10):
            color, deep = getLimitData(pipeline, pos)
            dist, _, _, _ = cv2.mean(deep)
            deepGather.append(dist)
        var.append(np.var(deepGather))
    return  np.var(var)

def getVolume(pipeline,pos,profile):
    V = []
    for i in range(15):
        color,depth = getLimitData(pipeline,pos)
        depth_scale = profile.get_device().first_depth_sensor().get_depth_scale()
        depth = depth[depth != 0]
        depth = depth * depth_scale
        V0 = depth * depth * (depth-FrontDistance) * S0 * 1000
        V.append(np.sum(V0))
    return np.mean(V)
