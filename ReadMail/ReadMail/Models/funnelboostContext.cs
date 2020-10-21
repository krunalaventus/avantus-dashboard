using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ReadMail.Models
{
    public partial class funnelboostContext : DbContext
    {
        public funnelboostContext()
        {
        }

        public funnelboostContext(DbContextOptions<funnelboostContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Emails> Emails { get; set; }
        public virtual DbSet<ImapEmails> ImapEmails { get; set; }
        public virtual DbSet<Leads> Leads { get; set; }
        public virtual DbSet<Tasks> Tasks { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=funnelboost.clubkt760gyd.us-east-2.rds.amazonaws.com;Database=funnelboost;user id=admin;password=Gmail.com098;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Emails>(entity =>
            {
                entity.ToTable("emails");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.LastUpdatedUid)
                    .HasColumnName("last_updated_uid")
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .IsUnicode(false);

                entity.Property(e => e.Port).HasColumnName("port");

                entity.Property(e => e.PortA).HasColumnName("port_a");

                entity.Property(e => e.ServerAddress)
                    .HasColumnName("server_address")
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .HasColumnName("type")
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasColumnName("username")
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ImapEmails>(entity =>
            {
                entity.ToTable("imapEmails");

                entity.HasIndex(e => e.XGmThrid)
                    .HasName("idx_x_gm_thrid");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.EmailDate)
                    .HasColumnName("email_date")
                    .IsUnicode(false);

                entity.Property(e => e.EmailDateO)
                    .HasColumnName("email_date_o")
                    .IsUnicode(false);

                entity.Property(e => e.EmailFrom)
                    .HasColumnName("email_from")
                    .IsUnicode(false);

                entity.Property(e => e.EmailId).HasColumnName("email_id");

                entity.Property(e => e.EmailModseq)
                    .HasColumnName("email_modseq")
                    .IsUnicode(false);

                entity.Property(e => e.EmailSeq)
                    .HasColumnName("email_seq")
                    .IsUnicode(false);

                entity.Property(e => e.EmailSubject)
                    .HasColumnName("email_subject")
                    .IsUnicode(false);

                entity.Property(e => e.EmailTo)
                    .HasColumnName("email_to")
                    .IsUnicode(false);

                entity.Property(e => e.EmailUid)
                    .HasColumnName("email_uid")
                    .IsUnicode(false);

                entity.Property(e => e.XGmLabel)
                    .HasColumnName("x_gm_label")
                    .IsUnicode(false);

                entity.Property(e => e.XGmMsgid)
                    .HasColumnName("x_gm_msgid")
                    .IsUnicode(false);

                entity.Property(e => e.XGmThrid)
                    .HasColumnName("x_gm_thrid")
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<Leads>(entity =>
            {
                entity.ToTable("leads");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.BouncedAt)
                    .HasColumnName("bounced_at")
                    .IsUnicode(false);

                entity.Property(e => e.CampaignId)
                    .HasColumnName("campaign_id")
                    .IsUnicode(false);

                entity.Property(e => e.CampaignName)
                    .HasColumnName("campaign_name")
                    .IsUnicode(false);

                entity.Property(e => e.ClickedAt)
                    .HasColumnName("clicked_at")
                    .IsUnicode(false);

                entity.Property(e => e.CompanyName)
                    .HasColumnName("company_name")
                    .IsUnicode(false);

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasColumnName("first_name")
                    .IsUnicode(false);

                entity.Property(e => e.Flag)
                    .HasColumnName("flag")
                    .IsUnicode(false);

                entity.Property(e => e.Icebreaker)
                    .HasColumnName("icebreaker")
                    .IsUnicode(false);

                entity.Property(e => e.Industry).IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasColumnName("last_name")
                    .IsUnicode(false);

                entity.Property(e => e.LinkedIn)
                    .HasColumnName("Linked_in")
                    .IsUnicode(false);

                entity.Property(e => e.LinkedinUrl)
                    .HasColumnName("linkedin_url")
                    .IsUnicode(false);

                entity.Property(e => e.Notes)
                    .HasColumnName("notes")
                    .IsUnicode(false);

                entity.Property(e => e.OpenedAt)
                    .HasColumnName("opened_at")
                    .IsUnicode(false);

                entity.Property(e => e.Phone)
                    .HasColumnName("phone")
                    .IsUnicode(false);

                entity.Property(e => e.Picture)
                    .HasColumnName("picture")
                    .IsUnicode(false);

                entity.Property(e => e.RepliedAt)
                    .HasColumnName("replied_at")
                    .IsUnicode(false);

                entity.Property(e => e.SentAt)
                    .HasColumnName("sent_at")
                    .IsUnicode(false);

                entity.Property(e => e.SentStep)
                    .HasColumnName("sent_step")
                    .IsUnicode(false);

                entity.Property(e => e.Title).IsUnicode(false);

                entity.Property(e => e.UnsubscribedAt)
                    .HasColumnName("unsubscribed_at")
                    .IsUnicode(false);

                entity.Property(e => e.Website).IsUnicode(false);
            });

            modelBuilder.Entity<Tasks>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("tasks");

                entity.Property(e => e.CompletionFlag)
                    .HasColumnName("completion_flag")
                    .IsUnicode(false);

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.TaskDescription)
                    .HasColumnName("task_description")
                    .IsUnicode(false);

                entity.Property(e => e.TaskTitle)
                    .HasColumnName("task_title")
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.ToTable("users");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ApiLink)
                    .HasColumnName("api_link")
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .HasColumnName("first_name")
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .HasColumnName("last_name")
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .IsUnicode(false);

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.UserName)
                    .HasColumnName("user_name")
                    .IsUnicode(false);

                entity.Property(e => e.UserRole)
                    .HasColumnName("user_role")
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
