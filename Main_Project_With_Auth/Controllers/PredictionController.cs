using Microsoft.AspNetCore.Mvc;
using System;
using System.Diagnostics;
using System.Threading.Tasks;

namespace Main_Project_With_Auth.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PredictionController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Predict([FromBody] ConsumptionInput input)
        {
            var start = new ProcessStartInfo
            {
                FileName = "python",
                Arguments = $"\"{Path.Combine(Environment.CurrentDirectory, "PythonScripts", "predict.py")}\" \"{input.Water}\" \"{input.Electricity}\" \"{input.Gas}\"",
                RedirectStandardOutput = true,
                UseShellExecute = false,
                CreateNoWindow = true
            };

            using (var process = Process.Start(start))
            {
                using (var reader = process.StandardOutput)
                {
                    var result = await reader.ReadToEndAsync();
                    return Ok(result);
                }
            }
        }
    }

    public class ConsumptionInput
    {
        public float Water { get; set; }
        public float Electricity { get; set; }
        public float Gas { get; set; }
    }
}
