package group.breaker.freshcompanion;



import org.springframework.util.ResourceUtils;
import java.util.Date;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


public class categories {
    public int UserID = 1;
    public String Service = "FoodMonitor";
    public String Action = "categories";
    public List<food> ingredients = new ArrayList<>();
    public String Date ;

    categories(Statement stmt){
        try{
            String sql = "select * from userfood order by s_life";
            ResultSet rs = stmt.executeQuery(sql);
            int count = 1;
            while (rs.next()){
                food f = new food(count,rs.getString("fname"),rs.getString("image"),rs.getString("s_life"));
                ingredients.add(f);
                count += 1;
            }
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH-mm-ss");//设置日期格式
            Date =df.format(new Date());// new Date()为获取当前系统时间
        }
        catch (SQLException e){
            System.out.println(e);
        }

    }
}
