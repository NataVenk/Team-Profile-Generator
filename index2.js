const {prompt} = require('inquirer');


const fs = require('fs');

const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const{managerQ, engineerQ, internQ} = require("./src/questions")

// const generateHtml = require("./src/generateHtml")
const team = []

const addEmpl = () => {
    prompt([
      {
        type: "list",
        message: "Which employee would you like to add next is: ",
        choices: ["Manager", "Engineer", "Intern", "none"],
        name: "employee"
      }
    ]) .then(answers => {
        switch(answers.employee){
            case "Manager":
              promptManager();
              break;
            case "Engineer":
              promptEngineer();
              break;
    
            case "Intern":
              promptIntern();
              break;
            case "none":
               print();
                break;
          }

    }

    )
   
}

function promptManager (){
    prompt(managerQ).then(
        infoM => {
            const manager = new Manager (infoM.name, infoM.id, infoM.email, infoM.office)
            team.push (manager)
            addEmpl();
        }
    )
}

function promptEngineer (){
    console.log("prompting engineer")
    prompt(engineerQ).then(
        infoE => {
            const engineer = new Engineer (infoE.name, infoE.id, infoE.email, infoE.github)
            team.push (engineer)
            addEmpl();
        }
    )

}

function promptIntern (){
    prompt(internQ).then(
        infoI => {
            const intern = new Intern (infoI.name, infoI.id, infoI.email, infoI.school)
            team.push (intern)
            addEmpl();
        }
    )

}
addEmpl();

const print = () => {
    
    let emplData =
    team.map( employee => {
      if(employee.getRole() === "manager"){
        return `
        <h2>Name: ${employee.name}</h2>
        <h3>${employee.getRole()}</h3>

        <h3>ID: ${Employee.id}</h3>
        <h3>Email: ${Employee.email}</h3>
        <h3>Office: ${Employee.office}</h3>`;
      }
      else if(employee.getRole() === "engineer"){
        return `
        <h2>Name: ${employee.name}</h2>
        <h3>${employee.getRole()}</h3>
        <h3>ID: ${Employee.id}</h3>
        <h3>Email: ${Employee.email}</h3>
        <h3>GitHub: ${Employee.github}</h3>`;
      }
      else if(employee.getRole() === "intern"){
        return `
        <h2>Name: ${employee.name}</h2>
        <h3>${employee.getRole()}</h3>
        <h3>ID: ${Employee.id}</h3>
        <h3>Email: ${Employee.email}</h3>
        <h3>GitHub: ${Employee.school}</h3>`;
      }
    }).join("");

const data =
`<!DOCTYPE html>
  
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>

<ul class="box-list">
    ${emplData};
  </ul>


</body>
</html>`


    fs.writeFile('./dist/index.html', data, (err) => {
            err ? console.log(err) : console.log('Successfully created index.html!');
        
        });
}




    