package group.breaker.freshcompanion;

import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;
public class Client{
    public static void main(String[] args) {
        try{
            Socket sk =new Socket("127.0.0.1",3838);
            System.out.println("客户端已经开启----");
            //读取服务器端数据
            DataInputStream input = new DataInputStream(sk.getInputStream());
            //向服务器端发送数据
            DataOutputStream out = new DataOutputStream(sk.getOutputStream());
            String str_o;
            String str_i;
           do{ System.out.print("请选择服务 1.食物清单 2.容量 3.照片 4.条码 \n");
               str_o = new BufferedReader(new InputStreamReader(System.in)).readLine();

            out.writeUTF(str_o);
            out.flush();

               if((str_i=input.readUTF())!=null)System.out.println( str_i);}while(str_o!=null);

           out.close();
            input.close();
            sk.close();
        }
        catch(Exception e){
            e.printStackTrace();
        }



    }

}
