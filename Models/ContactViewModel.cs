using System.ComponentModel.DataAnnotations;

namespace Dandelion.NET.Core.MVC.MPA.Models
{
    public class ContactViewModel
    {
        [Required, StringLength(30, MinimumLength = 2)]
        public string Subject { get; set; }

        [Required(ErrorMessage = "Please enter a message")]
        public string Message { get; set; }
    }
}