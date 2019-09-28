package com.tsymq.util;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

/**
 * @Date 2019/9/25 14:21
 * @Created by TSYMQ
 * @Description :  VerifyCode
 */

public class VerifyCode {

    private static int w = 120;
    private static int h = 40;
    static Random r = new Random();

    //1、准备字典
    private static final char[] dict = { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N',
            'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '2', '3', '4', '5', '6', '7', '8', '9' };

    public static Map<String, Object> generateImage(){
        Map<String, Object> result = new HashMap<>();

        //图片对象
        BufferedImage image = new BufferedImage(120, 40, BufferedImage.TYPE_INT_BGR);

        //创建画笔
        Graphics g = image.getGraphics();
        Graphics2D g2d = (Graphics2D)g;

        //绘制矩形
        g2d.setColor(Color.LIGHT_GRAY);
//        g2d.drawRect();       绘制矩形边框
        g2d.fillRect(0, 0, 120, 40);

        //生成随机验证码
        String code = "";
        for(int i = 0; i < 4; i++){
            int index = r.nextInt(dict.length);
            char c = dict[index];
            g2d.setColor(new Color(r.nextInt(255), r.nextInt(255), r.nextInt(255) ));
            g2d.setFont(new Font("宋体", Font.PLAIN,22));
            g2d.drawString(c+"", 10 + i*30, 20);
            code += c;
        }

        System.out.println(code+"(VerifyCode)");

        for(int i=0; i<10; i++){
            int x1 = r.nextInt(120);
            int y1 = r.nextInt(40);
            int x2 = r.nextInt(120);
            int y2 = r.nextInt(40);
            g2d.setColor(new Color(r.nextInt(255), r.nextInt(255), r.nextInt(255) ));
            g2d.drawLine(x1, y1, x2, y2);
        }

        result.put("code", code);
        result.put("image", image);

        return result;
    }
}
