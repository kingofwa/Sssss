namespace Model.Framwork
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class tblEmployee
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tblEmployee()
        {
            tblRegisters = new HashSet<tblRegister>();
            tblSependings = new HashSet<tblSepending>();
            tblStaffInEmployees = new HashSet<tblStaffInEmployee>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        [StringLength(50)]
        public string E_Code { get; set; }

        public int? TypeEmployeeId { get; set; }

        [StringLength(250)]
        public string E_Name { get; set; }

        [StringLength(50)]
        public string E_Phone { get; set; }

        [StringLength(50)]
        public string E_CMND { get; set; }

        [StringLength(250)]
        public string E_Address { get; set; }

        public TimeSpan? E_Dayin { get; set; }

        public TimeSpan? E_Dayout { get; set; }

        [StringLength(250)]
        public string E_Note { get; set; }

        [StringLength(50)]
        public string E_Image { get; set; }

        public int? E_Active { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tblRegister> tblRegisters { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tblSepending> tblSependings { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tblStaffInEmployee> tblStaffInEmployees { get; set; }
    }
}
