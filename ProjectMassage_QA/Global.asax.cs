using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace ProjectMassage_QA
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            SqlDependency.Start(@"data source=WINDOWS-SRJL4J7\SA;initial catalog=Data_Massage;user id=sa;password=20061995;MultipleActiveResultSets=True;App=EntityFramework&quot;");
        }
        //protected void Application_End()
        //{
        //    SqlDependency.Stop(@"data source=.;initial catalog=Data_Massage;user id=sa;password=20061995;MultipleActiveResultSets=True;App=EntityFramework&quot;");
        //}


    }
}
