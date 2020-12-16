using Newtonsoft.Json;
using ProjectMassage_QA.Areas.Admin.Models;
using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using ProjectMassage_QA.DAO;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers
{
    [AuthorizeBusiness]
    public class BLOG_BUSINESSController : BaseController
    {
        //
        // GET: /BLOG_BUSINESS/
        //   [AuthorizeBusiness]
        readonly Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult UpdateBusiness()
        {
            ReflectionController rc = new ReflectionController();
            List<Type> listControllerType = rc.GetControllers("ProjectMassage_QA.Areas.Admin.Controllers");
            List<string> listControllerOld = db.BLog_Business_TenQuyen.Select(c => c.BusinessId).ToList();
            List<string> listPermistionOld = db.BLog_Permission_BCacQuenCT.Select(p => p.PermissionName_TenQuyen).ToList();

            foreach (var c in listControllerType)
            {
                if (!listControllerOld.Contains(c.Name))
                {
                    var kt = db.BLog_Business_TenQuyen.Where(x => x.BusinessId == c.Name).Count();
                    if (kt == 0)
                    {
                        BLog_Business_TenQuyen b = new BLog_Business_TenQuyen() { BusinessId = c.Name, BusinessName = "Chưa có mô tả" };
                        db.BLog_Business_TenQuyen.Add(b);
                        db.SaveChanges();
                    }
                }
                List<string> listPermission = rc.GetActions(c);
                var da1 = 0;
                var listSophieuthu = (from A in db.BLog_Permission_BCacQuenCT
                                      where (A.PermissionId > 0)
                                      orderby A.PermissionId descending
                                      select new
                                      {
                                          PermissionId = A.PermissionId
                                      }).Take(1).ToList();
                if (db.BLog_Permission_BCacQuenCT.Count(x => x.PermissionId != null) > 0)
                {
                    foreach (var item in listSophieuthu)
                    {
                        da1 = item.PermissionId + 1; ;
                    }
                }
                else
                {
                    da1 = 1;
                }
                foreach (var p in listPermission)
                {

                    var p1 = "";
                    if (p.IndexOf("-") != -1)
                    {
                        p1 = p.Substring(p.IndexOf("-"), p.Length);
                    }
                    else
                    {
                        p1 = p;
                    }
                    var kt1 = db.BLog_Permission_BCacQuenCT.Where(x => x.BusinessId == c.Name && x.PermissionName_TenQuyen == p1).Count();
                    if (kt1 == 0)
                    {

                        BLog_Permission_BCacQuenCT permission = new BLog_Permission_BCacQuenCT() { PermissionName_TenQuyen = p1, Description = "Chưa có mô tả", BusinessId = c.Name, PermissionId = da1 };
                        db.BLog_Permission_BCacQuenCT.Add(permission);
                        da1 += 1;
                    }
                }
            }
            db.SaveChanges();
            TempData["err"] = "<div class='alert alert-into' role='alert'> <span class='glyphicon glyphicon-exclanmation-sign' aria-hiddren='true'><span class='sr-only'>Cập nhât không thành công</span>)";
            return RedirectToAction("Danh_Muc_Va_Danh_Sach_Quyen_Han");
        }


        // GET: /Admin/BlogBusiness/
        public ActionResult Danh_Muc_Va_Danh_Sach_Quyen_Han()
        {
            return View(db.BLog_Business_TenQuyen.ToList());
        }

        public JsonResult Get_Quyen_Theo_Danh_Muc(string id)
        {
            var list = db.BLog_Business_TenQuyen.Where(x => x.BusinessId == id).ToList();
            string value = string.Empty;
            value = JsonConvert.SerializeObject(list, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(value, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Luu_Mo_Ta_Danh_MUC(BLog_Business_TenQuyen[] vanle)
        {
            var id = vanle[0].BusinessId;
            var danhmuc = db.BLog_Business_TenQuyen.Find(id);
            danhmuc.BusinessName = vanle[0].BusinessName;
            db.SaveChanges();
            var value = danhmuc;
            return Json(value, JsonRequestBehavior.AllowGet);
        }
        
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult SUA_MO_TA_DANH_MUC([Bind(Include = "BusinessId,BusinessName")] BLog_Business_TenQuyen blogbusiness)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        db.Entry(blogbusiness).State = EntityState.Modified;
        //        db.SaveChanges();
        //        return RedirectToAction("Danh_Muc_Va_Danh_Sach_Quyen_Han");
        //    }
        //    return View(blogbusiness);
        //}

        public JsonResult GetDelete_Danh_muc(string idconty)
        {


            var sott = "B";

            var value1 = new BLog_busniss().Delete(idconty);
            var listquyen = db.BLog_Permission_BCacQuenCT.Where(x => x.BusinessId == idconty).ToList();
            if (value1 == true && listquyen != null)
            {
                foreach (var item in listquyen)
                {
                    var valu = new BLog_Permission().Delete(item.PermissionId);
                }
            }

            string value = string.Empty;
            value = JsonConvert.SerializeObject(sott, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(value, JsonRequestBehavior.AllowGet);
        }
    }
}