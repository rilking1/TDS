using Microsoft.EntityFrameworkCore;

namespace TDS.Data
{
    public class ToDoContext : DbContext
    {
        public virtual DbSet<Task> Tasks { get; set; }
        public virtual DbSet<Photo> Photos { get; set; }

        public ToDoContext(DbContextOptions<ToDoContext> options)
            : base(options)
        {

        }

    }
}
