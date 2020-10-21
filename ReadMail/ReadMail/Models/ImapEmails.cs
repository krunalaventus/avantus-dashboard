using System;
using System.Collections.Generic;

namespace ReadMail.Models
{
    public partial class ImapEmails
    {
        public int Id { get; set; }
        public DateTime? EmailDate { get; set; }
        public string EmailSubject { get; set; }
        public string EmailFrom { get; set; }
        public string EmailTo { get; set; }
        public int? EmailId { get; set; }
        public string EmailUid { get; set; }
        public string EmailDateO { get; set; }
        public string EmailModseq { get; set; }
        public string XGmLabel { get; set; }
        public string XGmMsgid { get; set; }
        public int? CustomerId { get; set; }
        public string EmailSeq { get; set; }
        public string XGmThrid { get; set; }
    }
}
