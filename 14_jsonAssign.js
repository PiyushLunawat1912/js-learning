

  const employeeInfo = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
      "street": "32, Laham St.",
      "city": "Innsbruck",
      "country": "Austria",
      "referred-by": "E0012"
    }
  }`;
  console.log(typeof employeeInfo);
  console.log(employeeInfo);
  
  const employee = JSON.parse(employeeInfo);
  console.log(typeof employee);
  console.log(employee);
  
 console.log("role →", employee.role[0].toUpperCase());
 console.log("last name →", employee.name.split(" ")[1]);
console.log("Joining year of employee →", employee.doj.split("-")[2]);
  