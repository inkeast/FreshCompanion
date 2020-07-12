# Fresh Companion 鲜伴
## 总体介绍
本项目分为三部分：    
* 智能硬件(./IntelligentSensor)端负责收集食材数据和冰箱信息
* 服务器(./Server)负责接收智能硬件的数据并存储处理传给用户
* 快应用(./QuickAPP)为用户交互端，同时通过情景信息和食材信息给予用户推送和状态展示

## 智能硬件
### 依赖库
智能硬件部分使用Python语言撰写，其依赖库如下：    
pyrealsense2,numpy,opencv-python
### 文件结构：
~~~
│D435Driver.py 为对realsense2库的高级封装，其实现了光学和深度数据的提取，用户动作的判断以及区域剩余体积的测量    
│Sysconfig.py 实现了智能硬件部署时的快速设置，其主要用于划定冰箱区域    
│network.py 为智能硬件与服务器数据交换的库     
│ImageProcessing.py 实现了使用opencv对光学数据和深度数据的处理，主要实现了差分放大、二值化、腐蚀、膨胀等图形学操作    
│perception.py 为对低级处理的高级封装，其实现了用户动作感知、食材推断等动作的高级接口    
│ResNet.py 为对PaddlePalle的高级封装，其实现了模型初始化和食材推断的高级接口    
│main.py 为程序的入口    
└─model 内放置ResNet模型
~~~
## 服务器端
### 依赖库
本部分所有依赖库包含在pom.xml内，由Maven自动配置
### 文件结构：
~~~
├─DATA 图片数据缓存    
├─src    
│  ├─main   
│  │  ├─java   
│  │  │  └─group   
│  │  │      └─breaker   
│  │  │          └─freshcompanion    
│  │  │                  categories.java   食材目录类
│  │  │                  ConnHw.java       智能硬件socket连接类
│  │  │                  food.java         单个食材属性类
│  │  │                  FreshcompanionApplication.java  程序入口 controler 类
│  │  │                  Menu.java         菜谱数据集合
│  │  │                  MenuJson.java     菜谱数据类
│  │  │                  MenuTools.java    菜谱数据库查询及菜谱推荐类
│  │  │                  SpaceManage.java  剩余空间类
│  │  │                  TomcatConfig.java tomcat设置类
│  │  └─resources  
│  │      │  application.properties      sprintboot配置文件
│  │      │  application.yml             sprintboot配置文件
│  │      │  freshcompanion.top.pfx      网站证书
│  │      ├─static                       静态数据
│  │      │  └─js
│  │      └─templates                    网站模板
└─target                                 生成的网站部署包
    ├─classes
    │  ├─group
    │  │  └─breaker
    │  │      └─freshcompanion
    │  ├─static
    │  │  └─js
    │  └─templates
    ├─generated-sources
    │  └─annotations
    ├─generated-test-sources
    │  └─test-annotations
    ├─maven-archiver
    ├─maven-status
    │  └─maven-compiler-plugin
    │      ├─compile
    │      │  └─default-compile
    │      └─testCompile
    │          └─default-testCompile
    ├─surefire-reports
    └─test-classes
        └─group
            └─breaker
                └─freshcompanion
~~~
## 快应用端
### 文件结构
~~~
└─src
    ├─CardDemo   快应用卡片 包含保质期展示和条码操作入口
    ├─Common
    │  ├─icon
    │  ├─images
    │  ├─page0
    │  └─space
    ├─page0           食材展示模块
    ├─page0detail     食材详情
    ├─page1           冰箱剩余空间
    ├─page2           商品放置空间判断
    ├─page3           菜谱模块
    ├─page3detail     菜谱详细信息
    ├─page4           用户信息模块
    ├─Register        注册页面
    └─wifi            智能情景感知模块