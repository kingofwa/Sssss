using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.Areas.Admin.Models.DataModel
{
    public class PermissionAction
    {
        public int PermissionId { get; set; }
        public string PermissionName { get; set; }
        public string Description { get; set; }
        public bool IsGranted { get; set; }
    }
}