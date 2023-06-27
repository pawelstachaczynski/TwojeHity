using TwojeHity.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Reflection.Metadata.Ecma335;
using TwojeHity.Models;
using TwojeHity.Models.DTOs;

namespace TwojeHity.Repositories
{

    public interface ISongRepository
    {
        public Task<int> getLastRankNumer();
        public Task<int> AddNewSong(Song dto);
    }
    public class SongRepository : ISongRepository
    {
        private readonly AppDbContext _context;

        public SongRepository(AppDbContext context)
        {
            _context = context;
            
        }

        public async Task<int> getLastRankNumer()
        {
            return await _context.Songs.MaxAsync(x => x.rank);
            
        }

        public async Task<int> AddNewSong(Song dto)
        {
            _context.Songs.Add(dto);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch(Exception ex)
            {
                throw ex.InnerException; 
            }

            return dto.Id;
        }
    }
}
