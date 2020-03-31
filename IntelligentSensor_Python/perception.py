import pyrealsense2 as rs
import numpy as np
import cv2

import D435Driver as driver
import ImageProcessing as processer
import ResNet as model

ActionLimit = 100   #判断发生动作的阈值

def background_init(pipeline, pos):
    color, deep = driver.getLimitData(pipeline,pos)
    cv2.fastNlMeansDenoisingColored(color, None, 5, 5, 7, 11)
    color = processer.gaussfiltering(color)
    return color .deep

def waitForAction(pipeline, pos):
    while True:
        if driver.getEvnAdjust(pipeline, pos) > ActionLimit:
            return

def waitForStop(pipeline, pos):
    last_value = driver.getEvnAdjust(pipeline, pos)
    while True:
        this_value = driver.getEvnAdjust(pipeline, pos)
        if this_value < ActionLimit and last_value < ActionLimit:
            return
        else:
            last_value = this_value

def ActionAdjust(deeplast,deepnow,boundGather):
    ActionGather = []
    for elements in boundGather:
        deeplast = deeplast[elements[0]:elements[1], elements[2]:elements[3]]
        deepnow = deepnow[elements[0]:elements[1], elements[2]:elements[3]]
        deeplast = deeplast[deeplast != 0]
        deepnow = deepnow[deepnow != 0]
        if np.mean(deeplast) > np.mean(deepnow):
            ActionGather.append(-1)               #-1为拿走
        else:
            ActionGather.append(1)                # 1为放置
    return ActionGather

def Objectinfer(inferprogram, exe, ActionGather, boundGather,colorbackground, colorbackgroundnow):
    infer_result = []
    for i in range(len(ActionGather)):
        if ActionGather[i] == 1:
            processer.Objectsave(colorbackgroundnow,boundGather[i],i)
        elif ActionGather[i] == -1:
            processer.Objectsave(colorbackground, boundGather[i], i)
    for i in range(len(ActionGather)):
        infer_result.append(model.infer(inferprogram, exe, str(i)+".jpg"))
    return infer_result

