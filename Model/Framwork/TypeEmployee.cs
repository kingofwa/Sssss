namespace Model.Framwork
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TypeEmployee")]
    public partial class TypeEmployee
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [StringLength(250)]
        public string TE_Name { get; set; }

        public bool? TE_Active { get; set; }

        [StringLength(250)]
        public string TE_Note { get; set; }

        public int? TE_Admin_Staff { get; set; }
    }
}
