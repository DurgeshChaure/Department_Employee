namespace Department_Employee.Models
{
    public class EmployeeModal
    {
        public int EmpId { get; set; }
        public string? EmpName { get; set; }
        public string? EmpDesignation { get; set; }
        public double? EmpSalary { get; set; }
        public string? DeptName { get; set; }
        public DateTime? Dob { get; set; }
        public DateTime? Doj { get; set; }
        public DateTime? Doe { get; set; }
    }
}
