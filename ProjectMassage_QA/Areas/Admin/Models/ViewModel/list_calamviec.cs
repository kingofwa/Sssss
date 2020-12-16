using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.Areas.Admin.Models.ViewModel
{
    public class list_calamviec
    {
        public Nullable<int> LoaiCaLamViecId { get; set; }
        public string NameEmployee { get; set; }
        public string FirtTime { get; set; }
        public string LastTime { get; set; }
        public string Note { get; set; }
        public Nullable<decimal> Tong_tien_thu_trong_ca { get; set; }
        public Nullable<decimal> Tien_ca_truoc_ban_giao { get; set; }
        public Nullable<decimal> Tong_tien_mat { get; set; }
        public Nullable<decimal> Tong_tien_cuoi_ca { get; set; }
        public Nullable<System.DateTime> Ngay { get; set; }
        public string Note_shift { get; set; }
        public string tenloaicalamviec { get; set; }
        public string tennguoigiao { get; set; }
        public string tennguoinhan { get; set; }
        public int ID_nguoinhan { get; set; }
        public int ID_nguoigiao { get; set; }
        public string nguoigiao { get; set; }
        public string nguoinhan { get; set; }
        public int Id { get; set; }

    }
}