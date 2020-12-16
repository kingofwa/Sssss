using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers.manager_employee
{
    [AuthorizeBusiness]
    public class AdminStaffEmployeeController : BaseController
    {
        //
        // GET: /Admin/AdminStaffEmployee/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult StarRatingEmployee()
        {
            var list_star_evalute = db.mediumStar12().ToList();
            ViewData["list_star_evalute"] = list_star_evalute;
            return View();
        }
        public ActionResult NumberOfServings()
        {
            var list_NumberOfServings = db.NumberOfServings().ToList();
            ViewData["list_NumberOfServings"] = list_NumberOfServings;
            return View();
        }
	}
}