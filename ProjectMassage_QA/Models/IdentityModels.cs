using Microsoft.AspNet.Identity.EntityFramework;

namespace ProjectMassage_QA.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DefaultConnection")
        {
        }

        public System.Data.Entity.DbSet<ProjectMassage_QA.Areas.Admin.Models.FW.tblCategories> tblCategories { get; set; }
    }
}