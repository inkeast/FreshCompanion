package group.breaker.freshcompanion;

public class Json {
    private int user_id;
    private String service;
    private String action;
    private String time;

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setService(String service) {
        this.service = service;
    }
    public String getService(){
        return service;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getAction() {
        return action;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getTime() {
        return time;
    }
}

class FoodlistJsoon extends Json{
     String ingredients;

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }
}

