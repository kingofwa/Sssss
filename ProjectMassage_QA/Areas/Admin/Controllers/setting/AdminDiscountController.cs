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
    public class AdminDiscountController : BaseController
    {
        //
        // GET: /Admin/AdminDiscount/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Index()
        {
            var list_discount = db.Discount_Code.ToList();
            ViewData["list_discount"] = list_discount;
            return View();
        }

        public JsonResult Save_Discount(Discount_Code[] arr)
        {
            var value = false;
            var Id = 0;
            try
            {

                if (arr[0].Id > 0)
                {
                    Id = arr[0].Id;
                    var update = db.Discount_Code.Find(arr[0].Id);
                    update.Name_discount = arr[0].Name_discount;
                    update.Discount_code_view = arr[0].Discount_code_view;
                    update.Sale_code = arr[0].Sale_code;
                    update.Note = arr[0].Note;
                    db.SaveChanges();
                    value = true;
                }
                else
                {
                    var discountnew = new Discount_Code();
                    var layid = (from D in db.Discount_Code
                                 where D.Id > 0
                                 orderby D.Id descending
                                 select new
                                 {
                                     Id = D.Id
                                 }).Take(1).ToArray();

                    if (layid.Any())
                    {
                        discountnew.Id = layid[0].Id + 1;
                    }
                    else
                    {
                        discountnew.Id = 1;
                    }
                    Id = discountnew.Id;
                    discountnew.Name_discount = arr[0].Name_discount;
                    discountnew.Sale_code = arr[0].Sale_code;
                    discountnew.Note = arr[0].Note;
                    discountnew.Discount_code_view = arr[0].Discount_code_view;
                    discountnew.status = 1;
                    db.Discount_Code.Add(discountnew);
                    db.SaveChanges();
                    value = true;
                }
            }
            catch (Exception)
            {
                value = false;
            }
            var data = new { sussecc = value, Id = Id };

            return Json(data, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Save_Status(int Id)
        {
            var update = db.Discount_Code.Find(Id);
            if (update.status == 1)
            {
                update.status = 0;
            }
            else
            {
                update.status = 1;
            }
            db.SaveChanges();
            return Json(update.status, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Delete_Discount(int Id)
        {
            var value = false;
            try
            {
                db.Discount_Code.Remove(db.Discount_Code.Find(Id));
                db.SaveChanges();
                value = true;
            }
            catch (Exception)
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Edit_Discount(int Id)
        {
            var list_noti = db.Discount_Code.Find(Id);
            return Json(list_noti, JsonRequestBehavior.AllowGet);
        }
	}
}