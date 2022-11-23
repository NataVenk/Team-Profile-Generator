
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

<div class="jumbotron jumbotron-fluid bg-dark text-white">
  <div class="container bg-dark text-white">

    <h1 class="display-4 "> My Team</h1>
    
  </div>
</div>
<div class="d-flex justify-content-around"> 
  ${team.map(employee => {
    if (employee.getRole() === "Manager") {
      return `<div class="card card-body d-flex justify-content-around " style="width: 18rem">
    <h2 class="card-title bg-secondary text-white"> Name: ${employee.name}</h2>
          <h3 class="text-primary">${employee.getRole()}</h3>
          <h3 class="list-group-item bg-light text-dark" > ID: ${employee.id}</h3>
          <h3 class="list-group-item bg-light text-dark" > Email: 
                <a href="mailto:${employee.email}">${employee.email}</a></h3>
          <h3 class="list-group-item bg-light text-dark" > Office: ${employee.office}</h3>
          </div>`
    }


    if (employee.getRole() === "Engineer") {
      return `<div class="card card-body d-flex justify-content-around" style="width: 18rem">
      <h2 class="card-title bg-secondary text-white"> Name: ${employee.name}</h2>
            <h3 class="text-primary">${employee.getRole()}</h3>
            <h3 class="list-group-item bg-light text-dark" > ID: ${employee.id}</h3>
            <h3 class="list-group-item bg-light text-dark" > Email: 
                <a href="mailto:${employee.email}">${employee.email}</a></h3>
            <h3 class="list-group-item bg-light text-dark" > GitHub:
                <a href="https://github.com/${employee.github}">${employee.github}</a></h3>
            </div>`
    }
    else if (employee.getRole() === "Intern") {
      return `<div class="card card-body d-flex justify-content-around" style="width: 18rem">
        <h2 class="card-title bg-secondary text-white"> Name: ${employee.name}</h2>
              <h3 class="text-primary">${employee.getRole()}</h3>
              <h3 class="list-group-item bg-light text-dark" > ID: ${employee.id}</h3>
              <h3 class="list-group-item bg-light text-dark" > Email: 
                <a href="mailto:${employee.email}">${employee.email}</a></h3>
              <h3 class="list-group-item bg-light text-dark" > School: ${employee.school}</h3>
              </div>`
    }
  })
    .join("")
  }
  
  
</div>

</body>
</html>`;

module.exports = generateHTML


