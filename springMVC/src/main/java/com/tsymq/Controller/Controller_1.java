package com.tsymq.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * @Date 2019/9/24 13:50
 * @Created by TSYMQ
 * @Description :  Controller_1
 */

@Controller
@RequestMapping("/hello")
public class Controller_1 {
    @RequestMapping(value = "/first", method = RequestMethod.GET)
    public String first(){
        return "gologin";
    }

    @RequestMapping(value = "/paramBind", method = RequestMethod.GET)
    public String paramBind(String un, String id, ModelMap map){
        map.addAttribute("un", un);
        map.addAttribute("id", id);
        System.out.println(un+" -- "+id);
        return "gologin";
    }

    @RequestMapping(value = "/static", method = RequestMethod.GET)
    public String staticPage(){
        return "redirect:/static/html/hello.html";
    }

}
