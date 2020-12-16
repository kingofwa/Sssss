namespace Model.Framwork
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class tbl_CaLamViec
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int? LoaiCaLamViecId { get; set; }

        public int? EmployeeId { get; set; }

        [Column(TypeName = "date")]
        public DateTime? Date { get; set; }

        public virtual tbl_Loai_Ca_Lam_Viec tbl_Loai_Ca_Lam_Viec { get; set; }
    }
}
