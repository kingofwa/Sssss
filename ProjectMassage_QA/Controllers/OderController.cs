using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProjectMassage_QA.Models.View_model;
using Newtonsoft.Json;

namespace ProjectMassage_QA.Controllers
{
    public class OderController : Controller
    {
        //
        // GET: /Oder/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Save_Oder(AddOder_View_To_Admin[] Oder, String Note, String CODE, int Id_Sale, int phantramgiam)
        {
            var value = false;
            var O_number = "";
            try
            {

                var ordernew = new tblOrder();
                var layid = (from O in db.tblOrder
                             where O.Id > 0
                             orderby O.Id descending
                             select new
                             {
                                 Id = O.Id
                             }).Take(1).ToArray();

                if (layid.Any())
                {
                    ordernew.Id = layid[0].Id + 1;
                }
                else
                {
                    ordernew.Id = 1;
                }
                if (Id_Sale > 0)
                {
                    ordernew.Id_Code_sale = Id_Sale;
                }
                else
                {
                    ordernew.Id_Code_sale = 0;
                }
                if (phantramgiam > 0)
                {
                    ordernew.phantramgiam = phantramgiam;
                }
                else
                {
                    ordernew.phantramgiam = 0;
                }
                ordernew.DayNew = DateTime.Now;
                ordernew.O_number = CODE;
                O_number = ordernew.O_number;
                ordernew.Note = Note;
                ordernew.NhanVienID = 1;
                ordernew.Chay = 0;
                db.tblOrder.Add(ordernew);
                var idtang = 1;
                foreach (var item in Oder)
                {
                    tblOrderDetail orderdetailnew = new tblOrderDetail();
                    if (item.ID > 0)
                    {
                        orderdetailnew.Id_tang = idtang;
                        orderdetailnew.EmployeeId = item.ID;
                        orderdetailnew.Money = item.money;
                        orderdetailnew.OrderId = ordernew.Id;
                        orderdetailnew.TypeOder = item.Type;
                        db.tblOrderDetail.Add(orderdetailnew);
                        idtang++;
                    }
                    
                }
                db.SaveChanges();
                value = true;
            }
            catch (Exception)
            {
                value = false;
            }
            var data = new { success = value, O_number = O_number, message = "Your request has been successfully added,." };
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GET_Sale(string sale)
        {
            var gia_gia = db.Discount_Code.Where(x => x.Discount_code_view == sale && x.status == 1).ToList();
            string value = string.Empty;
            value = JsonConvert.SerializeObject(gia_gia, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(value, JsonRequestBehavior.AllowGet);

        }
    }
}