import pyrealsense2 as rs
import numpy as np
import cv2

import D435Driver as driver
import ImageProcessing as processer
import ResNet as model
import time

ActionLimit = 4000   #判断发生动作的阈值

def background_init(pipeline, pos):
    color, deep = driver.getLimitData(pipeline,pos)
    cv2.fastNlMeansDenoisingColored(color, None, 5, 5, 7, 11)
    color = processer.gaussfiltering(color)
    return color, deep

def waitForAction(pipeline, pos):
    last_value = driver.getEvnAdjust(pipeline, pos, "Waiting for action")
    while True:
        this_value = driver.getEvnAdjust(pipeline, pos,"Waiting for action")
        if this_value > ActionLimit and last_value > ActionLimit:
            return
        else:
            last_value = this_value


def waitForStop(pipeline, pos):
    last_value = driver.getEvnAdjust(pipeline, pos, "Find action")
    while True:
        this_value = driver.getEvnAdjust(pipeline, pos,"Waiting for action stop")
        if this_value < ActionLimit and last_value < ActionLimit:
            return
        else:
            last_value = this_value

def ActionAdjust(deeplast,deepnow,boundGather):
    ActionGather = []

    deeplast = deeplast[boundGather[0]:boundGather[1], boundGather[2]:boundGather[3]]
    deepnow = deepnow[boundGather[0]:boundGather[1], boundGather[2]:boundGather[3]]
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

def resultDisplay(boundGather,colorbackgroundnow,ActionGather):

    cv2.rectangle(colorbackgroundnow, (boundGather[2], boundGather[0]), (boundGather[3], boundGather[1]), (0, 255, 0), 2)
    if ActionGather[0] == -1:
        cv2.putText(colorbackgroundnow, "Put in ", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        cv2.imshow("FreshCompanion", colorbackgroundnow)
        cv2.waitKey(1)
        time.sleep(4)
    else:
        cv2.putText(colorbackgroundnow, "Fetch ", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        cv2.imshow("FreshCompanion", colorbackgroundnow)
        cv2.waitKey(1)
        time.sleep(4)

