using ProjectMassage_QA.Areas.Admin.Models.FW;
using ProjectMassage_QA.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.Areas.Admin.Models
{
    public class UserDao
    {
        Data_MassageEntities7 db = null;
        public UserDao()
        {
            db = new Data_MassageEntities7();
        }
        public long Isert(tbl_User entity)
        {
            db.tbl_User.Add(entity);
            db.SaveChanges();
            return entity.Id_User;
        }
        public tbl_User GetById(string userName)
        {
            return db.tbl_User.SingleOrDefault(x => x.Name_User == userName);
        }
        public int login(string userName, string password)
        {
            var pass = new EmployeeDAO().MD5Hash(password);
            var result = db.tbl_User.SingleOrDefault(x => x.Name_User == userName );
            if (result == null)
            {
                return 0;
            }
            else
            {
                if (result.U_Status == false)
                {
                    return -1;
                }
                else
                {
                    if (result.Pass_User == pass)
                    {
                        return 1;
                    }
                    else
                    {     
                        return -2;
                    }
                }
            }
        }
    }  
}
 
