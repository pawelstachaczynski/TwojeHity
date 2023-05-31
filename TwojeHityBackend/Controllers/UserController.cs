using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using TwojeHity.Models.DTOs;
using TwojeHity.Services;

namespace TwojeHity.Controllers
{

     [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        //private readonly IUserService userService;
        //public UserController(IUserService userService)
        //{
        //    this.userService = userService;
        //}
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<UserDto>> GetAllUsers()
        {

            var users = _userService.GetAll();
            return Ok(users);
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult<UserDto> GetUser([FromRoute] int id)
        {
            _userService.GetById(id);

            return Ok();
        }

        //[HttpPost]
        //public ActionResult RegisterUser([FromBody] RegisterUserDto dto)
        //{

        //    var id = _userService.RegisterUser(dto);
        //    return Created($"/api/user/{id}", null);
        //}

        [HttpDelete("{id}")]
        public ActionResult DeleteUser([FromRoute] int id)
        {
            _userService.DeleteUser(id);
            return NotFound();
        }

        //[HttpPut("{id}")]
        //public ActionResult UpdateUser([FromRoute] int id, [FromBody] UpdateUserDto dto)
        //{

        //    _userService.UpdateUser(id, dto);

        //    //if (!isUpdated) return NotFound();
        //    return Ok();
        //}


    }
}