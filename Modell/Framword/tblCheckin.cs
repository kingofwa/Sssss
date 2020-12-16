namespace Modell.Framword
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("tblCheckin")]
    public partial class tblCheckin
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [Column(TypeName = "date")]
        public DateTime? FirtDayCheckin { get; set; }

        [StringLength(50)]
        public string FirtHourCheckin { get; set; }

        [Column(TypeName = "date")]
        public DateTime? LastDayCheckin { get; set; }

        [StringLength(50)]
        public string LastHourCheckin { get; set; }

        [StringLength(10)]
        public string CategoryCheckin { get; set; }

        [StringLength(10)]
        public string ServiceCheckin { get; set; }

        [StringLength(50)]
        public string EmployeeStaffCheckin { get; set; }

        [StringLength(100)]
        public string NoteCheckin { get; set; }

        [StringLength(100)]
        public string ID_RoomCheckin { get; set; }
    }
}
