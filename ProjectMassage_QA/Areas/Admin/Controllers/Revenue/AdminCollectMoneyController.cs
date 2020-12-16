using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using Newtonsoft.Json;
using ProjectMassage_QA.Areas.Admin.Models.DataModel;

namespace ProjectMassage_QA.Areas.Admin.Controllers.Revenue
{
    [AuthorizeBusiness]
    public class AdminCollectMoneyController : BaseController
    {
        //
        // GET: /Admin/AdminCollectMoney/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Index()
        {
            var list_phieuthu = db.phieu_thu.ToList();
            ViewData["list_phieuthu"] = list_phieuthu;
            return View();
        }

        public JsonResult Save(phieu_thu[] arr_phieuthu)
        {
            var value = false;
            var Id = 0;
            try
            {
                if (arr_phieuthu[0].Id > 0)
                {
                    var update = db.phieu_thu.Find(arr_phieuthu[0].Id);
                    update.nguoilap = arr_phieuthu[0].nguoilap;
                    update.nguoinop = arr_phieuthu[0].nguoinop;
                    update.diachi = arr_phieuthu[0].diachi;
                    update.nguoinoptien = arr_phieuthu[0].nguoinoptien;
                    update.noidungthu = arr_phieuthu[0].noidungthu;
                    update.Note_thu = arr_phieuthu[0].Note_thu;
                    update.sodienthoai = arr_phieuthu[0].sodienthoai;
                    update.sotien_thu = arr_phieuthu[0].sotien_thu;
                    update.ngaylap = arr_phieuthu[0].ngaylap;
                    db.SaveChanges();
                    value = true;
                }
                else
                {
                    var phieuthunew = new phieu_thu();
                    var layid = (from R in db.phieu_thu
                                 where R.Id > 0
                                 orderby R.Id descending
                                 select new
                                 {
                                     Id_phieuthu = R.Id
                                 }).Take(1).ToArray();

                    if (layid.Any())
                    {
                        phieuthunew.Id = layid[0].Id_phieuthu + 1;
                    }
                    else
                    {
                        phieuthunew.Id = 1;
                    }
                    Id = phieuthunew.Id;
                    phieuthunew.nguoilap = arr_phieuthu[0].nguoilap;
                    phieuthunew.nguoinop = arr_phieuthu[0].nguoinop;
                    phieuthunew.diachi = arr_phieuthu[0].diachi;
                    phieuthunew.nguoinoptien = arr_phieuthu[0].nguoinoptien;
                    phieuthunew.noidungthu = arr_phieuthu[0].noidungthu;
                    phieuthunew.Note_thu = arr_phieuthu[0].Note_thu;
                    phieuthunew.sodienthoai = arr_phieuthu[0].sodienthoai;
                    phieuthunew.sotien_thu = arr_phieuthu[0].sotien_thu;
                    phieuthunew.sochungtu_thu = arr_phieuthu[0].sochungtu_thu;
                    phieuthunew.ngaylap = arr_phieuthu[0].ngaylap;
                    db.phieu_thu.Add(phieuthunew);
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

        public JsonResult Edit(int Id)
        {
            var phieu = db.phieu_thu.Find(Id);
            return Json(phieu, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete(int Id)
        {
            var value = false;
            try
            {
                var layid = db.phieu_thu.Find(Id);
                db.phieu_thu.Remove(layid);
                db.SaveChanges();
                value = true;
            }
            catch (Exception)
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Get_Data_PhieuThu(DateTime Id)
        {
            var nam = "";
            if (Id == null)
            {
                nam = DateTime.Now.ToString("yyyy").Substring(2);
            }
            else
            {
                nam = Id.ToString("yyyy").Substring(2);
            }
            var ss = "";
            var list_sochungtu = (from pt in db.phieu_thu
                                  where (pt.Id > 0)
                                  orderby pt.Id descending
                                  select new
                                  {
                                      Sochungtuthu = pt.sochungtu_thu
                                  }).Take(1).ToList();
            if (db.phieu_thu.Count(x => x.Id > 0) > 0)
            {
                foreach (var item in list_sochungtu)
                {
                    var sochungtuthu2 = item.Sochungtuthu;
                    var sochungtuthu_default = sochungtuthu2.IndexOf(nam);
                    if (sochungtuthu_default == -1)
                    {
                        ss = "PT" + nam + "." + "00001";
                    }
                    else
                    {
                        var s1 = sochungtuthu2.Substring(6);
                        var s2 = Convert.ToInt32(s1) + 1;
                        if (s2 > 0 && s2 < 10)
                        {
                            ss = "PT" + nam + "." + "0000" + Convert.ToString(s2);
                        }
                        else if (10 < s2 && s2 < 100)
                        {
                            ss = "PT" + nam + "." + "000" + Convert.ToString(s2);
                        }
                        else if (s2 < 1000)
                        {
                            ss = "PT" + nam + "." + "00" + Convert.ToString(s2);
                        }
                        else if (s2 < 1000)
                        {
                            ss = "PT" + nam + "." + "0" + Convert.ToString(s2);
                        }
                        else
                        {
                            ss = nam + "." + Convert.ToString(s2);
                        }
                    }
                }
            }
            else
            {
                ss = "PT" + nam + "." + "00001";
            }
            return Json(ss, JsonRequestBehavior.AllowGet);
        }
    }
}