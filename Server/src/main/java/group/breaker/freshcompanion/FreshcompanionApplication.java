package group.breaker.freshcompanion;

import com.alibaba.fastjson.JSON;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.sql.*;
import java.util.Timer;
import java.util.TimerTask;


@Controller
@SpringBootApplication
@Configuration
public class FreshcompanionApplication {
    private static HikariDataSource ds = null;
    private static String driverName="com.microsoft.sqlserver.jdbc.SQLServerDriver";//SQL数据库引擎
    private static String dbURL="jdbc:sqlserver://47.95.221.147:1433;DatabaseName=";//数据源  ！！！注意若出现加载或者连接数据库失败一般是这里出现问题
    private static  String Name="SA";
    private static  String Pwd="Breaker@123456";
    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        database_init();
        SpringApplication.run(FreshcompanionApplication.class, args);
        /*ConnHw connHw = new ConnHw();
        while (true){
            connHw.socket();
        }*/
    }

    public static void database_init(){
        try{
            //实例化类
            HikariConfig hikariConfig = new HikariConfig();
            //设置url
            hikariConfig.setJdbcUrl(dbURL);
            //数据库帐号
            hikariConfig.setUsername(Name);
            //数据库密码
            hikariConfig.setPassword(Pwd);
            hikariConfig.addDataSourceProperty("cachePrepStmts", "true");
            hikariConfig.addDataSourceProperty("prepStmtCacheSize", "250");
            hikariConfig.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");
            ds = new HikariDataSource(hikariConfig);
        }catch(Exception e){
            e.printStackTrace();
            System.out.println("连接失败");
        }
    }

    @RequestMapping(value = "categories", method = RequestMethod.POST)
    @ResponseBody
    public String categories()throws SQLException{
        Connection conn = ds.getConnection();
        Statement stmt = conn.createStatement();
        categories data = new categories(stmt);
        String jsonString = JSON.toJSONString(data);
        conn.close();
        System.out.println(jsonString);
        return jsonString;
    }

    @RequestMapping(value = "space", method = RequestMethod.POST)
    @ResponseBody
    public String space(@RequestParam("UserID") int UserID,@RequestParam("SpaceNo") int SpaceNo)throws SQLException{
        Connection conn = ds.getConnection();
        Statement stmt = conn.createStatement();
        SpaceManage data = new SpaceManage(stmt,UserID,SpaceNo);
        String jsonString = JSON.toJSONString(data);
        conn.close();
        System.out.println(jsonString);
        return jsonString;
    }

    @RequestMapping(value = "Menu", method = RequestMethod.POST)
    @ResponseBody
    public String Menu(@RequestParam("ReadCount") int UserID,@RequestParam("ReadCount") int ReadCount)throws SQLException{
        Connection conn = ds.getConnection();
        Statement stmt = conn.createStatement();
        MenuTools menuTools = new MenuTools(stmt,ReadCount);
        String jsonString = JSON.toJSONString(menuTools);
        conn.close();
        System.out.println(jsonString);
        return jsonString;
    }

    @RequestMapping(value = "icon", method = RequestMethod.GET)
    public void icon(HttpServletRequest req, HttpServletResponse resp, @RequestParam("name") String name)throws ServletException, IOException {
        String fileName = "./DATA/"+name;
        FileInputStream file=new FileInputStream(fileName);
        OutputStream os=resp.getOutputStream();

        byte[] b=new byte[1024];
        int len=0;
        while((len=file.read(b))!=-1){
            os.write(b,0,len);
        }
        file.close();
    }

    @RequestMapping(value = "BarCode", method = RequestMethod.POST)
    @ResponseBody
    public String BarCode(@RequestParam("Code") String code,@RequestParam(value = "UserID", required = false, defaultValue = "1") int UserID)throws SQLException{
        Connection conn = ds.getConnection();
        Statement stmt = conn.createStatement();
        Barcode barCode = new Barcode(stmt,code,UserID);
        String jsonString = JSON.toJSONString(barCode);
        conn.close();
        System.out.println(jsonString);
        return jsonString;
    }

    @RequestMapping(value = "setspace", method = RequestMethod.POST)
    @ResponseBody
    public boolean setspace(@RequestParam("UserID") int UserID,@RequestParam("SpaceNo") int SpaceNo,@RequestParam("Value") double value)throws SQLException{
        Connection conn = ds.getConnection();
        Statement stmt = conn.createStatement();
        boolean r = SpaceChange.Change(stmt,UserID,SpaceNo,value);
        conn.close();
        System.out.println("update Space");
        return r;
    }

    @RequestMapping(value = "index")
    public String index(Model model){
        return "index";
    }

}
