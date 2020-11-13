using BJC_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace BJC_Project.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Homepage()
        {
            SignIn si = new SignIn { IsSignedIn = true };
            return View(si);
        }

        public ActionResult Signin()
        {
            SignIn si = new SignIn { IsSignedIn = false };
            return View(si);
        }

        public ActionResult StudentProfile()
        {
            SignIn si = new SignIn { IsSignedIn = true };
            return View(si);
        }
    }
}