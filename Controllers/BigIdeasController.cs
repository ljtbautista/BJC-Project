using BJC_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BJC_Project.Controllers
{
    public class BigIdeasController : Controller
    {
        private readonly SignIn si = new SignIn { IsSignedIn = true };
        //add other big idea pages here if were gonna do them
        public ActionResult Programming()
        {
            return View(si);
        }

        //Course
        public ActionResult Javascript()
        {
            return View(si);
        }

        //Lesson
        public ActionResult JavascriptTest()
        {
            return View(si);
        }

        //Interactive Game
        public ActionResult InteractiveGame()
        {
            return View(si);
        }
    }
}