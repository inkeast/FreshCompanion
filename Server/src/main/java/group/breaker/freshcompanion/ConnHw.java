package group.breaker.freshcompanion;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import com.alibaba.fastjson.JSON;

import java.sql.Statement;
import java.util.Scanner;
import java.net.ServerSocket;
import java.net.Socket;

import com.alibaba.fastjson.JSONObject;
import group.breaker.freshcompanion.*;
/*接收硬件部分信息通信 向全局变量中存信息 不直接通过socket传给客户端 */
public class ConnHw {
    public static void socket() throws ClassNotFoundException, SQLException {

        InputStreamReader isr;
        BufferedReader br;
        OutputStreamWriter osw;
        BufferedWriter rw;
        Connection connection=null;
        Statement stmt = null;


        try {
            Socket socket =new Socket("127.0.0.1",1234);
            isr=new InputStreamReader(socket.getInputStream());
            br=new BufferedReader(isr);
            Connection conn = null;

            // 加载驱动类
            String driverName="com.microsoft.sqlserver.jdbc.SQLServerDriver";//SQL数据库引擎
            String dbURL="jdbc:sqlserver://localhost:1433;DatabaseName=FreshCompanion";//数据源  ！！！注意若出现加载或者连接数据库失败一般是这里出现问题
            String Name="sa";
            String Pwd="123456";
            Class.forName(driverName);
            connection= DriverManager.getConnection(dbURL,Name,Pwd);// 建立连接
            Database database=new Database(connection);

          String jsonString;
          while((jsonString=br.readLine())!=null)
          { JSONObject jsonObject = JSONObject.parseObject(jsonString);
            String service=jsonObject.getString("Service");
              String action=jsonObject.getString("Action");
              switch(service){
                  case "FoodMonitor":
                  { String name;
                      switch(action){
                          case"Add":
                          { if(jsonObject.getBoolean("Recognition"))//将识别到的食品插入到用户库中
                              {
                                  name=jsonObject.getString("Name");
                                  database.insert(name,database.getLife(name),database.getImag(name));
                              }
                                  else {//未识别出的食品，保质期设为-1，传入拍摄图像
                                      database.insert("未知",-1,jsonObject.getString("Image"));
                              }
                              break;}
                          case"Del":
                              { if(jsonObject.getBoolean("Recognition"))//识别移除的食品,从用户数据库中删除
                              {
                                  name=jsonObject.getString("Name");
                                  database.delete(name);
                              }
                              else {//无法确定删除对象
                                  System.out.println("无法确定删除对象");
                              }

                              break;}
                          case"ReturnImg":{
                              Temp.getImg=jsonString;
                              break;}
                      }
                      break;}
                  case "SpaceManage":
                      Temp.setSpace=jsonString;
                      break;
                  default:
                     System.out.println("未知服务");
                      break;
              }

          }
            br.close();
            socket.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        catch (IOException e) {
            e.printStackTrace();
        }

    }

}
