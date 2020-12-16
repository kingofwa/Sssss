using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.Areas.Admin.Models.ViewModel
{
    public class Employee_Type_View
    {
        public int Id { get; set; }
        public string E_Code { get; set; }
        public Nullable<int> TypeEmployeeId { get; set; }
        public string E_Name { get; set; }
        public string E_Phone { get; set; }
        public string E_CMND { get; set; }
        public string E_Address { get; set; }
        public Nullable<System.DateTime> E_Dayin { get; set; }
        public Nullable<System.DateTime> E_Dayout { get; set; }
        public string E_Note { get; set; }
        public string E_Image { get; set; }
        public Nullable<int> E_Active { get; set; }
        public string TE_Name { get; set; }
        public Nullable<int> TE_Admin_Staff { get; set; }

    }
}