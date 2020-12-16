namespace Model.Framwork
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class tbl_User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id_User { get; set; }

        [StringLength(50)]
        public string Name_User { get; set; }

        [StringLength(50)]
        public string Email_User { get; set; }

        [StringLength(50)]
        public string Pass_User { get; set; }

        [StringLength(100)]
        public string Note { get; set; }

        public bool? U_Status { get; set; }
    }
}
