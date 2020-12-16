using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers.Revenue
{
    [AuthorizeBusiness]
    public class AdminPayMoneyController : BaseController
    {
        //
        // GET: /Admin/AdminPayMoney/
         Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Index()
        {
            var list_phieuchi = db.tbl_Phieu_Chi.ToList();
            ViewData["list_phieuchi"] = list_phieuchi;
            return View();
        }

        public JsonResult Save(tbl_Phieu_Chi[] arr_phieuchi)
        {
            var value = false;
            var Id = 0;
            try
            {
                if (arr_phieuchi[0].Id > 0)
                {
                    var update = db.tbl_Phieu_Chi.Find(arr_phieuchi[0].Id);
                    update.nguoilap = arr_phieuchi[0].nguoilap;
                    update.nguoinhan = arr_phieuchi[0].nguoinhan;
                    update.diachi = arr_phieuchi[0].diachi;
                    update.chuky_nguoinhan = arr_phieuchi[0].chuky_nguoinhan;
                    update.noidungchi = arr_phieuchi[0].noidungchi;
                    update.Note_chi = arr_phieuchi[0].Note_chi;
                    update.sodienthoai = arr_phieuchi[0].sodienthoai;
                    update.sotien_chi = arr_phieuchi[0].sotien_chi;
                    update.ngaylap = arr_phieuchi[0].ngaylap;
                    db.SaveChanges();
                    value = true;
                }
                else
                {
                    var phieuchinew = new tbl_Phieu_Chi();
                    var layid = (from R in db.tbl_Phieu_Chi
                                 where R.Id > 0
                                 orderby R.Id descending
                                 select new
                                 {
                                     Id_phieuchi = R.Id
                                 }).Take(1).ToArray();

                    if (layid.Any())
                    {
                        phieuchinew.Id = layid[0].Id_phieuchi + 1;
                    }
                    else
                    {
                        phieuchinew.Id = 1;
                    }
                    Id = phieuchinew.Id;
                    phieuchinew.nguoilap = arr_phieuchi[0].nguoilap;
                    phieuchinew.nguoinhan = arr_phieuchi[0].nguoinhan;
                    phieuchinew.diachi = arr_phieuchi[0].diachi;
                    phieuchinew.chuky_nguoinhan = arr_phieuchi[0].chuky_nguoinhan;
                    phieuchinew.noidungchi = arr_phieuchi[0].noidungchi;
                    phieuchinew.Note_chi = arr_phieuchi[0].Note_chi;
                    phieuchinew.sodienthoai = arr_phieuchi[0].sodienthoai;
                    phieuchinew.sotien_chi = arr_phieuchi[0].sotien_chi;
                    phieuchinew.sochungtu_chi = arr_phieuchi[0].sochungtu_chi;
                    phieuchinew.ngaylap = arr_phieuchi[0].ngaylap;
                    db.tbl_Phieu_Chi.Add(phieuchinew);
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
            var phieu = db.tbl_Phieu_Chi.Find(Id);
            return Json(phieu, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete(int Id)
        {
            var value = false;
            try
            {
                var layid = db.tbl_Phieu_Chi.Find(Id);
                db.tbl_Phieu_Chi.Remove(layid);
                db.SaveChanges();
                value = true;
            }
            catch (Exception)
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }


        public JsonResult Get_Data_PhieuChi(DateTime Id)
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
            var list_sochungtu = (from pt in db.tbl_Phieu_Chi
                                  where (pt.Id > 0)
                                  orderby pt.Id descending
                                  select new
                                  {
                                      Sochungtuchi= pt.sochungtu_chi
                                  }).Take(1).ToList();
            if (db.tbl_Phieu_Chi.Count(x => x.Id > 0) > 0)
            {
                foreach (var item in list_sochungtu)
                {
                    var sochungtuchi2 = item.Sochungtuchi;
                    var sochungtuchi_default = sochungtuchi2.IndexOf(nam);
                    if (sochungtuchi_default == -1)
                    {
                        ss = "PC" + nam + "." + "00001";
                    }
                    else
                    {
                        var s1 = sochungtuchi2.Substring(6);
                        var s2 = Convert.ToInt32(s1) + 1;
                        if (s2 > 0 && s2 < 10)
                        {
                            ss = "PC" + nam + "." + "0000" + Convert.ToString(s2);
                        }
                        else if (10 < s2 && s2 < 100)
                        {
                            ss = "PC" + nam + "." + "000" + Convert.ToString(s2);
                        }
                        else if (s2 < 1000)
                        {
                            ss = "PC" + nam + "." + "00" + Convert.ToString(s2);
                        }
                        else if (s2 < 1000)
                        {
                            ss = "PC" + nam + "." + "0" + Convert.ToString(s2);
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
                ss = "PC" + nam + "." + "00001";
            }
            return Json(ss, JsonRequestBehavior.AllowGet);
        }
	}
}