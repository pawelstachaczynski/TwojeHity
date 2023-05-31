using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using TwojeHity.Models;
using TwojeHity.Models.DTOs;
using TwojeHity.Models.DTOs.User;

namespace TwojeHity.Helpers
{

    public class AutoMapperHelper : Profile
    {
        public AutoMapperHelper()
        {
            CreateMap<User, UserDto>()
                .ForMember(x => x.Id, y => y.MapFrom(z => z.Id))
                .ForMember(x => x.Login, y => y.MapFrom(z => z.Login));


            CreateMap<UserDto, User>()
                .ForMember(x => x.Id, y => y.MapFrom(z => z.Id))
                .ForMember(x => x.Login, y => y.MapFrom(z => z.Login));

            CreateMap<RegisterUserDto, User>()
                .ForMember(x => x.Login, y => y.MapFrom(z => z.Login));

            CreateMap<User, RegisterUserDto>()
                .ForMember(x => x.Login, y => y.MapFrom(z => z.Login));

            CreateMap<LoginDto, User>()
                .ForMember(x => x.Login, y => y.MapFrom(z => z.Login))
                .ForMember(x => x.PasswordHash, y => y.MapFrom(z => z.Password));

            CreateMap<User, LoginDto>()
               .ForMember(x => x.Login, y => y.MapFrom(z => z.Login))
               .ForMember(x => x.Password, y => y.MapFrom(z => z.PasswordHash));




        }
    }
}