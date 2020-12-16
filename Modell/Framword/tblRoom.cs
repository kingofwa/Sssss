namespace Modell.Framword
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblRoom")]
    public partial class tblRoom
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int? CategoryId { get; set; }

        [StringLength(250)]
        public string R_Name { get; set; }

        public bool? R_Active { get; set; }

        [StringLength(250)]
        public string R_Note { get; set; }

        public int? R_Status { get; set; }

        public virtual tblCategory tblCategory { get; set; }
    }
}
