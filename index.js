const {prompt} = require('inquirer');

const fs = require('fs');

const Employee = require("./lib/Employee")

const{managerQ, emgineerQ} = require("./src/questions")

const Manager = require("./lib/Manager")

const generateHtml = require("./src/generateHtml")
const team = []
function promptManager (){
    prompt(managerQ).then(
        infoM => {
            const manager = new Manager (infoM.name, infoM.id, infoM.email, infoM.office)
            team.push (manager)
        }
    )

}



//     .then((answers) => {
//         const htmlPageContent = generateHTML(answers);

//         fs.writeFile('index.html', htmlPageContent, (err) =>
//             err ? console.log(err) : console.log('Successfully created index.html!')
//         );
//     });



const manager2 = new Manager (.)