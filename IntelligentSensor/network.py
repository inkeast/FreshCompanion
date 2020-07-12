import socket
import time
import json
import base64
import requests

host = "127.0.0.1"          #服务器地址
port = 12345                #服务器端口

def init():
    s = socket.socket()
    s.connect((host, port))
    return s


def add(socket, Recognition, name, imagepath):
    f = open(imagepath, 'rb')
    Image = base64.b64encode(f.read()).decode('utf-8')
    Date = time.strftime("%Y-%m-%d %H-%M-%S", time.localtime())
    json_bag = {}
    json_bag['UserID'] = 1
    json_bag['Service'] = "FoodMonitor"
    json_bag['Action'] = "Add"
    json_bag['Recognition'] = Recognition
    json_bag['Image'] = Image
    json_bag['Name'] = name
    json_bag['Date'] = Date
    json_s = json.dumps(json_bag)
    socket.send(json_s.encode('utf-8'))
    f.close()


def delete(socket, Recognition, name, imagepath):
    f = open(imagepath, 'rb')
    Image = base64.b64encode(f.read()).decode('utf-8')
    Date = time.strftime("%Y-%m-%d %H-%M-%S", time.localtime())
    json_bag = {}
    json_bag['UserID'] = 1
    json_bag['Service'] = "FoodMonitor"
    json_bag['Action'] = "Del"
    json_bag['Recognition'] = Recognition
    json_bag['Image'] = Image
    json_bag['Name'] = name
    json_bag['Date'] = Date
    json_s = json.dumps(json_bag)
    socket.send(json_s.encode('utf-8'))
    f.close()


def setspace(socket, SurplusSpace):
    Date = time.strftime("%Y-%m-%d %H-%M-%S", time.localtime())
    json_bag = {}
    json_bag['UserID'] = 1
    json_bag['Service'] = "SpaceManage"
    json_bag['Action'] = "SetSpace"
    json_bag['SpaceNo'] = 1
    json_bag['SurplusSpace'] = SurplusSpace
    json_bag['Date'] = Date
    json_s = json.dumps(json_bag)
    socket.send(json_s.encode('utf-8'))


def disconnect(socket):
    socket.close()


def return_img(socket, imagepath):
    json_r = socket.recv(4096).decode()
    js = json.loads(json_r)
    if js["Action"] == "GetImg":
        f = open(imagepath, 'rb')
        Image = base64.b64encode(f.read()).decode('utf-8')
        json_bag = {}
        Date = time.strftime("%Y-%m-%d %H-%M-%S", time.localtime())
        json_bag['UserID'] = 1
        json_bag['Service'] = "FoodMonitor"
        json_bag['Action'] = "ReturnImg"
        json_bag['SpaceNo'] = 1
        json_bag['Img'] = Image
        json_bag['Date'] = Date
        json_s = json.dumps(json_bag)
        socket.send(json_s.encode('utf-8'))
        f.close()

def sendBackground(socket,imagepath):
    f = open(imagepath, 'rb')
    Image = base64.b64encode(f.read()).decode('utf-8')
    json_bag = {}
    Date = time.strftime("%Y-%m-%d %H-%M-%S", time.localtime())
    json_bag['UserID'] = 1
    json_bag['Service'] = "FoodMonitor"
    json_bag['Action'] = "ReturnImg"
    json_bag['SpaceNo'] = 1
    json_bag['Img'] = Image
    json_bag['Date'] = Date
    json_s = json.dumps(json_bag)
    socket.send(json_s.encode('utf-8'))
    f.close()

def SetSpace(UserID,SpaceID,value):
    url = "http://47.95.221.147:8080/setspace?UserID="+str(UserID)+"&SpaceNo="+str(SpaceID)+"&Value="+str(value)
    data = {}
    requests.post(url=url, data=data)