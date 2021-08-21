# Promise

## 安装 ESlint  


```
    npm install eslint -D
```

### 配置 ESlint  
  
  Eslint 配置

  在`package.json`文件的 `scripts` 中添加下面的命令脚本
  
```
        "ESlint": "eslint ./src",
        "ESlint:create": "eslint --init",
```

### ESlint 使用
  
  第一次使用ESlint

```
        npm run ESlint:create
```

  规范检查
  
```
        npm run ESlint
```