using AutoMapper;
using Department_Employee.Data;
using Department_Employee.Models;

namespace Department_Employee.Helper
{
    public class ApplicationMapper : Profile
    { 
        public ApplicationMapper()
        {
          CreateMap<Department,DepartmentModel>();
        }
    }
}
