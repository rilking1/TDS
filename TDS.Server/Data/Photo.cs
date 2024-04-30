namespace TDS.Data
{
    public class Photo
    {

        public int Id { get; set; }
        public byte[]? Img { get; set; }

        public virtual ICollection<Task> Ratings { get; set; } = new List<Task>();//багато (сюди йде)
    }
}
