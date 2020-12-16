using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers.setting
{
    [AuthorizeBusiness]
    public class AdminFooterController : BaseController
    {
        Data_MassageEntities7 db = new Data_MassageEntities7();
        // GET: Admin/AdminFooter
        public ActionResult Index()
        {
            var list_foot = db.Footer_client.ToList();
            ViewData["list_foot"] = list_foot;
            return View();
        }
        public JsonResult Save_Footer(Footer_client[] footer)
        {
            var value = 0;
            var Id = 0;
            try
            {
                if (footer[0].Id > 0)
                {
                    var update = db.Footer_client.Find(footer[0].Id);
                    update.Name_f = footer[0].Name_f;
                    update.Sodienthoai = footer[0].Sodienthoai;
                    update.Diachi_f = footer[0].Diachi_f;
                    update.F_Note = footer[0].F_Note;
                    db.SaveChanges();
                    value = footer[0].Id;
                }
                else
                {
                    var footernew = new Footer_client();
                    var layid = (from R in db.Footer_client
                                 where R.Id > 0
                                 orderby R.Id descending
                                 select new
                                 {
                                     Id_footer = R.Id
                                 }).Take(1).ToArray();

                    if (layid.Any())
                    {
                        footernew.Id = layid[0].Id_footer + 1;
                    }
                    else
                    {
                        footernew.Id = 1;
                    }
                    Id = footernew.Id;
                    footernew.Diachi_f = footer[0].Diachi_f;
                    footernew.Name_f = footer[0].Name_f;
                    footernew.Sodienthoai = footer[0].Sodienthoai;
                    footernew.F_Note = footer[0].F_Note;
                    footernew.F_Active = 0;
                    db.Footer_client.Add(footernew);
                    db.SaveChanges();
                    value = footernew.Id;
                }

            }
            catch (Exception)
            {
                value = 0;
            }
            var data = new { sussecc = value, Id = Id };
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Save_Status(int Id)
        {
            var update = db.Footer_client.Find(Id);
            if (update.F_Active == 1)
            {
                update.F_Active = 0;
            }
            else
            {
                update.F_Active = 1;
            }
            db.SaveChanges();
            return Json(update.F_Active, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Edit_Footer(int Id)
        {
            var list_foot = db.Footer_client.Find(Id);
            return Json(list_foot, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Delete_Footer(int Id)
        {
            var value = false;
            try
            {
                db.Footer_client.Remove(db.Footer_client.Find(Id));
                db.SaveChanges();
                value = true;
            }
            catch (Exception)
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }
    }
}
