
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TwojeHity.Models;

namespace TwojeHity.Database
{

    public class AppDbContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<Song> Songs { get; set; }

        public DbSet<Favorite> Favorites {get; set;}
      
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .Property(x => x.Login)
                .IsRequired()
                .HasMaxLength(100);

            modelBuilder.Entity<User>()
                .HasIndex(x => x.Login)
                .IsUnique();

            modelBuilder.Entity<Favorite>().HasKey(x => x.Id);

           // modelBuilder.Entity<Favorite>().HasOne(x => x.User).WithMany().HasForeignKey(x => x.ID_user);

          // modelBuilder.Entity<Favorite>().HasOne(x => x.Song).WithMany().HasForeignKey(x => x.ID_song);

        }


    }
}