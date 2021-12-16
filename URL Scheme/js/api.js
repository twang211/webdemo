/*
 * @Autor: Twang
 * @Date: 2021-08-03 09:47:58
 * @Description: 
 * @TODO: 
 * @Version: 1.0
 * @LastEditors: Twang
 * @LastEditTime: 2021-08-13 16:24:32
 * @FilePath: api.js
 * Copyright (C) 2021 Twang. All rights reserved.
 */
function is_report(data){
    $.ajax({
        //请求方式
        type : "POST",
        //请求的媒体类型
        contentType: "application/json;charset=UTF-8",
        //请求地址
        url : "url",
        //数据，json字符串
        data : JSON.stringify(data),
        //请求成功
        success : function(result) {
            console.log(result);
            if(result.code === 200){
            }
        },
        //请求失败，包含具体的错误信息
        error : function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    });

}