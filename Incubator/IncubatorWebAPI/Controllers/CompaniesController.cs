using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IncubatorWebAPI.Controllers
{
    public class CompaniesController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        // GET: Companies/Edit/5
        public ActionResult Edit(int? id)
        {
            
            return View();
        }

        public ActionResult Create(int? id)
        {

            return View();
        }
    }
}
