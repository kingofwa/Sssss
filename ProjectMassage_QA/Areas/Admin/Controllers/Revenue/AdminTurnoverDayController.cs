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
    public class AdminTurnoverDayController : BaseController
    {
        //
        // GET: /Admin/AdminTurnoverDay/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Index(string Id)
        {
            DateTime tungay,denngay;
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
            ViewData["list_day"] = tungay.ToString("yyyy-MM-dd") + "|" + denngay.ToString("yyyy-MM-dd");
            tungay = tungay.AddDays(-1);
            denngay = denngay.AddDays(1);

            var list_doanh_thu_ngay = db.DOANH_THU_NGAY().Where(x=>x.DayNew > tungay && x.DayNew < denngay).ToList();
            ViewData["list_doanh_thu_ngay"] = list_doanh_thu_ngay;
            return View();
        }
	}
}