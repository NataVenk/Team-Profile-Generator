const {prompt} = require('inquirer');
// const {endProgram} = require('process');

const fs = require('fs');

const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const{managerQ, engineerQ, internQ} = require("./src/questions")

const generateHtml = require("./src/generateHtml")
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
               writeFile();
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

function writeFile(){
    fs.writeFile('./dist/index.html', generateHtml(team), (err) => {
            err ? console.log(err) : console.log('Successfully created index.html!');
        
        });
}

addEmpl();


    