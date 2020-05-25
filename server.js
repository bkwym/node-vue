const express =require("express");
const app=express();
//设置默认路由
app.get('/',(req,res)=>{
    res.send("Hello World");
})
//设置运行端口
const   port =process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running with port ${port}`);
})