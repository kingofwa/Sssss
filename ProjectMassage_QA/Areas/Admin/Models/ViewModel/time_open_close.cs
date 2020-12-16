using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.Areas.Admin.Models.ViewModel
{
    public class time_open_close
    {
        public Nullable<System.TimeSpan> close_door { set; get; }
        public Nullable<System.TimeSpan> open_door { set; get; }
    }
}