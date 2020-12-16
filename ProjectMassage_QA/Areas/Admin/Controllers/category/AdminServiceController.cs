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
    public class AdminServiceController : BaseController
    {
        //
        // GET: /Admin/AdminService/
       Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Service()
        {
            var list = db.tblServicies.ToList();
            ViewData["list_service"] = list;
            return View();
        }

        public JsonResult Save_Service(tblServicies[] service)
        {
            var value = 0;
            var Id = 0;
            try
            {
                if (service[0].Id > 0)
                {
                    var update = db.tblServicies.Find(service[0].Id);
                    update.S_Name = service[0].S_Name;
                    update.S_Money = service[0].S_Money;
                    update.S_Note = service[0].S_Note;
                    db.SaveChanges();
                    value = service[0].Id;
                }
                else
                {
                    var servicenew = new tblServicies();
                    var layid = (from S in db.tblServicies
                                 where S.Id > 0
                                 orderby S.Id descending
                                 select new
                                 {
                                     Id_service = S.Id
                                 }).Take(1).ToArray();

                    if (layid.Any())
                    {
                        servicenew.Id = layid[0].Id_service + 1;
                    }
                    else
                    {
                        servicenew.Id = 1;
                    }
                    Id = servicenew.Id;
                    servicenew.S_Name = service[0].S_Name;
                    servicenew.S_Money = service[0].S_Money;
                    servicenew.S_Note = service[0].S_Note;
                    servicenew.S_Active = true;
                    db.tblServicies.Add(servicenew);
                    db.SaveChanges();
                    value = servicenew.Id;
                }

            }
            catch (Exception)
            {
                value = 0;
            }
            var data = new { sussecc = value, Id = Id };
            return Json(data, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Delete_Service(int Id)
        {
            var value = false;
            try
            {
                var layid = db.tblServicies.Find(Id);
                db.tblServicies.Remove(layid);
                db.SaveChanges();
                value = true;
            }
            catch (Exception)
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Edit_Service(int Id)
        {
            var listservice = db.tblServicies.Find(Id);
            return Json(listservice, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Save_Status(int Id)
        {
            var value = false;
            try
            {
                var update = db.tblServicies.Find(Id);
                update.S_Active = !update.S_Active;
                db.SaveChanges();
                value = (Boolean)update.S_Active;
            }
            catch
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);

        }
	}
}