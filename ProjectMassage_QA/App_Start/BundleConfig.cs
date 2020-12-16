using System.Web;
using System.Web.Optimization;

namespace ProjectMassage_QA
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/Public_QA").Include(
                      "~/Public_QA/Client/vendor/tether.min.js",
                      "~/Public_QA/Client/vendor/bootstrap.js",
                      "~/Public_QA/Client/vendor/bootstrap.css",
                      "~/Public_QA/Client/vendor/isotope.pkgd.min.js",
                      "~/Public_QA/Client/vendor/imagesloaded.pkgd.min.js",
                      "~/Public_QA/Client/vendor/font-awesome.css",
                     "~/Public_QA/Client/vendor/QA_csshome.css"));
        }
    }
}
