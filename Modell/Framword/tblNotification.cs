namespace Modell.Framword
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblNotification")]
    public partial class tblNotification
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [StringLength(350)]
        public string N_Content { get; set; }

        public int? N_Show { get; set; }

        [StringLength(250)]
        public string N_Note { get; set; }
    }
}
