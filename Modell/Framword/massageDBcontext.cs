namespace Modell.Framword
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class Data_MassageEntities1 : DbContext
    {
        public Data_MassageEntities1()
            : base("name=Data_MassageEntities1")
        {
        }

        public virtual DbSet<BDang_Ky> BDang_Ky { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<tbl_CaLamViec> tbl_CaLamViec { get; set; }
        public virtual DbSet<tbl_Loai_Ca_Lam_Viec> tbl_Loai_Ca_Lam_Viec { get; set; }
        public virtual DbSet<tbl_User> tbl_User { get; set; }
        public virtual DbSet<tblCategory> tblCategories { get; set; }
        public virtual DbSet<tblCheckin> tblCheckins { get; set; }
        public virtual DbSet<tblColecttion> tblColecttions { get; set; }
        public virtual DbSet<tblEmployee> tblEmployees { get; set; }
        public virtual DbSet<tblNotification> tblNotifications { get; set; }
        public virtual DbSet<tblOrder> tblOrders { get; set; }
        public virtual DbSet<tblOrderDetail> tblOrderDetails { get; set; }
        public virtual DbSet<tblRegister> tblRegisters { get; set; }
        public virtual DbSet<tblRoom> tblRooms { get; set; }
        public virtual DbSet<tblSepending> tblSependings { get; set; }
        public virtual DbSet<tblService> tblServices { get; set; }
        public virtual DbSet<tblSlider> tblSliders { get; set; }
        public virtual DbSet<tblStaffInEmployee> tblStaffInEmployees { get; set; }
        public virtual DbSet<tblStarOrder> tblStarOrders { get; set; }
        public virtual DbSet<TypeEmployee> TypeEmployees { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BDang_Ky>()
                .Property(e => e.Dangkycongty)
                .IsUnicode(false);

            modelBuilder.Entity<BDang_Ky>()
                .Property(e => e.Masothue)
                .IsUnicode(false);

            modelBuilder.Entity<BDang_Ky>()
                .Property(e => e.Dienthoai)
                .IsUnicode(false);

            modelBuilder.Entity<BDang_Ky>()
                .Property(e => e.Sotaikhoan)
                .IsUnicode(false);

            modelBuilder.Entity<BDang_Ky>()
                .Property(e => e.SoFax)
                .IsUnicode(false);

            modelBuilder.Entity<tbl_Loai_Ca_Lam_Viec>()
                .Property(e => e.type_note)
                .IsUnicode(false);

            modelBuilder.Entity<tbl_Loai_Ca_Lam_Viec>()
                .HasMany(e => e.tbl_CaLamViec)
                .WithOptional(e => e.tbl_Loai_Ca_Lam_Viec)
                .HasForeignKey(e => e.LoaiCaLamViecId);

            modelBuilder.Entity<tbl_User>()
                .Property(e => e.Name_User)
                .IsUnicode(false);

            modelBuilder.Entity<tbl_User>()
                .Property(e => e.Email_User)
                .IsUnicode(false);

            modelBuilder.Entity<tbl_User>()
                .Property(e => e.Note)
                .IsUnicode(false);

            modelBuilder.Entity<tblCategory>()
                .HasMany(e => e.tblRooms)
                .WithOptional(e => e.tblCategory)
                .HasForeignKey(e => e.CategoryId);

            modelBuilder.Entity<tblCheckin>()
                .Property(e => e.CategoryCheckin)
                .IsFixedLength();

            modelBuilder.Entity<tblCheckin>()
                .Property(e => e.ServiceCheckin)
                .IsFixedLength();

            modelBuilder.Entity<tblCheckin>()
                .Property(e => e.EmployeeStaffCheckin)
                .IsUnicode(false);

            modelBuilder.Entity<tblCheckin>()
                .Property(e => e.NoteCheckin)
                .IsUnicode(false);

            modelBuilder.Entity<tblCheckin>()
                .Property(e => e.ID_RoomCheckin)
                .IsUnicode(false);

            modelBuilder.Entity<tblEmployee>()
                .Property(e => e.E_CMND)
                .IsUnicode(false);

            modelBuilder.Entity<tblEmployee>()
                .HasMany(e => e.tblRegisters)
                .WithRequired(e => e.tblEmployee)
                .HasForeignKey(e => e.EmployeeId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<tblEmployee>()
                .HasMany(e => e.tblSependings)
                .WithOptional(e => e.tblEmployee)
                .HasForeignKey(e => e.IdNhan);

            modelBuilder.Entity<tblEmployee>()
                .HasMany(e => e.tblStaffInEmployees)
                .WithRequired(e => e.tblEmployee)
                .HasForeignKey(e => e.EmployeeId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<tblOrder>()
                .Property(e => e.Note)
                .IsUnicode(false);

            modelBuilder.Entity<tblOrder>()
                .HasMany(e => e.tblColecttions)
                .WithOptional(e => e.tblOrder)
                .HasForeignKey(e => e.Order_Id);

            modelBuilder.Entity<tblOrder>()
                .HasMany(e => e.tblOrderDetails)
                .WithRequired(e => e.tblOrder)
                .HasForeignKey(e => e.OrderId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<tblOrder>()
                .HasMany(e => e.tblStarOrders)
                .WithRequired(e => e.tblOrder)
                .HasForeignKey(e => e.OrderId)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<tblOrderDetail>()
                .Property(e => e.TypeOder)
                .IsUnicode(false);

            modelBuilder.Entity<tblRegister>()
                .Property(e => e.UserName)
                .IsUnicode(false);

            modelBuilder.Entity<tblRegister>()
                .Property(e => e.GroupBy)
                .IsUnicode(false);

            modelBuilder.Entity<tblStaffInEmployee>()
                .Property(e => e.E_Details)
                .IsUnicode(false);

            modelBuilder.Entity<tblStarOrder>()
                .Property(e => e.Note)
                .IsUnicode(false);
        }
    }
}
