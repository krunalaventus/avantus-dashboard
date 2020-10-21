using System;
using System.Collections.Generic;

namespace ReadMail.Models
{
    public partial class Leads
    {
        public int Id { get; set; }
        public string CampaignId { get; set; }
        public string CampaignName { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Picture { get; set; }
        public string Phone { get; set; }
        public string LinkedinUrl { get; set; }
        public string CompanyName { get; set; }
        public string Icebreaker { get; set; }
        public string Title { get; set; }
        public string Website { get; set; }
        public string Industry { get; set; }
        public string LinkedIn { get; set; }
        public string Notes { get; set; }
        public string SentStep { get; set; }
        public string SentAt { get; set; }
        public string RepliedAt { get; set; }
        public string OpenedAt { get; set; }
        public string BouncedAt { get; set; }
        public string UnsubscribedAt { get; set; }
        public string ClickedAt { get; set; }
        public int? CustomerId { get; set; }
        public string Flag { get; set; }
    }
}
