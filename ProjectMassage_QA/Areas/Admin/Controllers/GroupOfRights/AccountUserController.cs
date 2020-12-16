using Newtonsoft.Json;
using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using ProjectMassage_QA.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers.GroupOfRights
{
    [AuthorizeBusiness]
    public class AccountUserController : BaseController
    {
        //
        // GET: /Admin/AccountUser/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Index()
        {
            var list_user = db.tbl_User.ToList();
            ViewData["list_user"] = list_user;

            var loainhanvien = db.TypeEmployee.ToArray();
            var loai = loainhanvien[0].Id;

            var list_typeemployeee = db.tblEmployees.Where(x=>x.TypeEmployeeId == loai).ToList();
            ViewData["list_typeemployeee"] = list_typeemployeee;
            return View();
        }

        public JsonResult Save_User(tbl_User[] User)
        {
            var value = 0;
            try
            {
                var id = User[0].Id_User;
                var update = db.tbl_User.Find(id);
                if (update != null)
                {
                    update.Name_User = User[0].Name_User;
                    update.Email_User = User[0].Email_User;
                    update.Pass_User = new EmployeeDAO().MD5Hash(User[0].Pass_User);
                    update.Note = User[0].Note;
                    db.SaveChanges();
                    value = User[0].Id_User;
                }
                else
                {
                    
                    var usernew = new tbl_User();

                   
                    usernew.Id_User = id;
                    usernew.Name_User = User[0].Name_User;
                    usernew.Email_User = User[0].Email_User;
                    usernew.Pass_User = new EmployeeDAO().MD5Hash(User[0].Pass_User);
                    usernew.Note = User[0].Note;
                    usernew.U_Status = true;
                    usernew.Dark_Light_theme = 1;
                    db.tbl_User.Add(usernew);
                    db.SaveChanges();
                    value = usernew.Id_User;
                }
            }
            catch (Exception)
            {
                value = 0;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete_User(int Id_User)
        {
            var value = false;
            try
            {
                db.tbl_User.Remove(db.tbl_User.Find(Id_User));
                db.SaveChanges();
                value = true;
            }
            catch (Exception)
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Edit_User(int Id_User)
        {
            var nhanvienduoccap = db.tblEmployees.Where(x => x.Id == Id_User).ToArray();
            var id_nhanvienduoccap = nhanvienduoccap[0].Id;
            var ten_nhanvienduoccap = nhanvienduoccap[0].E_Name;
            var listuser = db.tbl_User.Find(Id_User);
            var data = new { nhanvienduoccap = ten_nhanvienduoccap, id = id_nhanvienduoccap,user = listuser};

            return Json(data, JsonRequestBehavior.AllowGet);
        }



        public JsonResult Save_Status(int Id_User)
        {
            var value = false;
            try
            {
                var update = db.tbl_User.Find(Id_User);
                update.U_Status = !update.U_Status;
                db.SaveChanges();
                value = (Boolean)update.U_Status;
            }
            catch
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);

        }
	}
}