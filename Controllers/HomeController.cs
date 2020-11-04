using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BJC_Project.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Homepage()
        {
            return View();
        }

        public ActionResult Signin()
        {
            return View();
        }

        public ActionResult StudentProfile()
        {
            return View();
        }
    }
}