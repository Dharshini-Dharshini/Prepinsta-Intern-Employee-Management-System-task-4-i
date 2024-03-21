// Define the Employee object template
function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    this.salary = salary;
}

// Function to calculate the average salary of employees
function calculateAverageSalary(employees) {
    if (employees.length === 0) return 0;
    
    const totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
    return totalSalary / employees.length;
}

// Function to find employees in a specific department
function findEmployeesInDepartment(employees, department) {
    return employees.filter(emp => emp.department === department);
}

// Function to increase salary for all employees by a percentage
function increaseSalary(employees, percentage) {
    employees.forEach(emp => {
        emp.salary *= (1 + percentage / 100);
    });
}

// Function to sort employees by age in ascending order
function sortEmployeesByAge(employees) {
    return employees.slice().sort((a, b) => a.age - b.age);
}

// Example usage:

// Create employee objects
const employees = [
    new Employee("John", 30, "HR", 50000),
    new Employee("Alice", 25, "IT", 60000),
    new Employee("Bob", 35, "HR", 55000),
    new Employee("Emily", 28, "IT", 65000)
];

// Calculate average salary
const averageSalary = calculateAverageSalary(employees);
console.log("Average Salary:", averageSalary);

// Find employees in a specific department
const hrEmployees = findEmployeesInDepartment(employees, "HR");
console.log("HR Employees:", hrEmployees);

// Increase salary for all employees by 10%
increaseSalary(employees, 10);
console.log("Employees after salary increase:", employees);

// Sort employees by age
const sortedEmployees = sortEmployeesByAge(employees);
console.log("Sorted Employees by Age:", sortedEmployees);