namespace Modell.Framword
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblSepending")]
    public partial class tblSepending
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int? IdNhan { get; set; }

        [Column(TypeName = "date")]
        public DateTime? S_NewDay { get; set; }

        [StringLength(50)]
        public string S_Number { get; set; }

        public int? S_NhanSuId { get; set; }

        public bool? S_Active { get; set; }

        [StringLength(250)]
        public string S_Content { get; set; }

        [StringLength(50)]
        public string S_Note { get; set; }

        public double? S_Money { get; set; }

        public virtual tblEmployee tblEmployee { get; set; }
    }
}
