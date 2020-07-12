package group.breaker.freshcompanion;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MenuTools {
    public int UserID = 1;
    public String Service = "FoodMonitor";
    public String Action = "Menu";
    public List<Menu> Menus = new ArrayList<>();
    public String Date ;

    MenuTools(Statement stmt,int count){
        try{
            String sql = "select * from userfood";
            String sqln = "";
            ResultSet rs = stmt.executeQuery(sql);
            int i = 0;
            int limiti = 0;
            count = count*5;
            if(rs.next())
            {
                sqln = "select * from Menu where Ingredients LIKE N'%"+ rs.getString("fname")+"%' ";
            }
            while (rs.next()){
                sqln = sqln + "union select * from Menu where Ingredients LIKE N'%"+ rs.getString("fname")+"%' ";
            }
            sqln = sqln + " order by Rate  DESC";
            rs = stmt.executeQuery(sqln);
            while (rs.next()){
                if(i > count){
                    Menu menu = new Menu(rs.getString("Mname"),rs.getString("Image"),rs.getString("Ingredients"),rs.getString("Step"),rs.getString("RateImg"));
                    Menus.add(menu);
                    limiti++;
                    if(limiti >= 5)break;
                }
                i++;
            }
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss");//设置日期格式
            Date =df.format(new Date());// new Date()为获取当前系统时间
        }
        catch (SQLException e){
            System.out.println(e);
        }

    }
}
