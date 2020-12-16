namespace Modell.Framword
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class BDang_Ky
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ID_dang_Ky { get; set; }

        [Required]
        [StringLength(500)]
        public string Dangkycongty { get; set; }

        [StringLength(500)]
        public string tencongtychuthuong { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Ngayhachtoan { get; set; }

        [StringLength(500)]
        public string Diachi { get; set; }

        public int? TenGiamdocky { get; set; }

        public int? Tenketoantruong { get; set; }

        public int? Tenthuquy { get; set; }

        public int? Thu_Kho { get; set; }

        [StringLength(50)]
        public string Masothue { get; set; }

        [StringLength(50)]
        public string Dienthoai { get; set; }

        [StringLength(50)]
        public string Sotaikhoan { get; set; }

        [StringLength(250)]
        public string Logo { get; set; }

        [StringLength(250)]
        public string Tainganhang { get; set; }

        [StringLength(50)]
        public string SoFax { get; set; }

        public int? NamTaichinh { get; set; }

        [StringLength(250)]
        public string Diachi_VanPhong { get; set; }

        public string Motangaynghe { get; set; }

        [Required]
        [StringLength(250)]
        public string TenTiengAnh { get; set; }

        public int? Songaythuno { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Ngayhoachtoan { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Ngaykethuchoachtoan { get; set; }

        public int? Muc_dong_BH { get; set; }

        public int? Ngay_Cong { get; set; }

        public int? Lam_CN { get; set; }

        public TimeSpan? DK_Open { get; set; }

        public TimeSpan? DK_Close { get; set; }
    }
}
