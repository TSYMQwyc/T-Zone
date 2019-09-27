package com.tsymq.mymain;

/**
 * @Date 2019/9/25 15:45
 * @Created by TSYMQ
 * @Description :  User
 */

public class User {
    private String account;
    private String password;
    private String vcode;

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getVcode() {
        return vcode;
    }

    public void setVcode(String vcode) {
        this.vcode = vcode;
    }

    @Override
    public String toString() {
        return "User{" +
                "account='" + account + '\'' +
                ", password='" + password + '\'' +
                ", vcode='" + vcode + '\'' +
                '}';
    }
}
