const employees = [];
const addNewEmployeeButton = document.querySelector(".button");
const employeeNameInput = document.querySelector(".input");

function displayAllEmployeesInHtml(employees) {
    const parentDiv = document.querySelector(".employees")

    parentDiv.innerHTML = "";

    employees.forEach(function (employee) {
        parentDiv.innerHTML = parentDiv.innerHTML + "<p>" + employee.name + "</p>";
    }

    )
};

function addEmployee(employee, employees) {

    addNewEmployeeButton.style.backgroundColor = "red";
    addNewEmployeeButton.disabled = true;
    employeeNameInput.disabled = true;

    setTimeout(function () {
        employees.push(employee);
        displayAllEmployeesInHtml(employees);

        addNewEmployeeButton.style.backgroundColor = "aquamarine";
        addNewEmployeeButton.disabled = false;
        employeeNameInput.disabled = false;
    }, 1000);

}

function addNewEmployee() {
    const newEmployee = {
        name: employeeNameInput.value
    };

    addEmployee(newEmployee, employees);

    employeeNameInput.value = "";
};

addNewEmployeeButton.addEventListener("click", function () {
    addNewEmployee()
});

employeeNameInput.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        addNewEmployee();
    }
});