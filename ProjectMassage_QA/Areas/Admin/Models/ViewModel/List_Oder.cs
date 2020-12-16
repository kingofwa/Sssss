using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.Areas.Admin.Models.ViewModel
{
    public class Oder_New
    {
        public int Id { get; set; }
        public int Id_tang { get; set; }
        public string Tendichvu { get; set; }
        public string Tentheloai { get; set; }
        public string Phantramgiam { get; set; }
        public string Nhanvienphucvu { get; set; }
        public string Ma_Oder { get; set; }
        public string Ghi_chu { get; set; }
        public int Id_dichvu { get; set; }
        public int Id_service2 { get; set; }
        public string Id_nhanvien { get; set; }
        public string Id_tang_nhanvien { get; set; }
    }
}