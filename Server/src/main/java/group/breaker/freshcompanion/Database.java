package group.breaker.freshcompanion;

import org.apache.commons.beanutils.PropertyUtilsBean;

import java.sql.*;

public class Database{
    Connection conn = null;
    Database(Connection conn){this.conn=conn;}
    public void insert(String name,int s_life,String image) throws ClassNotFoundException, SQLException//向用户数据库中添加食品
    {
        String sql = "insert into userfood values(?, ?, ?)";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, name);
        ps.setInt(2, s_life);
        ps.setString(3, image);
        ResultSet rs = ps.executeQuery();
    }
    public void insertFood(String name,int s_life,String image) throws ClassNotFoundException, SQLException//向食品数据库中添加食品
    {
        String sql = "insert into food values(?, ?, ?)";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, name);
        ps.setInt(2, s_life);
        ps.setString(3, image);
    }
    public void delete(String name) throws ClassNotFoundException, SQLException//从用户数据库中删除食品
    {
        String sql = "delete from userfood where name = ? ";
         PreparedStatement ps = conn.prepareStatement(sql);
         ps.setString(1, name);
        ResultSet rs = ps.executeQuery();
    }
    public void deleteFood(String name) throws ClassNotFoundException, SQLException//从用户数据库中删除食品
    {
        String sql = "delete from food where name = ? ";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1, name);

    }
    public int getLife(String name)throws ClassNotFoundException, SQLException//从食品数据库中获得该食品的保质期
    {
        String sql = "select shelf_life from food where fname=?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1,name);
        ResultSet rs = ps.executeQuery();
        return rs.getInt(1);
    }
    public String getImag(String name)throws ClassNotFoundException, SQLException//从食品数据库中获得该食品的图片
    {
        String sql = "select image from food where fname=?";
        PreparedStatement ps = conn.prepareStatement(sql);
        ps.setString(1,name);
        ResultSet rs = ps.executeQuery();
        return rs.getString(1);
    }
    public int getNum()throws ClassNotFoundException, SQLException//获取用户数据库中食品的个数
    {
        String sql = "select count(*) from userfood";
        PreparedStatement ps = conn.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        return rs.getInt(1);
    }
    public String getList()throws ClassNotFoundException, SQLException//获得食品列表，返回json字符串形式{"name:"","shelf_life":"","image":""},{...},{...}
    {
        String sql = "select * from userfood";
        System.out.println(1);
        PreparedStatement ps = conn.prepareStatement(sql);
        ResultSet rs = ps.executeQuery();
        String s="";
        if(rs.first())
        {do{System.out.println(3);
            s=s+"{\"name\":\""+rs.getString(1)+"\",\"shelf_life\",\""+rs.getInt(2)+"\",\"image\",\""+rs.getString(3)+"\"},";
        }while(rs.next());
        return  s.substring(0,s.length()-1);}
        else return "";
    }



}

