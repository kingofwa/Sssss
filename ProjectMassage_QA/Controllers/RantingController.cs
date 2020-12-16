using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProjectMassage_QA.Areas.Admin.Models.FW;

namespace ProjectMassage_QA.Controllers
{
    public class RantingController : Controller
    {
        //
        // GET: /Ranting/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult Save_Evalute(tblStarOrder[] Evalute)
        {
            var value = false;
            try
            {
                var evalute = new tblStarOrder();
                var Id_tang = 1;
                var layid = (from Ev in db.tblStarOrder
                             where Ev.Id > 0
                             orderby Ev.Id descending
                             select new
                             {
                                 Id = Ev.Id
                             }).Take(1).ToArray();

                if (layid.Any())
                {
                    Id_tang = layid[0].Id + 1;
                }
                else
                {
                    Id_tang = 1;
                }
                foreach (var item in Evalute)
                {
                    tblStarOrder evalutenew = new tblStarOrder();
                    evalutenew.Id = Id_tang;
                    evalutenew.OrderId = item.OrderId;
                    evalutenew.EmployeeId = item.EmployeeId;
                    evalutenew.SO_NumberStar = item.SO_NumberStar;
                    evalutenew.Note = item.Note;
                    db.tblStarOrder.Add(evalutenew);
                    Id_tang++;
                   
                }
                db.SaveChanges();
                value = true;
            }
            catch (Exception)
            {
                value = false;
            }
            var data = new { success = value, message = "Your request has been successfully added,." };
            return Json(data, JsonRequestBehavior.AllowGet);
        }
	}
}