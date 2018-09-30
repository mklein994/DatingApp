using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("usersWithRoles")]
        public IActionResult GetUsersWithRoles()
        {
            return Ok("Only admins can see this");
        }

        // NOTE: tutorial calls this policy "ModeratePhotoRole"
        [Authorize(Policy = "RequirePhotoRole")]
        [HttpGet("photosForModeration")]
        public IActionResult GetPhotosForModeration()
        {
            return Ok("Admins or moderators can see this");
        }
    }
}
