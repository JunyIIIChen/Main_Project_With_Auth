using System;
using Microsoft.AspNetCore.Mvc;

namespace Main_Project_With_Auth.Controllers
{
	[Route("api/[controller]")]
    [ApiController]
    public class CountController: ControllerBase
    {
        [HttpGet]
        public ActionResult<int> GetCounts()
        {
            return 1;
        }
    }
}

