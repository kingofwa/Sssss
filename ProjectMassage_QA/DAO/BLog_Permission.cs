using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.DAO
{
    public class BLog_Permission
    {
        Data_MassageEntities7 db = null;
        public BLog_Permission()
        {
            db = new Data_MassageEntities7();
        }
        public bool Delete(int id)
        {
            try
            {
                var btokhai = db.BLog_Permission_BCacQuenCT.Find(id);
                db.BLog_Permission_BCacQuenCT.Remove(btokhai);
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