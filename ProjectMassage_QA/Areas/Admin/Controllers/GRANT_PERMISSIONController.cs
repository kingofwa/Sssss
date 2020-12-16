using Newtonsoft.Json;
using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using ProjectMassage_QA.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers
{
   [AuthorizeBusiness]
    public class GRANT_PERMISSIONController : BaseController
    {

        //
        // GET: /GRANT_PERMISSION/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Cap_Phat_Quyen_Cho_Tai_Khoan_Nguoi_Dung(int id)
        {
            var listdanhmucchinh = db.BLog_Business_TenQuyen.ToList();

            ViewData["listdanhmucchinh"] = listdanhmucchinh;

            var listquyenhientai = db.GrantPermission.Where(x => x.UserId == id).ToList();
            //Lưu id của người dùng đang được cấp ra sesion
            Session["usergrant"] = id;
            ViewBag.ID = id;
            //lấy người dùng
            var usergrant = db.tbl_User.Find(id);

            //lưu tên ra biến
            ViewBag.usergrant = usergrant.Name_User;
            return View(listquyenhientai);
        }
        public JsonResult Get_BLogPermissions(string id)
        {
            var listquyen = db.BLog_Permission_BCacQuenCT.Where(x => x.BusinessId == id).ToList();
            var nhansu = db.tbl_User.Find(Session["userid"]);
            if (nhansu != null)
            {
                if (nhansu.GroupID.ToUpper() != "ADMIN")
                {
                    listquyen = listquyen.Where(x => x.Quyencapcao == false).ToList();
                }
            }
            string value = string.Empty;
            value = JsonConvert.SerializeObject(listquyen, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(value, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Save_Nhomquyen_idnhansu(string idnhomquyenxemxet, int idnhansuhidden)
        {
            var listnhom = db.BLog_Permission_BCacQuenCT.Where(x => x.BusinessId == idnhomquyenxemxet).ToList();
            var value = "";
            try
            {
                if (listnhom != null)
                {
                    foreach (var item in listnhom)
                    {
                        GrantPermission grant = db.GrantPermission.Where(x => x.PermissionId == item.PermissionId && x.UserId == idnhansuhidden).SingleOrDefault();
                        if (grant == null)
                        {
                            GrantPermission grantnew = new GrantPermission();
                            grantnew.UserId = idnhansuhidden;
                            grantnew.PermissionId = item.PermissionId;
                            value += "A" + item.PermissionId + "A";
                            db.GrantPermission.Add(grantnew);
                        }
                    }
                    db.SaveChanges();
                }
            }
            catch (Exception)
            {
                value = "";
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Save_quyen_idnhansu(int permissionId, int idnhansuhidden)
        {

            var value = "";
            try
            {

                GrantPermission grant = db.GrantPermission.Where(x => x.PermissionId == permissionId && x.UserId == idnhansuhidden).SingleOrDefault();
                if (grant == null)
                {
                    GrantPermission grantnew = new GrantPermission();
                    grantnew.UserId = idnhansuhidden;
                    grantnew.PermissionId = permissionId;
                    value = "A" + permissionId + "A";
                    db.GrantPermission.Add(grantnew);
                }

                db.SaveChanges();


            }
            catch (Exception)
            {
                value = "";
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Delete_Nhom_quyen_Id(string idnhomquyenxemxet, int idnhansuhidden)
        {
            var listnhom = db.BLog_Permission_BCacQuenCT.Where(x => x.BusinessId == idnhomquyenxemxet).ToList();
            var value = "";
            try
            {
                if (listnhom != null)
                {
                    foreach (var item in listnhom)
                    {
                        GrantPermission grant = db.GrantPermission.Where(x => x.PermissionId == item.PermissionId && x.UserId == idnhansuhidden).SingleOrDefault();
                        if (grant != null)
                        {
                            var svalue = new Grant_Permission_Dao().Delete(item.PermissionId, idnhansuhidden);
                            value += item.PermissionId + "|";
                        }
                    }

                }
            }
            catch (Exception)
            {
                value = "";
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete_quyen_idnhansu(int permissionId, int idnhansuhidden)
        {
            var value = "";
            try
            {
                GrantPermission grant = db.GrantPermission.Where(x => x.PermissionId == permissionId && x.UserId == idnhansuhidden).SingleOrDefault();
                if (grant != null)
                {
                    var valuse = new Grant_Permission_Dao().Delete(permissionId, idnhansuhidden);
                    value = permissionId.ToString();
                }

            }
            catch (Exception)
            {
                value = "";
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }

    }
}