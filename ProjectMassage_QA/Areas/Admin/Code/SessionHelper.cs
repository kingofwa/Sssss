using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectMassage_QA.Areas.Admin.Code
{

    public class SessionHelper
    {
        public static void  Setsesstion(UserSession session)
        {
            HttpContext.Current.Session["loginSession"] = session;
        }
        public static UserSession GetSession()
        {
            var sesstion = HttpContext.Current.Session["loginSession"];
            if(sesstion == null)
            {
                return null;
            }
            else
            {
                return sesstion as UserSession;
            }
        }
    }
}