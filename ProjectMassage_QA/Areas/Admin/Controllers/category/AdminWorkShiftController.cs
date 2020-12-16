using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using ProjectMassage_QA.Areas.Admin.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers.category
{
    [AuthorizeBusiness]
    public class AdminWorkShiftController : BaseController
    {
        //
        // GET: /Admin/AdminWorkShift/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult WorkShift(string Id)
        {
            ViewData["list_acount"] = db.tbl_User.ToList();
            ViewData["list_work_shift"] = db.tbl_Loai_Ca_Lam_Viec.ToList();

            DateTime tungay, denngay;
            if (Id == null)
            {
                denngay = DateTime.Now;
                tungay = denngay.AddDays(-30);
            }
            else
            {
                var ma = Id.Split('|');
                denngay = Convert.ToDateTime(ma[1]);
                tungay = Convert.ToDateTime(ma[0]);
            }
            ViewData["day"] = tungay.ToString("yyyy-MM-dd") + "|" + denngay.ToString("yyyy-MM-dd");
            tungay = tungay.AddDays(-1);
            denngay = denngay.AddDays(1);

            var list_calamviec = db.tbl_CaLamViec.Where(x => x.Ngay > tungay && x.Ngay < denngay && x.Status == 2).ToList();

            List<list_calamviec> list_calam = new List<list_calamviec> { };
            foreach (var item in list_calamviec)
            {
                var item1 = new list_calamviec();
                var list1 = (List<list_calamviec>)list_calam;
                item1.LoaiCaLamViecId = item.LoaiCaLamViecId;
                item1.NameEmployee = item.NameEmployee;
                item1.Ngay = item.Ngay;
                item1.Note = item.Note;
                item1.Tien_ca_truoc_ban_giao = item.Tien_ca_truoc_ban_giao;
                item1.Tong_tien_cuoi_ca = item.Tong_tien_cuoi_ca;
                item1.Tong_tien_mat = item.Tong_tien_mat;
                item1.Tong_tien_thu_trong_ca = item.Tong_tien_thu_trong_ca;
                item1.FirtTime = item.FirtTime;
                item1.LastTime = item.LastTime;
                item1.NameEmployee = item.NameEmployee;
                item1.ID_nguoigiao = (int)item.Id_giao;
                item1.ID_nguoinhan = (int)item.Id_nhan;
                item1.Id = item.Id;
                foreach (var item0 in db.tbl_Loai_Ca_Lam_Viec.Where(x => x.Id == item.LoaiCaLamViecId))
                {
                    var loaicalamviec = db.tbl_Loai_Ca_Lam_Viec.Find(item0.Id);
                    item1.tenloaicalamviec = loaicalamviec.Name;
                }
                foreach (var item2 in db.tbl_User.Where(x=>x.Id_User == item.Id_giao))
                {
                    var nguoigiao = db.tbl_User.Find(item2.Id_User);
                    item1.nguoigiao = nguoigiao.Name_User;
                }
                foreach (var item3 in db.tbl_User.Where(x => x.Id_User == item.Id_nhan))
                {
                    var nguoinhan = db.tbl_User.Find(item3.Id_User);
                    item1.nguoinhan = nguoinhan.Name_User;
                }
                list1.Add(item1);
            }
            ViewData["calam"] = list_calam;
            return View();
        }

        public JsonResult Save_shift(tbl_CaLamViec[] Id)
        {
            var value = false;
            try
            {
                var shift = new tbl_CaLamViec();
                var layid = (from p in db.tbl_CaLamViec
                             where p.Id > 0
                             orderby p.Id descending
                             select new
                             {
                                 Id = p.Id
                             }).Take(1).ToArray();

                if (layid.Any())
                {
                    shift.Id = layid[0].Id + 1;
                }
                else
                {
                    shift.Id = 1;
                }
                shift.LoaiCaLamViecId = Id[0].LoaiCaLamViecId;
                shift.NameEmployee = Id[0].NameEmployee;
                shift.FirtTime = Id[0].FirtTime;
                shift.LastTime = Id[0].LastTime;
                shift.Note = Id[0].Note;
                shift.Status = 1;
                shift.Id_giao = 0;
                shift.Id_nhan = Convert.ToInt32(Session["userId"]);
                shift.Tong_tien_thu_trong_ca = 0;
                shift.Tien_ca_truoc_ban_giao = Id[0].Tien_ca_truoc_ban_giao;
                shift.Tong_tien_mat = 0;
                shift.Tong_tien_cuoi_ca = 0;
                shift.Ngay = Id[0].Ngay;
                db.tbl_CaLamViec.Add(shift);
                db.SaveChanges();
                Session["status_KA"] = 1;
                Session["Id_giao_KA"] = shift.Id;
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