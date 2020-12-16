using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.Areas.Admin.Models
{
    public class Loginmodel
    {
        [Required]
        public string UserName { set; get; }
        public string Password { set; get; }
        public bool Rememberme { set; get; }
    }
}