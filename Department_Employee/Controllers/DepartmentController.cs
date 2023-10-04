using Department_Employee.Data;
using Department_Employee.Models;
using Department_Employee.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Department_Employee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DepartmentController : ControllerBase
    {
        private readonly IDepartmentRepository departmentRepository;
        public DepartmentController(IDepartmentRepository departmentRepository)
        {
            this.departmentRepository = departmentRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllDepartmentAsync()
        { 
            var department = await departmentRepository.GetAllDepartmentAsync();

            return Ok(department);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOneDepartmentAsync([FromRoute] int id)
        {
            var department = await departmentRepository.GetOneDepartmentAsync(id);

            return Ok(department);
        }

        [HttpPost("")]
        public async Task<IActionResult> AddOneDepartmentAsync([FromBody]DepartmentModel departmentModel)
        {

            await  departmentRepository.AddOneDepartmentAsync(departmentModel);
            return Ok();

        }

        [HttpPut("{id}")]
        public async Task UpdateDepartmentAsync([FromRoute] int id, [FromBody] DepartmentModel departmentModel)
        { 
            await departmentRepository.UpdateDepartment(id, departmentModel);
        }

        [HttpDelete("{id}")]
        public async void DeleteDepartmentAsync([FromRoute] int id)
        {
            departmentRepository.DeleteDepartmentAsync(id);
        }

    }
}
