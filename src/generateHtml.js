
const generateHTML = (team) =>
`<!DOCTYPE html>
  
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>


${team.map(employee => {
 if(employee.getRole() === "Manager"){
    return `<div>
    <h2>Name: ${employee.name}</h2>
          <h3>${employee.getRole()}</h3>
          <h3>ID: ${employee.id}</h3>
          <h3>Email: ${employee.email}</h3>
          <h3>Office: ${employee.office}</h3>
          </div>`
    }
    

  if(employee.getRole() === "Engineer"){
      return `<div>
      <h2>Name: ${employee.name}</h2>
            <h3>${employee.getRole()}</h3>
            <h3>ID: ${employee.id}</h3>
            <h3>Email: ${employee.email}</h3>
            <h3>GitHub: ${employee.github}</h3>
            </div>`
      }
  else if(employee.getRole() === "Intern"){
        return `<div>
        <h2>Name: ${employee.name}</h2>
              <h3>${employee.getRole()}</h3>
              <h3>ID: ${employee.id}</h3>
              <h3>Email: ${employee.email}</h3>
              <h3>School: ${employee.school}</h3>
              </div>`
        }
      })   
 .join("")
    }
  
  


</body>
</html>`;

module.exports = generateHTML


 