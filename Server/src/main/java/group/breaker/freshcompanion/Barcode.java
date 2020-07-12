package group.breaker.freshcompanion;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Barcode {
    public String Service = "SpaceManage";
    public String Action = "Barcode";
    public String Code = "";
    public String Fname = "";
    public double UseSpace = 0;
    public double MaxSpace = 0;
    public int count = 0;
    public String Date ;

    Barcode(Statement stmt, String Code, int UserID){
        this.Code = Code;
        try{
            String sql = "select * from SpaceManage where UserID = " + UserID ;
            ResultSet rs = stmt.executeQuery(sql);
            while (rs.next()){
                MaxSpace += rs.getDouble("SurplusSpace");
            }
            String sqlp = "select * from CommodityBarCode where Code = \'" + Code + "\'" ;
            ResultSet rsp = stmt.executeQuery(sqlp);
            while (rsp.next()){
                Fname = rsp.getString("Fname");
                UseSpace = rsp.getDouble("UseSpace");
            }
            if(Fname == ""){
                Fname = "未查询到当前商品";
                UseSpace = -1;
                count = -1;
            }else{
                count = (new Double(MaxSpace/UseSpace)).intValue();
            }
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss");//设置日期格式
            Date =df.format(new Date());// new Date()为获取当前系统时间
        }catch (SQLException e){
            System.out.println(e);
        }
        catch (NullPointerException e){
            System.out.println(e);
        }
    }
}
