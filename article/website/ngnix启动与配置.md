1 启动，停止，重新加载配置文件

nginx启动只需要执行nginx命令即可，nginx启动之后可通过下列命令来控制nginx

       nginx -s signal
       signal表示
       stop 停止
       quit 退出
       reload 重新加载配置文件
       reopen 重新打开日志
       
2.nginx配置文件 nginx配置文件位置，/etc/nginx, /usr/local/nginx/conf或者
/usr/local/etc/nginx文件夹下的nginx.conf

3.配置文件结构说明
>nginx由模块组成，模块由配置文件中指定的指令控制，指令分为简答指令和块指令
 
>一个简单的指令由名称和参数组成，以空格分隔，；结尾

>块指令和简单指令拥有相同结构，但不是以分号结尾，而是以{}和一些附加指令结尾

>如果一个块指令的{}中包含其它指令，那么这个快被称为context（如http,server,events
>,location)

>放在任何上下文之外的配置文件中的指令都被认为是在主context中,event和http context
>在main context中，server context在http context中，location context只存在
>server context中

4.配置静态资源
    
    http {
        server {
            location / {
                root /data/www;
            }
        }
    }
上面就是一个简单的静态资源配置例子，通常一个http中可以有好几个server,这些server
有他们监听的端口和服务器名来区分，一旦决定使用哪一个服务器来处理请求，就会根据
其中的location块来匹配相应的url

例如上面的指令就是说，当匹配到/时，就会到/data/www目录下去寻找资源

除此之外，还可以在添加一个location块

    location /image {
        root /data/image;
    }

该块表示匹配到/image，就会到/data/image文件夹下寻找资源，

在匹配时，会优先匹配/image 然后是/

5 设置简单代理

    server {
        location / {
            proxy_pass http://localhost:8080;
        }
    }
在location中加上 proxy_pass 在跟代理位置，这样访问 /的请求就会被转到
http://localhost:8080服务器上了

这样将你编好的html文件放到定义的location文件夹下，就可以使用浏览器访问了
    


