using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using ProjectMassage_QA.Areas.Admin.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers.GroupOfRights
{
    [AuthorizeBusiness]
    public class History_PayController : Controller
    {
        //
        // GET: /Admin/History_Pay/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Index()
        {
            var list_oder = db.Bill().ToList();
            List<Rom_bill_view> list_roomm = new List<Rom_bill_view> { };
            foreach (var item in list_oder)
            {
                if (list_roomm == null)
                {
                    var item1 = new Rom_bill_view();
                    var list1 = new List<Rom_bill_view>();
                    item1.E_Name = item.E_Name;
                    item1.FirtDayCheckin = item.FirtDayCheckin;
                    item1.FirtHourCheckin = item.FirtHourCheckin;
                    item1.Id = item.Id;
                    item1.LastDayCheckin = item.LastDayCheckin;
                    item1.LastHourCheckin = item.LastHourCheckin;
                    item1.NhanVienID = item.NhanVienID;
                    item1.Note = item.Note;
                    item1.O_number = item.O_number;
                    item1.Total = item.Total;
                    item1.Room = "";
                    foreach (var item2 in db.tblOrderDetail.Where(x => x.OrderId == item.Id && x.TypeOder == "room").ToList())
                    {
                        var room = db.tblRoom.Find(item2.EmployeeId);
                        if (item1.Room == "")
                        {
                            item1.Room = room.R_Name;
                        }
                        else
                        {
                            item1.Room = item1.Room + "," +room.R_Name;
                        }
                    }
                    list1.Add(item1);
                }
                else
                {
                    var item1 = new Rom_bill_view();
                    var list1 = (List<Rom_bill_view>)list_roomm;
                    item1.E_Name = item.E_Name;
                    item1.FirtDayCheckin = item.FirtDayCheckin;
                    item1.FirtHourCheckin = item.FirtHourCheckin;
                    item1.Id = item.Id;
                    item1.LastDayCheckin = item.LastDayCheckin;
                    item1.LastHourCheckin = item.LastHourCheckin;
                    item1.NhanVienID = item.NhanVienID;
                    item1.Note = item.Note;
                    item1.O_number = item.O_number;
                    item1.Total = item.Total;
                    item1.Room = "";
                    foreach (var item2 in db.tblOrderDetail.Where(x => x.OrderId == item.Id && x.TypeOder == "room").ToList())
                    {
                        var room = db.tblRoom.Find(item2.EmployeeId);
                        if (item1.Room == "")
                        {
                            item1.Room = room.R_Name;
                        }
                        else
                        {
                            item1.Room = item1.Room + "," +room.R_Name;
                        }
                    }
                    list1.Add(item1);
                }
            }
            ViewData["list_roomm"] = list_roomm;
            var list_history_oder = db.tblOrder.ToList();

            ViewData["list_history_oder"] = list_history_oder;
            return View();
        }
	}
}