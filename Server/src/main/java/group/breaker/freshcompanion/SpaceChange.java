package group.breaker.freshcompanion;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.Date;

public class SpaceChange {
    static boolean  Change(Statement stmt, int UserID, int SpaceNo ,double value){
        try{
            String sql = "update SpaceManage set SurplusSpace = " + value + " where UserId = " + UserID + " and SpaceNo =" + SpaceNo;
            stmt.executeQuery(sql);
        }
        catch (SQLException e){
            System.out.println(e);
            return false;
        }
        catch (NullPointerException e){
            //System.out.println(e);
            return false;
        }
    return true;
    }
}
