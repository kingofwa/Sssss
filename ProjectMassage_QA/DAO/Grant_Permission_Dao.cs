using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.DAO
{
    public class Grant_Permission_Dao
    {
        Data_MassageEntities7 db = null;
        public Grant_Permission_Dao()
        {
            db = new Data_MassageEntities7();
        }
        public bool Delete(int permissionId, int idnhansuhidden)
        {
            try
            {
                var btokhai = db.GrantPermission.Find(permissionId, idnhansuhidden);
                db.GrantPermission.Remove(btokhai);
                db.SaveChanges();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

    }
}