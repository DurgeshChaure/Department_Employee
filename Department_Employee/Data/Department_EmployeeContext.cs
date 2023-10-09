using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Department_Employee.Data
{
    public partial class Department_EmployeeContext : DbContext
    {
        public Department_EmployeeContext()
        {
        }

        public Department_EmployeeContext(DbContextOptions<Department_EmployeeContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Department> Departments { get; set; } = null!;
        public virtual DbSet<Employee> Employees { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Department>(entity =>
            {
                entity.HasKey(e => e.DeptId)
                    .HasName("PK__Departme__014881AE8CBB4D4B");

                entity.ToTable("Department");

                entity.Property(e => e.DeptName)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.HasKey(e => e.EmpId)
                    .HasName("PK__Employee__AF2DBB99337EBD88");

                entity.ToTable("Employee");

                entity.Property(e => e.DeptName)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.Doe)
                    .HasColumnType("date")
                    .HasColumnName("DOE");

                entity.Property(e => e.Doj)
                    .HasColumnType("date")
                    .HasColumnName("DOJ");

                entity.Property(e => e.EmpDesignation)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EmpName)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
