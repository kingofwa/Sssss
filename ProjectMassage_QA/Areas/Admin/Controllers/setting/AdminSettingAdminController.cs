using Newtonsoft.Json;
using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using ProjectMassage_QA.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers.setting
{
    //[AuthorizeBusiness]
    public class AdminSettingAdminController : BaseController
    {
        //
        // GET: /Admin/AdminSettingAdmin/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Setting()
        {
            return View();
        }
        public JsonResult Save_Setting_Admin(SettingAdmin[] arr_list_setting)
        {
            var value = false;
            try
            {
                var Id_session = Convert.ToInt32(Session["userId"]);
                var settingg = db.SettingAdmin.Where(x => x.ID_User == Id_session).ToArray();
                if (settingg.Any())
                {
                    Session["chang_color"] = arr_list_setting[0].colorbar + "|" +
                        arr_list_setting[0].cochu + "|" + arr_list_setting[0].fontchu + "|" +
                        arr_list_setting[0].mauchu + "|" + arr_list_setting[0].maucokhach + "|" +
                        arr_list_setting[0].mauonline + "|" + arr_list_setting[0].maucho + "|" +
                        arr_list_setting[0].thoigian + "|" + arr_list_setting[0].heightContent + "|" +
                        arr_list_setting[0].widthContent + "|" + arr_list_setting[0].heightRight + "|" +
                        arr_list_setting[0].widthRight + "|" + arr_list_setting[0].thongbao + "|" + arr_list_setting[0].chuy + "|" +
                        arr_list_setting[0].maunhanvienonline + "|" + arr_list_setting[0].maunhanviencokhach + "|" + arr_list_setting[0].hienthichuthich;

                    var update = db.SettingAdmin.Find(settingg[0].Id);
                    
                    update.cochu = arr_list_setting[0].cochu;
                    update.mauchu = arr_list_setting[0].mauchu;
                    update.fontchu = arr_list_setting[0].fontchu;
                    update.colorbar = arr_list_setting[0].colorbar;
                    update.maucho = arr_list_setting[0].maucho;
                    update.maucokhach = arr_list_setting[0].maucokhach;
                    update.maunhanviencokhach = arr_list_setting[0].maunhanviencokhach;
                    update.maunhanvienonline = arr_list_setting[0].maunhanvienonline;
                    update.mauonline = arr_list_setting[0].mauonline;
                    if (arr_list_setting[0].thoigian == null)
                    {
                        update.thoigian = 2;
                    }
                    else
                    {
                        update.thoigian = arr_list_setting[0].thoigian;
                    }
                    if (arr_list_setting[0].thoigianca == null)
                    {
                        update.thoigianca = 8;
                    }
                    else
                    {
                        update.thoigianca = arr_list_setting[0].thoigianca;
                    }
                    if (arr_list_setting[0].chuy != null)
                    {
                        update.chuy = arr_list_setting[0].chuy;
                    }
                    if (arr_list_setting[0].thongbao != null)
                    {
                        update.thongbao = arr_list_setting[0].thongbao;
                    }
                    update.heightContent = arr_list_setting[0].heightContent;
                    update.heightRight = arr_list_setting[0].heightRight;
                    update.widthContent = arr_list_setting[0].widthContent;
                    update.widthRight = arr_list_setting[0].widthRight;
                    update.hienthichuthich = arr_list_setting[0].hienthichuthich;
                    db.SaveChanges();
                    value = true;
                }
                else
                {
                    var new_setting = new SettingAdmin();
                    var layid = (from S in db.SettingAdmin
                                 where S.Id > 0
                                 orderby S.Id descending
                                 select new
                                 {
                                     cl = S.Id 
                                 }).Take(1).ToArray();
                    if (layid.Any())
                    {
                        new_setting.Id = layid[0].cl + 1;
                    }
                    else
                    {
                        new_setting.Id = 1;
                    }
                    new_setting.ID_User = Convert.ToInt32(Session["userId"]);
                    new_setting.colorbar = arr_list_setting[0].colorbar;
                    new_setting.chuy = arr_list_setting[0].chuy;
                    new_setting.cochu = arr_list_setting[0].cochu;
                    new_setting.mauchu = arr_list_setting[0].mauchu;
                    new_setting.fontchu = arr_list_setting[0].fontchu;
                    new_setting.maucho = arr_list_setting[0].maucho;
                    new_setting.maucokhach = arr_list_setting[0].maucokhach;
                    new_setting.maunhanviencokhach = arr_list_setting[0].maunhanviencokhach;
                    new_setting.maunhanvienonline = arr_list_setting[0].maunhanvienonline;
                    new_setting.mauonline = arr_list_setting[0].mauonline;
                    new_setting.thoigian = arr_list_setting[0].thoigian;
                    new_setting.thoigianca = arr_list_setting[0].thoigianca;
                    new_setting.thongbao = arr_list_setting[0].thongbao;
                    new_setting.heightContent = arr_list_setting[0].heightContent;
                    new_setting.heightRight = arr_list_setting[0].heightRight;
                    new_setting.widthContent = arr_list_setting[0].widthContent;
                    new_setting.widthRight = arr_list_setting[0].widthRight;
                    new_setting.hienthichuthich = arr_list_setting[0].hienthichuthich;
                    db.SettingAdmin.Add(new_setting);
                    Session["chang_color"] = arr_list_setting[0].colorbar + "|" +
                        arr_list_setting[0].cochu + "|" + arr_list_setting[0].fontchu + "|" +
                        arr_list_setting[0].mauchu + "|" + arr_list_setting[0].maucokhach + "|" +
                        arr_list_setting[0].mauonline + "|" + arr_list_setting[0].maucho + "|" +
                        arr_list_setting[0].thoigian + "|" + arr_list_setting[0].heightContent + "|" +
                        arr_list_setting[0].widthContent + "|" + arr_list_setting[0].heightRight + "|" +
                        arr_list_setting[0].widthRight + "|" + arr_list_setting[0].thongbao + "|" + arr_list_setting[0].chuy + "|" +
                        arr_list_setting[0].maunhanvienonline + "|" + arr_list_setting[0].maunhanviencokhach + "|" + arr_list_setting[0].hienthichuthich;
                    db.SaveChanges();
                    value = true;
                }
            }
            catch (Exception)
            {
                value = false;
            }
            var data = new { sussecc = value};
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult CHANGGE_SETTING(int Id)
        {
            var list_setting= db.SettingAdmin.Find(Id);
            return Json(list_setting, JsonRequestBehavior.AllowGet);

        }

        public JsonResult CHANGGE_SETTINGGGGGG()
        {
            var id_user = Convert.ToInt32(Session["userId"]);
            var list_data_setting_user = db.SettingAdmin.Where(x => x.ID_User == id_user).ToList();
            string value = string.Empty;
            value = JsonConvert.SerializeObject(list_data_setting_user, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(value, JsonRequestBehavior.AllowGet);
        }
        
	}
}