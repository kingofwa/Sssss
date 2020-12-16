using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers.employee
{
    [AuthorizeBusiness]
    public class AdminCategoryEmployeeController : BaseController
    {
        //
        // GET: /Admin/AdminCategoryEmployee/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult CategoryEmployee()
        {
            var id = Session["userId"];
            var list = db.TypeEmployee.ToList();
            ViewData["list_categoryEmployee"] = list;
            return View();
        }

        public JsonResult Save_CategoryEmployee(TypeEmployee[] categoryemployee)
        {
            var value = 0;
            try
            {
                if (categoryemployee[0].Id > 0)
                {
                    var update = db.TypeEmployee.Find(categoryemployee[0].Id);
                    update.TE_Name = categoryemployee[0].TE_Name;
                    update.TE_Admin_Staff = categoryemployee[0].TE_Admin_Staff;
                    update.TE_Note = categoryemployee[0].TE_Note;
                    db.SaveChanges();
                    value = categoryemployee[0].Id;
                }
                else
                {
                    var categoryemployeenew = new TypeEmployee();
                    var layid = (from TE in db.TypeEmployee
                                 where TE.Id > 0
                                 orderby TE.Id descending
                                 select new
                                 {
                                     Id_categoryemployee = TE.Id
                                 }).Take(1).ToArray();

                    if (layid.Any())
                    {
                        categoryemployeenew.Id = layid[0].Id_categoryemployee + 1;
                    }
                    else
                    {
                        categoryemployeenew.Id = 1;
                    }
                    categoryemployeenew.TE_Name = categoryemployee[0].TE_Name;
                    categoryemployeenew.TE_Admin_Staff = categoryemployee[0].TE_Admin_Staff;
                    categoryemployeenew.TE_Note = categoryemployee[0].TE_Note;
                    categoryemployeenew.TE_Active = true;
                    db.TypeEmployee.Add(categoryemployeenew);
                    db.SaveChanges();
                    value = categoryemployeenew.Id;
                }

            }
            catch (Exception)
            {
                value = 0;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }


        public JsonResult Edit_CategoryEmployee(int Id)
        {
            var listcategotyemployee = db.TypeEmployee.Find(Id);
            return Json(listcategotyemployee, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete_CategoryEmployee(int Id)
        {
            var value = false;
            try
            {
                var layid = db.TypeEmployee.Find(Id);
                db.TypeEmployee.Remove(layid);
                db.SaveChanges();
                value = true;
            }
            catch (Exception)
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Save_Status(int Id)
        {
            var value = false;
            try
            {
                var update = db.TypeEmployee.Find(Id);
                update.TE_Active = !update.TE_Active;
                db.SaveChanges();
                value = (Boolean)update.TE_Active;
            }
            catch
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);

        }
	}
}