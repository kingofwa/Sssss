using ProjectMassage_QA.Areas.Admin.Models.FW;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Modell
{
    public class AccountModel
    {
        private Data_MassageEntities7 context = null;
        public AccountModel()
        {
            context = new Data_MassageEntities7();
        }
        public bool login(string UserName, string Passsword)
        {
            Object[] sqlparams = 
            {
                new SqlParameter("@Name_User", UserName),
                 new SqlParameter("@Pass_User", Passsword),
            };
            var res = context.Database.SqlQuery<bool>("tbl_User @Name_User,@Pass_User", sqlparams).SingleOrDefault();
            return res;
        }
    }
}
