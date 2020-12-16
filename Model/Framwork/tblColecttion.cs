namespace Model.Framwork
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblColecttion")]
    public partial class tblColecttion
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int? Order_Id { get; set; }

        [Column(TypeName = "date")]
        public DateTime? CL_NewDay { get; set; }

        [StringLength(50)]
        public string CL_Number { get; set; }

        public int? CL_NhanSuId { get; set; }

        public bool? CL_Active { get; set; }

        [StringLength(250)]
        public string CL_Content { get; set; }

        [StringLength(50)]
        public string CL_Note { get; set; }

        public double? CL_Money { get; set; }

        public virtual tblOrder tblOrder { get; set; }
    }
}
