# nginx配置
```
    ## 基座配置
    server
    {
        listen 8099;
        server_name  127.0.0.1;

        location / {
            root D:\\qiankun\\server;
            index index.html index.htm;
            try_files $uri $uri/ /main/index.html;
        }
    }
    ## default配置
    server
    {
        listen 8012;
        server_name  127.0.0.1;

        #允许跨域请求的域，*代表所有
        add_header 'Access-Control-Allow-Origin' *;
        #允许带上cookie请求
        add_header 'Access-Control-Allow-Credentials' 'true';
        #允许请求的方法，比如 GET/POST/PUT/DELETE
        add_header 'Access-Control-Allow-Methods' *;
        #允许请求的header
        add_header 'Access-Control-Allow-Headers' *;
        
        location /child/default {
            alias D:\\qiankun\\default;
        }
    }
```