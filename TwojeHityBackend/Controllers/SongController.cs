using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Runtime.CompilerServices;
using TwojeHity.Models.DTOs;
using TwojeHity.Models.DTOs.User;
using TwojeHity.Services;

namespace TwojeHity.Controllers
{
    [Route("api/song")]
    public class SongController : ControllerBase
    {
        private readonly ISongService _songService;

        public SongController(ISongService songService)
        {
            _songService = songService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<SongDto>> GetAllSongs() {
        
            var songs = _songService.GetAllSongs();
            return Ok(songs);
        }

        [HttpPost]
        public async Task<ActionResult> AddNewSong([FromBody]SongDto dto)
        { 
       
            return Ok( await _songService.AddNewSong(dto));
        }

    }
}