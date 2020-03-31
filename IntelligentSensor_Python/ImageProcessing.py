import cv2

es = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (9, 4))

def gaussfiltering(img):
    gray_lwpCV = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    gray_lwpCV = cv2.GaussianBlur(gray_lwpCV, (7, 7), 0)
    return gray_lwpCV

def DifferentialImage(background,img):
    # 对于每个从背景之后读取的帧都会计算其与背景之间的差异，并得到一个差分图（different map）。
    # 还需要应用阈值来得到一幅黑白图像，并通过下面代码来膨胀（dilate）图像，从而对孔（hole）和缺陷（imperfection）进行归一化处理
    diff = cv2.absdiff(background, img)
    diff = cv2.threshold(diff, 65, 255, cv2.THRESH_BINARY)[1]  # 二值化阈值处理
    diff = cv2.dilate(diff, es, iterations=1)  # 形态学膨胀
    return diff

def getArea(diff):
    contours, hierarchy = cv2.findContours(diff.copy(), cv2.RETR_EXTERNAL,cv2.CHAIN_APPROX_SIMPLE)  # 该函数计算一幅图像中目标的轮廓
    boundGather = []
    for c in contours:
        if cv2.contourArea(c) < 1000:  # 对于矩形区域，只显示大于给定阈值的轮廓，所以一些微小的变化不会显示。对于光照不变和噪声低的摄像头可不设定轮廓最小尺寸的阈值
            continue
        (x, y, w, h) = cv2.boundingRect(c)  # 该函数计算矩形的边界框
        bound = [y, y+h, x, x+w]
        boundGather.append(bound)
    return boundGather

def Objectsave(image, boundelement, num):
    cv2.imwrite(str(num)+".jpg",image[boundelement[0]:boundelement[1], boundelement[2]:boundelement[3]])

def BackgroundSave(image):
    cv2.imwrite("background.jpg",image)