package tiy.com;

import javax.persistence.*;

/**
 * Created by jessicatracy on 9/20/16.
 */
@Entity
@Table(name = "stringitems")
public class StringItem {
    @Id
    @GeneratedValue
    int id;

    @ManyToOne
    User user;

    @Column(nullable = false)
    String text;

    public StringItem() {
    }

    public StringItem(String text) {
        this.text = text;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
