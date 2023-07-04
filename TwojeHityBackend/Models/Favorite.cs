using System.Data;

namespace TwojeHity.Models
{
    public class Favorite
    {
        public int Id { get; set; }
        //  public int ID_user { get; set; }
        // public User ID_user { get; set; }

        //  public int ID_song { get; set; }
        //public Song ID_song { get; set; }

        public int UserId { get; set; }
        // public UserDto ID_user { get; set; }

        public int SongId { get; set; }
        // public SongDto id.ID_song { get; set; }
    }
}
