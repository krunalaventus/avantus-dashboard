using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Gmail.v1;
using Google.Apis.Gmail.v1.Data;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ReadMail.Models;
using Limilabs.Client.IMAP;
using Limilabs.Mail;
using Limilabs.Mail.MIME;
using Limilabs.Mail.Headers;
using Microsoft.Extensions.Hosting;

namespace ReadMail.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        static string[] Scopes = { GmailService.Scope.GmailReadonly };
        static string ApplicationName = "Gmail API .NET Quickstart";
        private readonly funnelboostContext context = new funnelboostContext();
        private readonly IHostEnvironment _env;
        public HomeController(ILogger<HomeController> logger, IHostEnvironment env)
        {
            _logger = logger;
            _env = env;
        }
        public IActionResult Index(long uid, int emailid)
        {
            var emaild = context.Emails.Find(emailid);
            using (Imap imap = new Imap())
            {
                imap.Connect(emaild.ServerAddress, emaild.Port.Value, true);    // use ConnectSSL for SSL
                imap.UseBestLogin(emaild.Username, emaild.Password);

                imap.Select("lemlist");
                var eml = imap.GetMessageByUID(uid);
                IMail email = new MailBuilder()
                    .CreateFromEml(eml);
                var htmls = email.Html;
                htmls = htmls.Replace("cid:", "docs/");
                //var arr = ExtractFromBody(htmls, "docs/", "'");
                //foreach(var va in arr)
                //{
                //    var nas = va;
                //    var panas = nas.Split('@');
                //    htmls = htmls.Replace(va, panas[0]);

                //}
                var arr1 = ExtractFromBody(htmls, "docs/", "\"");
                foreach (var va in arr1)
                {
                    var nas = va;
                    var panas = nas.Split('@');
                    htmls = htmls.Replace(va, panas[0]);

                }
                ViewBag.Html = htmls;
                //Console.WriteLine(email.Document.Root.Headers["x-spam"]);

                foreach (MimeData mime in email.Attachments)
                {
                    var path = Path.Combine(_env.ContentRootPath + $"/docs/{mime.SafeFileName}");
                    mime.Save(path);
                }
                imap.Close();
            }
            return View();
        }
        private static List<string> ExtractFromBody(string body, string start, string end)
        {
            List<string> matched = new List<string>();

            int indexStart = 0;
            int indexEnd = 0;

            bool exit = false;
            while (!exit)
            {
                indexStart = body.IndexOf(start);

                if (indexStart != -1)
                {
                    indexEnd = indexStart + body.Substring(indexStart).IndexOf(end);

                    matched.Add(body.Substring(indexStart + start.Length, indexEnd - indexStart - start.Length));

                    body = body.Substring(indexEnd + end.Length);
                }
                else
                {
                    exit = true;
                }
            }

            return matched;
        }

        public IActionResult Privacy()
        {

            UserCredential credential;

            var filepath = Path.Combine(Directory.GetCurrentDirectory(), $"wwwroot\\newc.json");

            //string text = System.IO.File.ReadAllText(filepath);

            //byte[] data = FromBase64ForUrlString(text);
            //string decodedString =  Encoding.UTF8.GetString(data);

            //String codedBody = text.Replace("-", "+");
            //codedBody = codedBody.Replace("_", "/");
            //byte[] data = ConvertFromBase64String(text);
            //var rd = Encoding.UTF8.GetString(data);

            var Req = Request;

            using (var stream = new FileStream(filepath, FileMode.Open, FileAccess.Read))
            {
                string credPath = System.Environment.GetFolderPath(System.Environment.SpecialFolder.Personal);
                credPath = Path.Combine(credPath, ".credentials\\gmail-dotnet-quickstart.json");
                credential = GoogleWebAuthorizationBroker.AuthorizeAsync(GoogleClientSecrets.Load(stream).Secrets, Scopes, "user", CancellationToken.None, new FileDataStore(credPath, true)).Result;
                Console.WriteLine("Credential file saved to: " + credPath);
            }
            //// Create Gmail API service.   
            var service = new GmailService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = ApplicationName,
            });
            var inboxlistRequest = service.Users.Messages.List("ecodev.au@gmail.com");
            inboxlistRequest.LabelIds = "INBOX";
            inboxlistRequest.IncludeSpamTrash = false;
            //get our emails   
            var emailListResponse = inboxlistRequest.Execute();
            if (emailListResponse != null && emailListResponse.Messages != null)
            {
                //loop through each email and get what fields you want...   
                foreach (var email in emailListResponse.Messages)
                {
                    var emailInfoRequest = service.Users.Messages.Get("ecodev.au@gmail.com", email.Id);
                    var emailInfoResponse = emailInfoRequest.Execute();
                    if (emailInfoResponse != null)
                    {
                        String from = "";
                        String date = "";
                        String subject = "";
                        //loop through the headers to get from,date,subject, body  
                        foreach (var mParts in emailInfoResponse.Payload.Headers)
                        {
                            if (mParts.Name == "Date")
                            {
                                date = mParts.Value;
                            }
                            else if (mParts.Name == "From")
                            {
                                from = mParts.Value;
                            }
                            else if (mParts.Name == "Subject")
                            {
                                subject = mParts.Value;
                            }
                            if (date != "" && from != "")
                            {
                                foreach (MessagePart p in emailInfoResponse.Payload.Parts)
                                {
                                    if (p.MimeType == "text/html")
                                    {
                                        byte[] data = ConvertFromBase64String(p.Body.Data);
                                        string decodedString = Encoding.UTF8.GetString(data);
                                    }
                                }
                            }
                        }
                    }
                }
            }

            return View();
        }

        public IActionResult callback()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public static byte[] FromBase64ForUrlString(string base64ForUrlInput)
        {
            int padChars = (base64ForUrlInput.Length % 4) == 0 ? 0 : (4 - (base64ForUrlInput.Length % 4));
            StringBuilder result = new StringBuilder(base64ForUrlInput, base64ForUrlInput.Length + padChars);
            result.Append(String.Empty.PadRight(padChars, '='));
            result.Replace("-", "");
            result.Replace('_', '/');
            return Convert.FromBase64String(result.ToString());
        }

        private static byte[] ConvertFromBase64String(string input)
        {
            if (String.IsNullOrWhiteSpace(input)) return null;
            try
            {
                string working = input.Replace('-', '+').Replace('_', '/'); ;
                //while (working.Length % 4 != 0)
                //{
                //    working += '=';
                //}
                return Convert.FromBase64String(working);
            }
            catch (Exception)
            {
                return null;
            }
        }

    }
}
