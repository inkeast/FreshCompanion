package group.breaker.freshcompanion;

import java.sql.Connection;
import java.sql.DriverManager;

/*可提前设置数据库中信息*/
public class Operate {
    public void main(String[] args)throws Exception
    {
        Connection conn = null;
        conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=UTF-8&serverTimezone=UTC",
                "Sa", "123456");
        Database db=new Database(conn);
        db.insert("苹果",15,"图片地址");//向user添加  insertFood（）为向食品数据库中添加
    }

}
