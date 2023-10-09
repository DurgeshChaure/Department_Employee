using AutoMapper;
using Department_Employee.Data;
using Department_Employee.Models;
using Microsoft.EntityFrameworkCore;

namespace Department_Employee.Repository
{
    public class DepartmentRepository : IDepartmentRepository
    {
        private readonly Department_EmployeeContext context;
        private readonly IMapper mapper;
        public DepartmentRepository(Department_EmployeeContext context,IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<List<DepartmentModel>> GetAllDepartmentAsync()
        {
            var department = await context.Departments.ToListAsync();

            return mapper.Map<List<DepartmentModel>>(department);
        }

        public async Task<DepartmentModel> GetOneDepartmentAsync(int id)
        {
            var department = await context.Departments.FindAsync(id);

            return mapper.Map<DepartmentModel>(department);
        }

        public async Task AddOneDepartmentAsync(DepartmentModel departmentModel)
        {
            var dept = new Department()
            {
                DeptName = departmentModel.DeptName,
                Status =departmentModel.Status

            };

            context.Departments.Add(dept);
            await context.SaveChangesAsync();

        }

        public async Task UpdateDepartment(int id, DepartmentModel departmentModel)
        {
            var existingDepartment = await context.Departments.FindAsync(id);

            existingDepartment.DeptName = departmentModel.DeptName;
            existingDepartment.Status = departmentModel.Status;

            await context.SaveChangesAsync();


        }
        public async Task DeleteDepartmentAsync(int id)
        {
            var department = new Department() { DeptId = id };

            context.Departments.Remove(department);

            await context.SaveChangesAsync();
        }

       

    }
}
