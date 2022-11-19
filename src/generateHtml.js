
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
${team.map(employee => 
  `<div>
  <h2>${employee.name}</h2>
  <h4>${employee.getRole()}</h4>
  
  </div>`
)
.join("")}

</body>
</html>`;

module.exports = generateHTML