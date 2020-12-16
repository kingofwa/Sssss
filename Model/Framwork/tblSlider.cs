namespace Model.Framwork
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblSlider")]
    public partial class tblSlider
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [StringLength(250)]
        public string SLi_Image { get; set; }

        [StringLength(550)]
        public string SLi_Content { get; set; }

        public bool? SLi_Active { get; set; }

        [StringLength(250)]
        public string SLi_Name { get; set; }
    }
}
