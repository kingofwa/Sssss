namespace Modell.Framword
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblRegister")]
    public partial class tblRegister
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int EmployeeId { get; set; }

        [StringLength(50)]
        public string UserName { get; set; }

        [StringLength(250)]
        public string Pass { get; set; }

        public bool? Active { get; set; }

        [StringLength(50)]
        public string GroupBy { get; set; }

        [StringLength(150)]
        public string Email { get; set; }

        public virtual tblEmployee tblEmployee { get; set; }
    }
}
