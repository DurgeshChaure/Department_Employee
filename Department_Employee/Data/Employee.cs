using System;
using System.Collections.Generic;

namespace Department_Employee.Data
{
    public partial class Employee
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
