using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace VTIDashBoardCRUD.Models
{
    public class landingpagemobi
    {
        public int landingpage_id { get; set; }
        [Required]
        public string landingpage_name { get; set; }
        [Required]
        public string landingpage_email { get; set; }
        [Required]
        public string landingpage_phone { get; set; }
        [Required]
        public string landingpage_note { get; set; }
    }
}