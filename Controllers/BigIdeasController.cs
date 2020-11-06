using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BJC_Project.Controllers
{
    public class BigIdeasController : Controller
    {
        //add other big idea pages here if were gonna do them
        public ActionResult Programming()
        {
            return View();
        }

        //Course
        public ActionResult Javascript()
        {
            return View();
        }

        //Lesson
        public ActionResult JavascriptTest()
        {
            return View();
        }
    }
}