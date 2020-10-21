using System;
using System.Collections.Generic;

namespace ReadMail.Models
{
    public partial class Emails
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string ServerAddress { get; set; }
        public int? Port { get; set; }
        public int? PortA { get; set; }
        public string Type { get; set; }
        public string Status { get; set; }
        public int? CustomerId { get; set; }
        public string LastUpdatedUid { get; set; }
    }
}
