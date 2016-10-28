<%@ Page Language="C#" %>

<%
    try
    {
        string strImageName, strImageSize;
        HttpFileCollection files = HttpContext.Current.Request.Files;
        HttpPostedFile uploadfile = files["RemoteFile"];
        strImageName = uploadfile.FileName;
        strImageSize = Convert.ToString(Convert.ToInt32(uploadfile.ContentLength / 1024)) + "KB";
        string strInputFile = Server.MapPath(".") + "\\UploadedImages\\" + strImageName;
        uploadfile.SaveAs(strInputFile);
        string path = strInputFile.Substring(0, strInputFile.Length - 4) + "_1.txt";
    }
    catch
    {
    }
%>