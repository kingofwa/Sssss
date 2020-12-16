using Newtonsoft.Json;
using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using ProjectMassage_QA.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers
{
   [AuthorizeBusiness]
    public class BLOG_PERMISSIONController : BaseController
    {
        //
        // GET: /BLOG_PERMISSION/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Danh_Sach_Quyen(string id)
        {
            var permission = db.BLog_Permission_BCacQuenCT.Where(x => x.BusinessId == id);
            return View(permission.ToList());
        }

       public JsonResult Get_Danh_Sach_Quyen_Theo_Danh_Muc(int id)
        {
            var list = db.BLog_Permission_BCacQuenCT.Where(x => x.PermissionId == id).ToList();
            string value = string.Empty;
            value = JsonConvert.SerializeObject(list, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(value, JsonRequestBehavior.AllowGet);
        }

       public JsonResult Save_Mo_Ta_Quyen_id(BLog_Permission_BCacQuenCT[] congty)
        {
            var value = "";
           
            var tg = 0;
            if (congty[0].PermissionId > 0)
            {
                tg = congty[0].PermissionId;
                BLog_Permission_BCacQuenCT cong = db.BLog_Permission_BCacQuenCT.Find(tg);
                cong.Description = congty[0].Description;
                db.SaveChanges();
                value =cong.BusinessId ;
            }

            return Json(value, JsonRequestBehavior.AllowGet);

        }


       public JsonResult GetDelete_Ten_Quyen(int idconty)
        {
 
            var sott = "B";

            var value1 = new BLog_Permission().Delete(idconty);

           
            string value = string.Empty;
            value = JsonConvert.SerializeObject(sott, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(value, JsonRequestBehavior.AllowGet);
        }
      public JsonResult Phan_Quyen_Cap_cao(int id,Boolean kt)
       {
             var value=false;
             try{
                var quyen_action = db.BLog_Permission_BCacQuenCT.Find(id);
                 if(quyen_action!=null)
                 {
                     quyen_action.Quyencapcao = kt;
                     db.SaveChanges();
                     value = kt;
                 }

             }
             catch(Exception)
             {
                 value=false;
             }
          
           return Json(value,JsonRequestBehavior.AllowGet);
       }

      public JsonResult Cap_Quyen_Cao_Nhat_All(string check_quyen_all, Boolean kt)
       {
          var quyen_action = db.BLog_Permission_BCacQuenCT.Where(x => x.BusinessId.IndexOf(check_quyen_all)> -1).ToList();
          var  value=false;
          try{              
                 List<BLog_Permission_BCacQuenCT> Tonghop=new List<BLog_Permission_BCacQuenCT>();
                 foreach(var item in quyen_action)
       {
           var quyen = db.BLog_Permission_BCacQuenCT.Find(item.PermissionId);
           quyen.Quyencapcao = kt;
           Tonghop.Add(quyen);

       }
                 db.SaveChanges();
                 value = kt;
          }
          catch (Exception)
          {
              value = false;
          }

          return Json(value, JsonRequestBehavior.AllowGet);
       }


    }
}