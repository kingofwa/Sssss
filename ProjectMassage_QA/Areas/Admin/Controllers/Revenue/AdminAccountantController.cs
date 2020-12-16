using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using ProjectMassage_QA.Areas.Admin.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers.Revenue
{
    [AuthorizeBusiness]
    public class AdminAccountantController : BaseController
    {
        //
        // GET: /Admin/AdminAccountant/

        public ActionResult CashBook()
        {
           using(var db=new Data_MassageEntities7())
           {
               var chi = db.tbl_Phieu_Chi.ToList();
               List<Accountant> kho = new List<Accountant> { };
               foreach(var item in chi)
               {
                   if(kho==null)
                   {
                       var item1 = new Accountant();
                       var list1 = new List<Accountant>();
                       item1.chuky_nguoinhan = item.chuky_nguoinhan;
                       item1.diachi = item.diachi;
                       item1.Id = item.Id;
                       item1.ngaylap = item.ngaylap;
                       item1.nguoilap = item.nguoilap;
                       item1.nguoinhan = item.nguoinhan;
                       item1.nguoinop = item.nguoinhan;
                       item1.nguoinoptien = item.nguoinhan;
                       item1.noidungchi = item.noidungchi;
                       item1.noidungthu = item.noidungchi;
                       item1.Note_chi = item.Note_chi;
                       item1.Note_thu = item.Note_chi;
                       item1.sodienthoai = item.sodienthoai;
                       item1.sotien_chi = (float)item.sotien_chi;
                       item1.sotien_thu = 0;
                       item1.sochungtu_thu = item.sochungtu_chi;
                       var y = item1.sotien_chi;
                       var x = item1.sotien_thu;
                       item1.sotienton = x - y;
                       kho.Add(item1);
                   }
                   else
                   {
                       var item1 = new Accountant();
                       var list1 = new List<Accountant>();
                       item1.chuky_nguoinhan = item.chuky_nguoinhan;
                       item1.diachi = item.diachi;
                       item1.Id = item.Id;
                       item1.ngaylap = item.ngaylap;
                       item1.nguoilap = item.nguoilap;
                       item1.nguoinhan = item.nguoinhan;
                       item1.nguoinop = item.nguoinhan;
                       item1.nguoinoptien = item.nguoinhan;
                       item1.noidungchi = item.noidungchi;
                       item1.noidungthu = item.noidungchi;
                       item1.Note_chi = item.Note_chi;
                       item1.Note_thu = item.Note_chi;
                       item1.sodienthoai = item.sodienthoai;
                       item1.sotien_thu = 0;
                       item1.sochungtu_thu = item.sochungtu_chi;
                       if (item.sotien_chi == null)
                       {
                           item.sotien_chi = 0;
                       }
                       item1.sotien_chi = (float)item.sotien_chi;
                       var y = item1.sotien_chi;
                       var x = item1.sotien_thu;
                       item1.sotienton = x - y;
                       kho.Add(item1);
                      
                   }
               }
               var thu = db.phieu_thu.ToList();
               foreach (var item in thu)
               {

                   if (kho == null)
                   {
                       var item1 = new Accountant();
                       var list1 = new List<Accountant>();
                       item1.chuky_nguoinhan = item.nguoinop;
                       item1.diachi = item.diachi;
                       item1.Id = item.Id;
                       item1.ngaylap = item.ngaylap;
                       item1.nguoilap = item.nguoilap;
                       item1.nguoinhan = item.nguoinop;
                       item1.nguoinop = item.nguoinoptien;
                       item1.nguoinoptien = item.nguoinoptien;
                       item1.noidungchi = item.noidungthu;
                       item1.noidungthu = item.noidungthu;
                       item1.Note_chi = item.Note_thu;
                       item1.sodienthoai = item.sodienthoai;
                       item1.sochungtu_thu = item.sochungtu_thu;
                       item1.sotien_chi = 0;
                       item1.sotien_thu = (float)item.sotien_thu;
                       item1.sotienton = item1.sotien_thu - item1.sotien_chi;

                       kho.Add(item1);
                   }
                   else
                   {
                       var item1 = new Accountant();
                       var list1 = new List<Accountant>();
                       item1.chuky_nguoinhan = item.nguoinop;
                       item1.diachi = item.diachi;
                       item1.Id = item.Id;
                       item1.ngaylap = item.ngaylap;
                       item1.nguoilap = item.nguoilap;
                       item1.nguoinhan = item.nguoinop;
                       item1.nguoinop = item.nguoinoptien;
                       item1.nguoinoptien = item.nguoinoptien;
                       item1.noidungchi = item.noidungthu;
                       item1.noidungthu = item.noidungthu;
                       item1.Note_chi = item.Note_thu;
                       item1.sodienthoai = item.sodienthoai;
                       item1.sochungtu_thu = item.sochungtu_thu;
                       item1.sotien_chi = 0;
                       if (item.sotien_thu == null)
                       {
                           item.sotien_thu = 0;
                       }
                       item1.sotien_thu = (float)item.sotien_thu;
                       item1.sotienton = item1.sotien_thu - item1.sotien_chi;
                       kho.Add(item1);
                   }
               } 
               ViewData["list_quy_tien"]=kho.OrderBy(x=>x.sotien_thu).OrderByDescending(x => x.ngaylap).ToList();
             
              return View();
           }

        }
	}
}