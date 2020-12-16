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
    public class AdminRegisterController : BaseController
    {
        //
        // GET: /Admin/AdminRegister/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Index()
        {
            ViewData["Register"] = db.BDang_Ky.ToList();
            return View();
        }


        public JsonResult Save_Register_Admin(BDang_Ky[] arr_list_Register)
        {
            var value = false;
            try
            {
                var update_register = db.BDang_Ky.Find(1);
                update_register.Chu_y = arr_list_Register[0].Chu_y;
                update_register.Dangkycongty = arr_list_Register[0].Dangkycongty;
                update_register.Diachi = arr_list_Register[0].Diachi;
                update_register.Diachi_VanPhong = arr_list_Register[0].Diachi_VanPhong;
                update_register.Dienthoai = arr_list_Register[0].Dienthoai;
                update_register.DK_Close = arr_list_Register[0].DK_Close;
                update_register.DK_Open = arr_list_Register[0].DK_Open;
                update_register.Lam_CN = arr_list_Register[0].Lam_CN;
                update_register.Logo = arr_list_Register[0].Logo;
                update_register.Masothue = arr_list_Register[0].Masothue;
                update_register.Motanganhnghe = arr_list_Register[0].Motanganhnghe;
                update_register.Muc_dong_BH = arr_list_Register[0].Muc_dong_BH;
                update_register.NamTaichinh = arr_list_Register[0].NamTaichinh;
                update_register.Ngay_Cong = arr_list_Register[0].Ngay_Cong;
                update_register.Ngayhoachtoan = arr_list_Register[0].Ngayhoachtoan;
                update_register.Ngaykethuchoachtoan = arr_list_Register[0].Ngaykethuchoachtoan;
                update_register.SoFax = arr_list_Register[0].SoFax;
                update_register.Songaythuno = arr_list_Register[0].Songaythuno;
                update_register.Sotaikhoan = arr_list_Register[0].Sotaikhoan;
                update_register.Tainganhang = arr_list_Register[0].Tainganhang;
                update_register.tencongtychuthuong = arr_list_Register[0].tencongtychuthuong;
                update_register.TenGiamdocky = arr_list_Register[0].TenGiamdocky;
                update_register.Tenketoantruong = arr_list_Register[0].Tenketoantruong;
                update_register.Tenthuquy = arr_list_Register[0].Tenthuquy;
                update_register.TenTiengAnh = arr_list_Register[0].TenTiengAnh;
                update_register.Thoi_Gian_Ca = arr_list_Register[0].Thoi_Gian_Ca;
                update_register.Thoi_Gian_Check_Int = arr_list_Register[0].Thoi_Gian_Check_Int;
                update_register.Thong_bao = arr_list_Register[0].Thong_bao;
                update_register.thank_custommer = arr_list_Register[0].thank_custommer;
                update_register.Thu_Kho = arr_list_Register[0].Thu_Kho;
                update_register.phuphi = arr_list_Register[0].phuphi;
                update_register.thuevat = arr_list_Register[0].thuevat;
                update_register.xacnhan = arr_list_Register[0].xacnhan;
                db.SaveChanges();
                value = true;
            }
            catch
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);

        }

        public JsonResult GETDATA_Register_Admin(int Id)
        {
            var data_register = db.BDang_Ky.Find(Id);
            return Json(data_register, JsonRequestBehavior.AllowGet);
        }
    }
}