using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace ProjectMassage_QA.Areas.Admin.Controllers.category
{
    [AuthorizeBusiness]
    public class AdminCategoriesController : BaseController
    {
        // GET: /Admin/AdminCategories/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Categories()
        {
            var id = Session["userId"];
            var list = db.tblCategories.ToList();
            ViewData["list_category"] = list;
            return View();
        }
        public JsonResult Save_Category(tblCategories[] category)
        {
            var value = 0;
            var Id = 0;
            try
            {
                if (category[0].Id > 0)
                {
                    var update = db.tblCategories.Find(category[0].Id);
                    update.C_Name = category[0].C_Name;
                    update.C_Money = category[0].C_Money;
                    update.C_Note = category[0].C_Note;
                    db.SaveChanges();
                    value = category[0].Id;
                }
                else
                {
                    var categorynew = new tblCategories();
                    var layid = (from C in db.tblCategories
                                 where C.Id > 0
                                 orderby C.Id descending
                                 select new
                                 {
                                     Id_category = C.Id
                                 }).Take(1).ToArray();

                    if (layid.Any())
                    {
                        categorynew.Id = layid[0].Id_category + 1;
                    }
                    else
                    {
                        categorynew.Id = 1;
                    }
                    Id = categorynew.Id;
                    categorynew.C_Name = category[0].C_Name;
                    categorynew.C_Money = category[0].C_Money;
                    categorynew.C_Note = category[0].C_Note;
                    categorynew.C_Active = true;
                    db.tblCategories.Add(categorynew);
                    db.SaveChanges();
                    value = categorynew.Id;
                }

            }
            catch (Exception)
            {
                value = 0;
            }
            var data = new { sussecc = value, Id = Id };
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete_Category(int Id)
        {
            var value = false;
            try
            {
                var layid = db.tblCategories.Find(Id);
                db.tblCategories.Remove(layid);
                db.SaveChanges();
                value = true;
            }
            catch (Exception)
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Edit_Category(int Id)
        {
            var listcategoty = db.tblCategories.Find(Id);
            return Json(listcategoty, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Save_Status(int Id)
        {
            var value = false;
            try
            {
                var update = db.tblCategories.Find(Id);
                update.C_Active = !update.C_Active;
                db.SaveChanges();
                value = (Boolean)update.C_Active;
            }
            catch
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);

        }
       
    }
}