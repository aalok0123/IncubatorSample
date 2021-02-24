using System;
using System.ComponentModel.DataAnnotations;

namespace IncubatorClient.Models
{
    public class Company
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public bool IsActive { get; set; }

        public string Partner { get; set; }
    }
}
