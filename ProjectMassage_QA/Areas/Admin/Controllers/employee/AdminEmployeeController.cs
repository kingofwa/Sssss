using Newtonsoft.Json;
using ProjectMassage_QA.Areas.Admin.Models.DataModel;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using ProjectMassage_QA.Areas.Admin.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Controllers.employee
{
    [AuthorizeBusiness]
    public class AdminEmployeeController : BaseController
    {
        //
        // GET: /Admin/AdminEmployee/int page=1, int pageSize = 10
        Data_MassageEntities7 db = new Data_MassageEntities7();
        public ActionResult Employee()
        {
            var list = db.TypeEmployee.Where(x=>x.TE_Active == true).ToList();
            ViewData["list_typeemployee"] = list;


            var list_employee_type = (from em in db.tblEmployees
                                      join ty in db.TypeEmployee on em.TypeEmployeeId equals ty.Id
                                      //where em.E_Active==0
                                      select new Employee_Type_View()
                                      {
                                          Id = em.Id,
                                          E_Address = em.E_Address,
                                          E_Active  = em.E_Active,
                                          E_CMND    = em.E_CMND,
                                          E_Code    = em.E_Code,
                                          E_Dayin   = em.E_Dayin,
                                          E_Dayout  = em.E_Dayout,
                                          E_Image   = em.E_Image,
                                          E_Name    = em.E_Name,
                                          E_Note    = em.E_Note,
                                          E_Phone   = em.E_Phone,
                                          TE_Name   = ty.TE_Name,
                                          TE_Admin_Staff = ty.TE_Admin_Staff
                                      }).ToList();
            ViewData["list_employee"] = list_employee_type;
            return View();
        }
        public JsonResult Save_EmployeeDefault(tblEmployees[] employee)
        {
            var value = false;

            var Id= employee[0].Id;
            try
            {
                if (employee[0].Id > 0)
                {

                    var update = db.tblEmployees.Find(employee[0].Id);
                    update.TypeEmployeeId = employee[0].TypeEmployeeId;
                    update.E_Name = employee[0].E_Name;
                    update.E_Code = employee[0].E_Code;
                    update.E_Phone = employee[0].E_Phone;
                    update.E_CMND = employee[0].E_CMND;
                    update.E_Address = employee[0].E_Address;
                    update.E_Dayin = employee[0].E_Dayin;
                    update.E_Dayout = employee[0].E_Dayout;
                    update.E_Note = employee[0].E_Note;
                    update.E_Image = employee[0].E_Image;
                    db.SaveChanges();
                    value =true;
                }
                else
                {
                    var employeenew = new tblEmployees();
                    var layid = (from E in db.tblEmployees
                                 where E.Id > 0
                                 orderby E.Id descending
                                 select new
                                 {
                                     Id_employee = E.Id
                                 }).Take(1).ToArray();

                    if (layid.Any())
                    {
                        employeenew.Id = layid[0].Id_employee + 1;
                    }
                    else
                    {
                        employeenew.Id = 1;
                    }
                    Id= employeenew.Id;
                    employeenew.TypeEmployeeId = employee[0].TypeEmployeeId;
                    employeenew.E_Name = employee[0].E_Name;
                    employeenew.E_Code = employee[0].E_Code;
                    employeenew.E_Phone = employee[0].E_Phone;
                    employeenew.E_CMND = employee[0].E_CMND;
                    employeenew.E_Address = employee[0].E_Address;
                    employeenew.E_Dayin = employee[0].E_Dayin;
                    employeenew.E_Dayout = employee[0].E_Dayout;
                    employeenew.E_Note = employee[0].E_Note;
                    employeenew.E_Image = employee[0].E_Image;
                    employeenew.E_Active =0;
                    db.tblEmployees.Add(employeenew);
                    db.SaveChanges();
                    value =true;
                }

            }
            catch (Exception)
            {
                value = false;
            }
             var list_employee_type = (from em in db.tblEmployees
                                      join ty in db.TypeEmployee on em.TypeEmployeeId equals ty.Id
                                      where em.Id==Id
                                      select new Employee_Type_View()
                                      {
                                          Id = em.Id,
                                          E_Address = em.E_Address,
                                          E_Active = em.E_Active,
                                          E_CMND = em.E_CMND,
                                          E_Code = em.E_Code,
                                          E_Dayin = em.E_Dayin,
                                          E_Dayout = em.E_Dayout,
                                          E_Image = em.E_Image,
                                          E_Name = em.E_Name,
                                          E_Note = em.E_Note,
                                          E_Phone = em.E_Phone,
                                          TE_Name   = ty.TE_Name,
                                          TE_Admin_Staff = ty.TE_Admin_Staff,

                                      }).ToList();

             var data = new { success = value, arraydata = list_employee_type, message = "Your request has been successfully added,." };
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Save_EmployeeStaff(EmployeeStaff_View[] employee)
        {
            var value = false;
            var Id = employee[0].Id;
            try
            {
                if (employee[0].Id > 0)
                {
                    var update = db.tblEmployees.Find(employee[0].Id);
                    update.TypeEmployeeId = employee[0].TypeEmployeeId;
                    update.E_Code = employee[0].E_Code;
                    update.E_Name = employee[0].E_Name;
                    update.E_Phone = employee[0].E_Phone;
                    update.E_CMND = employee[0].E_CMND;
                    update.E_Address = employee[0].E_Address;
                    update.E_Dayin = employee[0].E_Dayin;
                    update.E_Dayout = employee[0].E_Dayout;
                    update.E_Note = employee[0].E_Note;
                    update.E_Image = employee[0].E_Image;

                    var update1 = db.tblStaffInEmployee.Find(employee[0].Id);
                    update1.E_ImageList = employee[0].E_ImageList;
                    update1.E_Money = employee[0].E_Money;
                    update1.E_Details = employee[0].E_Details;
                    update1.E_NumberStar_View1 = employee[0].E_NumberStar_View1;

                    db.SaveChanges();
                    value = true;
                }
                else
                {
                    var employeenew = new tblEmployees();
                    var layid = (from E in db.tblEmployees
                                 where E.Id > 0
                                 orderby E.Id descending
                                 select new
                                 {
                                     Id_employee = E.Id
                                 }).Take(1).ToArray();

                    if (layid.Any())
                    {
                        employeenew.Id = layid[0].Id_employee + 1;
                    }
                    else
                    {
                        employeenew.Id = 1;
                    }
                    Id = employeenew.Id;
                    employeenew.TypeEmployeeId = employee[0].TypeEmployeeId;
                    employeenew.E_Name = employee[0].E_Name;
                    employeenew.E_Phone = employee[0].E_Phone;
                    employeenew.E_CMND = employee[0].E_CMND;
                    employeenew.E_Address = employee[0].E_Address;
                    employeenew.E_Dayin = employee[0].E_Dayin;
                    employeenew.E_Dayout = employee[0].E_Dayout;
                    employeenew.E_Note = employee[0].E_Note;
                    employeenew.E_Image = employee[0].E_Image;
                    employeenew.E_Code = employee[0].E_Code;
                    employeenew.E_Active = 0;

                    db.tblEmployees.Add(employeenew);

                    var employeenew1 = new tblStaffInEmployee();
                    employeenew1.Id = Id;
                    employeenew1.EmployeeId = Id;
                    employeenew1.E_ImageList = employee[0].E_ImageList;
                    employeenew1.E_Money = employee[0].E_Money;
                    employeenew1.E_Details = employee[0].E_Details;
                    employeenew1.E_NumberStar_View1 = employee[0].E_NumberStar_View1;
                    employeenew1.E_Status = 1;
                    db.tblStaffInEmployee.Add(employeenew1);
                    db.SaveChanges();
                    value = true;
                }

            }
            catch (Exception)
            {
                value = false;
            }
            var list_employee_type = (from   stack in db.tblStaffInEmployee 
                                      join em in db.tblEmployees on stack.EmployeeId equals em.Id
                                      join ty in db.TypeEmployee on em.TypeEmployeeId equals ty.Id
                                      where em.Id == Id
                                      select new EmployeeStaff_View()
                                      {
                                          Id = em.Id,
                                          E_Address = em.E_Address,
                                          E_Active = em.E_Active,
                                          E_CMND = em.E_CMND,
                                          E_Code = em.E_Code,
                                          E_Dayin = em.E_Dayin,
                                          E_Dayout = em.E_Dayout,
                                          E_Image = em.E_Image,
                                          E_Name = em.E_Name,
                                          E_Note = em.E_Note,
                                          E_Phone = em.E_Phone,
                                          TE_Name = ty.TE_Name,


                                            E_ImageList = stack.E_ImageList,
                                            E_Money = stack.E_Money,
                                            E_Details = stack.E_Details,
                                            E_NumberStar_View1 = stack.E_NumberStar_View1,
                                            TE_Admin_Staff = ty.TE_Admin_Staff,
                                      }).ToList();

            var data = new { success = value, arraydata = list_employee_type, message = "Your request has been successfully added,." };
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Edit_Employee(int Id, int TE_Admin_Staff_Note)
        {
           
            if (TE_Admin_Staff_Note == 1)
            {
                var list_employee_type = (from em in db.tblEmployees
                                          join ty in db.TypeEmployee on em.TypeEmployeeId equals ty.Id
                                          where em.Id == Id
                                          select new Employee_Type_View()
                                          {
                                              Id = em.Id,
                                              E_Address = em.E_Address,
                                              E_Active = em.E_Active,
                                              E_CMND = em.E_CMND,
                                              E_Code = em.E_Code,
                                              E_Dayin = em.E_Dayin,
                                              E_Dayout = em.E_Dayout,
                                              E_Image = em.E_Image,
                                              E_Name = em.E_Name,
                                              E_Note = em.E_Note,
                                              E_Phone = em.E_Phone,
                                              TE_Name = ty.TE_Name,
                                              TE_Admin_Staff = ty.TE_Admin_Staff,

                                          }).ToList();

                string value = string.Empty;
                value = JsonConvert.SerializeObject(list_employee_type, Formatting.Indented, new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                var data = new { success = true, arraydata = value, message = "Your request has been successfully added,." };
                return Json(data, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var list_employee_type = (from stack in db.tblStaffInEmployee
                                          join em in db.tblEmployees on stack.EmployeeId equals em.Id
                                          join ty in db.TypeEmployee on em.TypeEmployeeId equals ty.Id
                                          where em.Id == Id
                                          select new EmployeeStaff_View()
                                          {
                                              Id = em.Id,
                                              E_Address = em.E_Address,
                                              E_Active = em.E_Active,
                                              E_CMND = em.E_CMND,
                                              E_Code = em.E_Code,
                                              E_Dayin = em.E_Dayin,
                                              E_Dayout = em.E_Dayout,
                                              E_Image = em.E_Image,
                                              E_Name = em.E_Name,
                                              E_Note = em.E_Note,
                                              E_Phone = em.E_Phone,
                                              TE_Name = ty.TE_Name,


                                              E_ImageList = stack.E_ImageList,
                                              E_Money = stack.E_Money,
                                              E_Details = stack.E_Details,
                                              E_NumberStar_View1 = stack.E_NumberStar_View1,
                                              TE_Admin_Staff = ty.TE_Admin_Staff,
                                          }).ToList();
                string value = string.Empty;
                value = JsonConvert.SerializeObject(list_employee_type, Formatting.Indented, new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore
                });
                var data = new { success = true, arraydata = value, message = "Your request has been successfully added,." };
                return Json(data, JsonRequestBehavior.AllowGet);
            }

           
        }
        public JsonResult Delete_Employee(int Id)
        {
            var value = false;
            try
            {
                var layid = db.tblEmployees.Find(Id);
                var layid1 = db.tblStaffInEmployee.Find(Id);
                var layid2 = db.tblRegister.Find(Id);

                db.tblEmployees.Remove(layid);
                if (layid1!=null)
                {
                    db.tblStaffInEmployee.Remove(layid1);
                }
                if (layid2 != null)
                {
                    db.tblRegister.Remove(layid2);
                }
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
            var update = db.tblEmployees.Find(Id);
            if (update.E_Active==1)
            {
                update.E_Active = 0;
            }
            else
            {
                update.E_Active = 1;
            }
            db.SaveChanges();
            return Json(update.E_Active, JsonRequestBehavior.AllowGet);
        }
        public string path { get; set; }

        public JsonResult Code_employee(string IdChange_pass)
        {
            var value = false;
            try
            {
                var trave = db.tblEmployees.Where(x => x.E_Code == IdChange_pass).ToList();
                if (trave.Count > 0)
                {
                    value = true;
                }
            }
            catch (Exception)
            {
                value = false;
            }
            return Json(value, JsonRequestBehavior.AllowGet);
        }
    }
}