﻿using System;
using System.Collections.Generic;

namespace ReadMail.Models
{
    public partial class Users
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string ApiLink { get; set; }
        public int? Status { get; set; }
        public string UserRole { get; set; }
    }
}
