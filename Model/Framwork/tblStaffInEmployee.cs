namespace Model.Framwork
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblStaffInEmployee")]
    public partial class tblStaffInEmployee
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int EmployeeId { get; set; }

        public int? E_NumberStar_View1 { get; set; }

        public int? E_NumberStar_Admin { get; set; }

        [StringLength(250)]
        public string E_Image { get; set; }

        [StringLength(550)]
        public string E_ImageList { get; set; }

        [Column(TypeName = "text")]
        public string E_Details { get; set; }

        [StringLength(250)]
        public string E_Note { get; set; }

        public double? E_Money { get; set; }

        public int? E_Status { get; set; }

        public virtual tblEmployee tblEmployee { get; set; }
    }
}
