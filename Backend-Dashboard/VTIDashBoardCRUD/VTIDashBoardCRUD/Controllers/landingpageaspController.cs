using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VTIDashBoardCRUD.Models;

namespace VTIDashBoardCRUD.Controllers
{
    public class landingpageaspController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select landingpage_id,landingpage_name,landingpage_phone,landingpage_email,landingpage_note from
                    dbo.LandingPageAsp
                    ";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["LandingPage"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);


        }

        public string Post(landingpageasp ldp)
        {
            try
            {
                string query = @"
                    insert into dbo.LandingPageAsp values
                    ( '" + ldp.landingpage_name + @"'
,'" + ldp.landingpage_email + @"'
                    ,'" + ldp.landingpage_phone + @"'
                    ,'" + ldp.landingpage_note + @"'
                    )
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["LandingPage"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Đăng Ký Thàng Công !!! " +
                    "Trung Tâm Sẽ Liên Hệ Tới Bạn Trong Thời Gian Sớm Nhất";
            }
            catch (Exception)
            {

                return "Vui Lòng Đăng Ký Lại";
            }
        }


        public string Put(landingpageasp ldp)
        {
            try
            {
                string query = @"
                    update dbo.LandingPageAsp set 
                     landingpage_name='" + ldp.landingpage_name + @"'
                    ,landingpage_phone='" + ldp.landingpage_phone + @"'
,landingpage_email='" + ldp.landingpage_email + @"'
                    ,landingpage_note='" + ldp.landingpage_note + @"'
                    
                    where landingpage_id=" + ldp.landingpage_id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["LandingPage"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Updated Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Update!!";
            }
        }


        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.LandingPageAsp 
                    where landingpage_id=" + id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["LandingPage"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Deleted Successfully!!";
            }
            catch (Exception)
            {

                return "Failed to Delete!!";
            }
        }
    }
}
