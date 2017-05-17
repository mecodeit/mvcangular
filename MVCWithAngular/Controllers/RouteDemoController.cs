using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVCWithAngularJS.Controllers
{
    public class RouteDemoController : Controller
    {
        //
        // GET: /RouteDemo/

        public ActionResult First()
        {
            return View();
        }

        public ActionResult Second()
        {
            return View();
        }

    }
}
