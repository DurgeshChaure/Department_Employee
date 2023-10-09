using Department_Employee.Models;
using Department_Employee.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Department_Employee.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeRepository repository;
        public EmployeeController(IEmployeeRepository repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public async Task<IActionResult> GetDataEmployeeAsync()
        {
            var employees = await repository.GetDataOfEmployeeAsync();

            return Ok(employees);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOneEmployeeById([FromRoute] int id)
        {
            var employee = await repository.GetOneEmployeeByIdAsync(id);
            return Ok(employee);
        }

        [HttpPost]
        public async Task<IActionResult> AddOneEmployeeAsync([FromBody] EmployeeModal employeeModal)
        {
            var employee = await repository.AddEmployeeAsync(employeeModal);

            return Ok(employee);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEmployeeAsync([FromRoute]int id,[FromBody]EmployeeModal employeeModal)
        {
            await repository.UpdateEmployeeAsync(id, employeeModal);

            return Ok(employeeModal);
        }

        [HttpDelete("{id}")]
        public async Task DeleteEmployeeAsync([FromRoute]int id)
        {
            await repository.DeleteEmployeeAsync(id);
        }
    }
}
