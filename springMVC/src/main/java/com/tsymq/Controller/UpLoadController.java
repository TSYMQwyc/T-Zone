package com.tsymq.Controller;

import com.sun.jersey.api.client.WebResource;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import com.sun.jersey.api.client.Client;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.util.List;
import java.util.UUID;

/**
 * @Date 2019/9/25 22:48
 * @Created by TSYMQ
 * @Description :  UpLoadController
 */

@Controller
public class UpLoadController {

    @RequestMapping("/uploadfile")
    public String uploadfile(){

        return "uploadpage";
    }

    @RequestMapping("/upload")
    public String upload(HttpServletRequest request, HttpServletResponse response) throws Exception{

        //使用fileupload组件完成文件上传
        //上传的位置
        String path = request.getSession().getServletContext().getRealPath("/uploadfiles/");

        //判断该路劲是否存在
        File file = new File(path);

        if (file.exists()){
            //创建该文件夹
            file.mkdirs();
        }

        //解析request，获取上传文件项
        DiskFileItemFactory factory =new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);

        //解析request
        List<FileItem> items = upload.parseRequest(request);
        for (FileItem item : items){
            //判断当前item是否为上传文件项
            if (item.isFormField()){
                //说明是普通表单项
                System.out.println("不是文件");
            }
            else {
                System.out.println("开始上传");
                //说明是上传文件项
                //获取上传文件的名称
                String filename = item.getName();

                String uuid = UUID.randomUUID().toString().replace("-", "");
                filename = uuid+"-"+filename;
                //完成文件上传
                item.write(new File(path, filename));
                //删除临时文件
                item.delete();
            }
        }
        return "success2";
    }

    //SpringMVC文件上传
    @RequestMapping("/upload2")
    public String upload2(HttpServletRequest request, MultipartFile file) throws Exception{
        System.out.println("SpringMVC 文件上传");

        //上传的位置
        String path = request.getSession().getServletContext().getRealPath("/uploadfiles/");

        //判断该路劲是否存在
        File f = new File(path);

        if (f.exists()){
            //创建该文件夹
            f.mkdirs();
        }

        String filename =file.getOriginalFilename();

        String uuid = UUID.randomUUID().toString().replace("-", "");
        filename = uuid+"-"+filename;

        System.out.println("上传中...");
        //完成文件上传
        file.transferTo(new File(path, filename));

        return "success2";
    }

    //SpringMVC跨服务器文件上传
    @RequestMapping("/upload3")
    public String upload3(MultipartFile file) throws Exception{
        System.out.println("SpringMVC 跨服务器文件上传");

        //定义上传的服务器的路径
        String path = "http://localhost:8480/uploads/";


        String filename =file.getOriginalFilename();

        String uuid = UUID.randomUUID().toString().replace("-", "");
        filename = uuid+"-"+filename;

        System.out.println("上传中...");

        //创建客户端对象
        Client client = Client.create();

        //和服务器进行连接
        WebResource resource = client.resource(path + filename);

        //上传文件
        resource.put(file.getBytes());

        return "success2";
    }

}
