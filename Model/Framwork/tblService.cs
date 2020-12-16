namespace Model.Framwork
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class tblService
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [StringLength(250)]
        public string S_Name { get; set; }

        public bool? S_Active { get; set; }

        [StringLength(250)]
        public string S_Note { get; set; }

        public double? S_Money { get; set; }
    }
}
