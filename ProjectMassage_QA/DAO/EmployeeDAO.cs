using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ProjectMassage_QA.Areas.Admin.Models.FW;
using ProjectMassage_QA.Areas.Admin.Models.ViewModel;
using System.Text;
using System.Security.Cryptography;

namespace ProjectMassage_QA.DAO
{
    public class EmployeeDAO
    {
        Data_MassageEntities7 db = null;
        public EmployeeDAO()
        {
            db=new Data_MassageEntities7();
        }

        public List<Staff_client_Result>ListAll()
        {
            return db.Staff_client().ToList();
        }

        public string MD5Hash(string input)
        {
            StringBuilder hash = new StringBuilder();
            MD5CryptoServiceProvider md5provider = new MD5CryptoServiceProvider();
            byte[] bytes = md5provider.ComputeHash(new UTF8Encoding().GetBytes(input));

            for (int i = 0; i < bytes.Length; i++)
            {
                hash.Append(bytes[i].ToString("x2"));
            }
            return hash.ToString();
        }
    }
}