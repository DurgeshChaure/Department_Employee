using AutoMapper;
using Department_Employee.Data;
using Department_Employee.Helper;
using Department_Employee.Models;
using Microsoft.EntityFrameworkCore;

namespace Department_Employee.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly Department_EmployeeContext context;
        private readonly IMapper mapper;
        public EmployeeRepository(Department_EmployeeContext context,IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        public async Task<List<EmployeeModal>> GetDataOfEmployeeAsync()
        {
            var employee = await context.Employees.ToListAsync();

            return mapper.Map<List<EmployeeModal>>(employee);


        }
        
        public async Task<EmployeeModal>  GetOneEmployeeByIdAsync(int id)
        {
            var employee = await  context.Employees.FindAsync(id);

            return mapper.Map<EmployeeModal>(employee);
        }

        public async Task<EmployeeModal> AddEmployeeAsync(EmployeeModal employeeModal)
        {

           var employee =  mapper.Map<Employee>(employeeModal);
   
                 context.Employees.Add(employee);
            await  context.SaveChangesAsync();

            return employeeModal;
        }

        public async Task UpdateEmployeeAsync(int id ,EmployeeModal employeeModal)
        {
 

          var employee =  mapper.Map<Employee>(employeeModal);
            context.Entry(employee).State = EntityState.Modified;
            await context.SaveChangesAsync();
        }

        public async Task DeleteEmployeeAsync(int id)
        {
            var employee = new Employee() { EmpId = id };

            context.Employees.Remove(employee);

            await context.SaveChangesAsync();
        }
    }
}
