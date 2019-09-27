package com.tsymq.Controller;

import com.tsymq.mymain.User;
import com.tsymq.util.VerifyCode;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.awt.image.BufferedImage;
import java.io.OutputStream;
import java.util.Map;

/**
 * @Date 2019/9/25 14:16
 * @Created by TSYMQ
 * @Description :  LoginController
 */
@Controller
public class LoginController {

    @RequestMapping("/getImage.do")
    @ResponseBody
    public void getImage(HttpServletRequest request, HttpServletResponse response){
        Map<String, Object> map = VerifyCode.generateImage();

        String code = (String)map.get("code");

        HttpSession session = request.getSession();
        session.setAttribute("code", code);

        if (session.getAttribute("code") != null){
            System.out.println(session.getAttribute("code")+"(Session)");
        }
        try {
            BufferedImage image = (BufferedImage)map.get("image");
            OutputStream os = response.getOutputStream();
            ImageIO.write(image, "jpg", os);
        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }

    @RequestMapping(value = "/verifyInfo", produces = "text/html;charset=UTF-8", method = RequestMethod.POST)
    @ResponseBody
    public String verifyInfo(User user, HttpSession session){
        System.out.println(user);
        if(user.getVcode().equalsIgnoreCase((String)session.getAttribute("code"))){
            if(user.getAccount().equals("tsymq") && user.getPassword().equals("12345")){
                return "登录成功，欢迎~";
            }
            else return "账号或密码错误..";
        }
        else return "验证码错误..";
    }
}
