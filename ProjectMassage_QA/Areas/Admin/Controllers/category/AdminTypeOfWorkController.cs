using Newtonsoft.Json;
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
    public class AdminTypeOfWorkController : BaseController
    {
        //
        // GET: /Admin/AdminCategory/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult typeofwork()
        {
            var list = db.tbl_Loai_Ca_Lam_Viec.ToList();
            ViewData["list_loaica"] = list;
            return View();
        }

        public JsonResult Save_type_of_work(tbl_Loai_Ca_Lam_Viec[] type)
        {
            var value = 0;
            try
            {
                if (type[0].Id > 0)
                {
                    var update = db.tbl_Loai_Ca_Lam_Viec.Find(type[0].Id);
                    update.Name = type[0].Name;
                    update.FirtTime = type[0].FirtTime;
                    update.LastTime = type[0].LastTime;
                    update.Note = type[0].Note;
                    db.SaveChanges();
                    value = type[0].Id;
                }
                else
                {
                    var loaca = new tbl_Loai_Ca_Lam_Viec();
                    var layid = (from p in db.tbl_Loai_Ca_Lam_Viec
                                 where p.Id > 0
                                 orderby p.Id descending
                                 select new
                                 {
                                     Id = p.Id
                                 }).Take(1).ToArray();

                    if (layid.Any())
                    {
                        loaca.Id = layid[0].Id + 1;
                    }
                    else
                    {
                        loaca.Id = 1;
                    }
                    loaca.FirtTime = type[0].FirtTime;
                    loaca.LastTime = type[0].LastTime;
                    loaca.Name = type[0].Name;
                    loaca.Note = type[0].Note;
                    db.tbl_Loai_Ca_Lam_Viec.Add(loaca);
                    db.SaveChanges();
                    value = loaca.Id;
                }
                
            }
            catch (Exception)
            {
                value = 0;
            }
            return Json(value, JsonRequestBehavior.AllowGet);

        }

        public JsonResult DeleteType(int Id)
        {
            var value = 0;
            var calam = "";
            try
            {
                var layid = db.tbl_Loai_Ca_Lam_Viec.Find(Id);
                if (db.tbl_CaLamViec.Where(x => x.LoaiCaLamViecId == Id).Any())
                {
                    calam = "Ca làm việc đang liên kết ca làm nên không thể xóa được";
                    value = 2;
                }
                else
                {
                    db.tbl_Loai_Ca_Lam_Viec.Remove(layid);
                    db.SaveChanges();
                    value = 1;
                    calam = "Bạn xóa thành công";
                }
               
            }
            catch(Exception)
            {
                calam="Đã có lỗi trong quá trình xóa";
                value = 0;
            }
            var data = new { thongbaoloi = calam, success = value};
            return Json(data, JsonRequestBehavior.AllowGet);
        }


        public JsonResult EditType(int Id)
        {
            var listtypework = db.tbl_Loai_Ca_Lam_Viec.Where(x=>x.Id == Id).ToList();
            string value = string.Empty;
            value = JsonConvert.SerializeObject(listtypework, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(value, JsonRequestBehavior.AllowGet);
        }

    }
}