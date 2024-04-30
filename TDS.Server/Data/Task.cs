namespace TDS.Data
{
    public class Task
    {
        public int Id { get; set; }
        public string? Description { get; set; }

        public DateTime? Deadline { get; set; }

        public int? status { get; set; }

        public int? Complexity { get; set; }

        public int? PhotoId { get; set; }

        public virtual Photo? Photo { get; set; }//один (звідси приходить)
    }
}
