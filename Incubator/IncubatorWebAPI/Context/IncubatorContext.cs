using IncubatorWebAPI.Models;
using System.Data.Entity;

namespace IncubatorWebAPI.Context
{
    public class IncubatorContext : DbContext
    {
        public IncubatorContext() : base("name=Default")
        {

        }

        public DbSet<Company> Students { get; set; }
        
    }
}