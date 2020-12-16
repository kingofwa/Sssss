using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.DAO
{
    public class BLog_busniss
    {
        Data_MassageEntities7 db = null;
        public BLog_busniss()
        {
            db = new Data_MassageEntities7();
        }
        public bool Delete(string id)
        {
            try
            {
                var btokhai = db.BLog_Business_TenQuyen.Find(id);
                db.BLog_Business_TenQuyen.Remove(btokhai);
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