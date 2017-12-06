using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Models;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            #region ViewData
            ViewData["Title"] = "Software Engineer";
            ViewData["Description"] = "The portfolio website of Everett Southwick, a software engineer, full stack web developer and web designer based in Overland Park, KS.";
            ViewData["Heading"] = "Everett Southwick";
            ViewData["Subheading"] = "Software Engineer";
            ViewData["Background"] = "ocean-background.jpg";
            #endregion

            return View();
        }

        public IActionResult Portfolio()
        {
            #region ViewData
            ViewData["Title"] = "Portfolio";
            ViewData["Description"] = "Explore Everett Southwick's portfolio of web applications and web design projects.";
            ViewData["Heading"] = "My Professional Portfolio";
            ViewData["Subheading"] = "My work as a Software Engineer, from static websites to full stack web applications";
            ViewData["Background"] = "ocean-background.jpg";
            #endregion
            return View();
        }

        public IActionResult About()
        {
            #region ViewData
            ViewData["Title"] = "About";
            ViewData["Description"] = "Learn more about Everett Southwick and how he came to be a Software Engineer.";
            ViewData["Heading"] = "My Story";
            ViewData["Subheading"] = "Discover who I am as a person and how programming became my passion";
            ViewData["Background"] = "ocean-background.jpg";
            #endregion
            return View();
        }

        public IActionResult Resume()
        {
            #region ViewData
            ViewData["Title"] = "Resume";
            ViewData["Description"] = "View Everett Southwick's current and past work history, educational background, and technology skillset.";
            ViewData["Heading"] = "My Resume";
            ViewData["Subheading"] = "Find out what I've accomplished over the years";
            ViewData["Background"] = "ocean-background.jpg";
            #endregion
            return View();
        }

        public IActionResult Contact()
        {
            #region ViewData
            ViewData["Title"] = "Contact";
            ViewData["Description"] = "Contact Everett Southwick about potential development projects or work opportunities.";
            ViewData["Heading"] = "Connect With Me";
            ViewData["Subheading"] = "Reach out and say hello";
            ViewData["Background"] = "ocean-background.jpg";
            #endregion
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
