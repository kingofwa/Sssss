using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.Areas.Admin.Models.ViewModel
{
    public class Rom_bill_view
    {
        public int Id { get; set; }
        public Nullable<double> Total { get; set; }
        public Nullable<System.DateTime> FirtDayCheckin { get; set; }
        public string FirtHourCheckin { get; set; }
        public Nullable<System.DateTime> LastDayCheckin { get; set; }
        public string LastHourCheckin { get; set; }
        public Nullable<int> NhanVienID { get; set; }
        public string E_Name { get; set; }
        public string O_number { get; set; }
        public string Note { get; set; }
        public string Room { get; set; }
        //public Nullable<double> Larst_Sale_Total { get; set; }
    }
}