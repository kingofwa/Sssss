using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.Areas.Admin.Models.ViewModel
{
    public class Accountant
    {
        public int Id { get; set; }
        public string nguoinhan { get; set; }
        public string sodienthoai { get; set; }
        public string diachi { get; set; }
        public Nullable<float> sotien_chi { get; set; }
        public string noidungchi { get; set; }
        public string Note_chi { get; set; }
        public string chuky_nguoinhan { get; set; }
        public string nguoilap { get; set; }
        public Nullable<DateTime> ngaylap { get; set; }
     
        public string nguoinoptien { get; set; }
        public string noidungthu { get; set; }
        public string Note_thu { get; set; }
        public string nguoinop { get; set; }
        public string sochungtu_thu { get; set; }
        public Nullable<float> sotien_thu { get; set; }

        public Nullable<float> sotienton { get; set; }
    }
}