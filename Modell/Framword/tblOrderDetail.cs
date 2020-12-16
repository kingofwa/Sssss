namespace Modell.Framword
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblOrderDetail")]
    public partial class tblOrderDetail
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int OrderId { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id_tang { get; set; }

        public int EmployeeId { get; set; }

        public double? Money { get; set; }

        [StringLength(10)]
        public string TypeOder { get; set; }

        public virtual tblOrder tblOrder { get; set; }
    }
}
