
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography.X509Certificates;

namespace TwojeHity.Database
{

    public class Seeder
    {
        private readonly AppDbContext _dbContext;

        public Seeder(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Seed()
        {
            if (!_dbContext.Database.CanConnect())
            {
                _dbContext.Database.Migrate();
            }

            if (_dbContext.Database.CanConnect())
            {
               
            }
        }

        //private List<Role> GetRoles()
        //{
        //    var roles = new List<Role>()
        //    {
        //        new Role
        //        {
        //            Name = "User"
        //        },
        //        new Role
        //        {
        //            Name = "Opiekun"
        //        },
        //        new Role
        //        {
        //            Name = "Admin"
        //        }
        //    };
        //    return roles;
        //}
    }
}
