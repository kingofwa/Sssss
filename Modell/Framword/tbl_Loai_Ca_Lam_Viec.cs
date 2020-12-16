namespace Modell.Framword
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class tbl_Loai_Ca_Lam_Viec
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tbl_Loai_Ca_Lam_Viec()
        {
            tbl_CaLamViec = new HashSet<tbl_CaLamViec>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [StringLength(250)]
        public string Name { get; set; }

        public TimeSpan? FirtTime { get; set; }

        public TimeSpan? LastTime { get; set; }

        [StringLength(50)]
        public string type_note { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_CaLamViec> tbl_CaLamViec { get; set; }
    }
}
