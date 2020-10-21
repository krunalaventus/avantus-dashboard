using System;
using System.Collections.Generic;

namespace ReadMail.Models
{
    public partial class Tasks
    {
        public int Id { get; set; }
        public string TaskTitle { get; set; }
        public string TaskDescription { get; set; }
        public string CompletionFlag { get; set; }
        public int? CustomerId { get; set; }
    }
}
