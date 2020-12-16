using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ProjectMassage_QA.Areas.Admin.Models.DataModel
{
    public class AuthorizeBusiness : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {


            if (HttpContext.Current.Session["userid"] == null)
            {
                //Bỏ qua check sesion cho action nào in qua ActionasPdf 

                if (filterContext.ActionDescriptor.ActionName == "Print_Lay_lenh_TT" || filterContext.ActionDescriptor.ActionName == "Print_Kiem_Tra_Chuyen_Nganh"

                 )
                {
                    return;
                }
                else
                {
                    filterContext.Result = new RedirectResult("/Admin/AdminNotification/NotificationAuthorise");
                    return;
                }
            }
            Data_MassageEntities7 db = new Data_MassageEntities7();

            int userId = int.Parse(HttpContext.Current.Session["userid"].ToString());
            BLich_Su_Vao_Phan_Mem lichsu = new BLich_Su_Vao_Phan_Mem();
            lichsu.Controller = filterContext.ActionDescriptor.ControllerDescriptor.ControllerName;
            lichsu.Action = filterContext.ActionDescriptor.ActionName;
            lichsu.Nhan_su_ID = userId;
            lichsu.Ngay_vao = DateTime.Now;
            db.BLich_Su_Vao_Phan_Mem.Add(lichsu);
            db.SaveChanges();
            //Lấy  teeb action
            string actionName = filterContext.ActionDescriptor.ControllerDescriptor.ControllerName + filterContext.ActionDescriptor.ActionName;


            //lấy thông tin user
            var admin = db.tbl_User.Where(a => a.Id_User == userId && (a.GroupID == "ADMIN")).FirstOrDefault();
            //nếu là admin thì mặc định được vào
            if (admin != null)
            {
                return;
            }

            //Lấy ra tên permission được gán cho người dùng
            //List<Quyen_list_PermissionName_TenQuyen_Result> listquyen_user = db.Quyen_list_PermissionName_TenQuyen(userId).ToArray();

            var listpermisstion = from p in db.BLog_Permission_BCacQuenCT
                                  join g in db.GrantPermission on p.PermissionId equals g.PermissionId
                                  where g.UserId == userId
                                  select p.BusinessId.Substring(0, p.BusinessId.IndexOf("Controller")) + p.PermissionName_TenQuyen;
            //Kiểm tra xem các permission có chứa các tên mà người dùng kích hoạt hay không
            //Nếu không sang trang thông báo
            if (!listpermisstion.Contains(actionName))
            {
                filterContext.Result = new RedirectResult("/Admin/AdminNotification/NotificationAuthorise");
                return;
            }

        }

    }
}