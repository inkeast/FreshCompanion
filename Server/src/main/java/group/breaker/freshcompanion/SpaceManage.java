package group.breaker.freshcompanion;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class SpaceManage {
    public int UserID;
    public String Service = "SpaceManage";
    public String Action = "space";
    public int SpaceNo;
    public double SurplusSpace ;
    public double MAXSpace;
    public String img ;
    public String Date ;
    SpaceManage(Statement stmt,int UserID,int SpaceNo){
        this.UserID = UserID;
        this.SpaceNo =SpaceNo;
        try{
            String sql = "select * from SpaceManage where UserID = " + UserID + " and SpaceNo = " + SpaceNo;
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()){
                SurplusSpace = rs.getDouble("SurplusSpace");
                MAXSpace = rs.getDouble("MAXSpace");
                img = rs.getString("image");
            }
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss");//设置日期格式
            Date =df.format(new Date());// new Date()为获取当前系统时间
        }
        catch (SQLException e){
            System.out.println(e);
        }
        catch (NullPointerException e){
            System.out.println(e);
        }

    }
}
