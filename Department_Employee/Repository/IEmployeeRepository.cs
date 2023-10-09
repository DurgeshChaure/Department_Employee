using Department_Employee.Models;

namespace Department_Employee.Repository
{
    public interface IEmployeeRepository
    {
        Task<List<EmployeeModal>> GetDataOfEmployeeAsync();
        Task<EmployeeModal> GetOneEmployeeByIdAsync(int id);
        Task<EmployeeModal> AddEmployeeAsync(EmployeeModal employeeModal);
        Task UpdateEmployeeAsync(int id, EmployeeModal employeeModal);
        Task DeleteEmployeeAsync(int id);

    }
}
