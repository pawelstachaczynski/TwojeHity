using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TwojeHity.Repositories;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TwojeHity.Models;
using TwojeHity.Models.DTOs.User;
using TwojeHity.Settings;
using TwojeHity.Validators;
using TwojeHity.Models.DTOs;
using TwojeHity.Database;
using System.Reflection;

namespace TwojeHity.Services
{
    public interface ISongService
    {
        IEnumerable<SongDto> GetAllSongs();
        Task<int> AddNewSong(SongDto song);
    }

    public class SongService : ISongService
{
        private readonly AppDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly ILogger _logger;
        private readonly ISongRepository _songRepository;

        public SongService(AppDbContext dbContext, IMapper mapper, ILogger<SongService> logger, ISongRepository songRepository)
        {
            _dbContext = dbContext;
            _mapper = mapper;
            _logger = logger;
            _songRepository = songRepository;
        }

      public IEnumerable<SongDto> GetAllSongs()
        {
            var songs = _dbContext.Songs.ToList();

            var allsongs = _mapper.Map<List<SongDto>>(songs);
            return allsongs;
        }

        public async Task<int> AddNewSong(SongDto dto)
        {

            var lastRank = await _songRepository.getLastRankNumer();
            var song = new Song
            {
                rank = (int)lastRank + 1,
                title = dto.title,
                artist = dto.artist,
                album = dto.album,
                year = dto.year

            };
            // var song = _mapper.Map<SongDto>(dto);
            //return song.Id;
            int id = await _songRepository.AddNewSong(song);
            return id;
        }

    }
}
