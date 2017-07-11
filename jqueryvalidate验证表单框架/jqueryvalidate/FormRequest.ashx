<%@ WebHandler Language="C#" Class="FormRequest" %>

using System;
using System.Web;

public class FormRequest : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        string top = context.Request["Top"];
        
        
        context.Response.Write(top);

        context.Response.Write("{\"success\":1,\"msg\":\"添加成功!\"}");
        
        
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}