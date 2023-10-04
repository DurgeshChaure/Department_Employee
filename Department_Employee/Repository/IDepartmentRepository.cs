using Department_Employee.Models;

namespace Department_Employee.Repository
{
    public interface IDepartmentRepository
    {
        Task<List<DepartmentModel>> GetAllDepartmentAsync();
        Task<DepartmentModel> GetOneDepartmentAsync(int id);
        Task AddOneDepartmentAsync(DepartmentModel departmentModel);

        Task UpdateDepartment(int id, DepartmentModel departmentModel);
        Task DeleteDepartmentAsync(int id);
    }
}
