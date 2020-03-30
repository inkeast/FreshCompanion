import pyrealsense2 as rs
import numpy as np
import cv2
import sys
import math

import Sysconfig as config
import D435Driver as driver
import perception
import ImageProcessing as processer

def main():
    profile, pipeline = driver.init()
    pos = config.Region_config(pipeline)

    print(1)
    while True:
        background = perception.background_init(pipeline,pos)
        perception.waitForAction(pipeline,pos)
        perception.waitForStop(pipeline,pos)
        background_now = perception.background_init(pipeline,pos)
        diff = processer.DifferentialImage(background,background_now)
        boundGather = processer.getArea(diff)
        processer.Objectsave(background_now,boundGather)

if __name__ == '__main__':
    main()