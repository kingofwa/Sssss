using Newtonsoft.Json;
using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers.category
{
    [AuthorizeBusiness]
    public class AdminRoomController : BaseController
    {
        //
        // GET: /Admin/AdminRoom/
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Room()
        {
            var list = db.tblCategories.ToList();
            ViewData["list_cate"] = list;

            var list2 = db.tblRoom.ToList();
            ViewData["list_room"] = list2;
            return View();
        }
        public JsonResult Save_Room(tblRoom[] room)
        {
            var value = 0;
            var Id = 0;
            try
            {
                if (room[0].Id > 0)
                {
                    var update = db.tblRoom.Find(room[0].Id);
                    update.R_Name = room[0].R_Name;
                    update.CategoryId = room[0].CategoryId;
                    update.R_Note = room[0].R_Note;
                    db.SaveChanges();
                    value = room[0].Id;
                }
                else
                {
                    var roomnew = new tblRoom();
                    var layid = (from R in db.tblRoom
                                 where R.Id > 0
                                 orderby R.Id descending
                                 select new
                                 {
                                     Id_room = R.Id
                                 }).Take(1).ToArray();

                    if (layid.Any())
                    {
                        roomnew.Id = layid[0].Id_room + 1;
                    }
                    else
                    {
                        roomnew.Id = 1;
                    }
                    Id = roomnew.Id;

                    roomnew.R_Name = room[0].R_Name;
                    roomnew.CategoryId = room[0].CategoryId;
                    roomnew.R_Note = room[0].R_Note;
                    roomnew.R_Active = true;
                    roomnew.R_Status = 0;
                    db.tblRoom.Add(roomnew);
                    db.SaveChanges();
                    value = roomnew.Id;
                }

            }
            catch (Exception)
            {
                value = 0;
            }
            var data = new { sussecc = value, Id = Id };
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete_Room(int Id)
        {
            var value = false;
            try
            {
                db.tblRoom.Remove(db.tblRoom.Find(Id));
                db.SaveChanges();
                value = true;
            }
            catch (Exception)
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Save_Status(int Id)
        {
            var value = false;
            try
            {
                var update = db.tblRoom.Find(Id);
                update.R_Active = !update.R_Active;
                db.SaveChanges();
                value = (Boolean)update.R_Active;
            }
            catch
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);

        }

        public JsonResult Edit_Room(int Id)
        {
            var layID = db.tblRoom.Where(x => x.Id == Id).ToList();
            string value = string.Empty;
            value = JsonConvert.SerializeObject(layID, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(value, JsonRequestBehavior.AllowGet);
        }
    }
}