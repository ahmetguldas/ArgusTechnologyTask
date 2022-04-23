using ArgusTechnologyTask.Api.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace ArgusTechnologyTask.Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<User> User { get; set; }
    }
}
