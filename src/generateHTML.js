function generateHTML(data) {
    // console.log(data);

    teamArray = []

    for (let i = 0; i < data.length; i++) {
        let employee = data[i];
        let role = employee.getRole();

        if (role === 'Manager') {
            console.log("hi", employee)
            const managerCard = generateManagerCard(employee);
            teamArray.push(managerCard)
        } if (role === 'Engineer') {
            const engineerCard = generateEngineerCard(employee);
            teamArray.push(engineerCard)
        } if (role === 'Intern') {
            const internCard = generateInternCard(employee);
            teamArray.push(internCard)
        }
    }
    const teamCards = teamArray.join('')
    const createTeam = generatePage(teamCards)
    return createTeam
}

function generatePage(teamCards) {
   console.log("ok", teamCards)
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" type="text/css" href="./style.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header class="jumbotron jumbotron-fluid bg-primary">
            <div class="container">
              <h1 class="display-4 text-center text-white">My Team</h1>
            </div>
        </header>
    
        <div class="d-flex flex-row flex-wrap justify-content-center">
          ${teamCards}
        </div>
    </body>
    
    </html>
    `;
}

function generateManagerCard(manager) {
    console.log("hello", manager.name)
    return `
            <div class="card border-dark m-1 shadow" style="width: 18rem">
                    <div class='card-header bg-info'>
                      <h3 class="card-title"> ${manager.name} </h3>
                      <h6 class="card-text"><i class="fa fa-coffee"></i> Manager </h6>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.id} </li>
                        <li class="list-group-item">Email: <a target="_blank" href="mailto: ${manager.email}"> ${manager.email} </a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber} </li>
                      </ul>
                    </div>
                </div>
            `
}

function generateEngineerCard(engineer) {
    console.log("hello", engineer.name)
    return `
            <div class="card border-dark m-1 shadow" style="width: 18rem">
                    <div class='card-header bg-info'>
                      <h3 class="card-title"> ${engineer.name} </h3>
                      <h6 class="card-text"><i class="fa fa-laptop"></i> Engineer </h6>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.id} </li>
                        <li class="list-group-item">Email: <a target="_blank" href="mailto: ${engineer.email}"> ${engineer.email} </a></li>
                        <li class="list-group-item">GitHub: <a target="_blank" href= "https://github.com/${engineer.github}"> ${engineer.github} </a></li>
                      </ul>
                    </div>
                </div>
            `
}

function generateInternCard(intern) {
    console.log("hello", intern.name)
    return `
            <div class="card border-dark m-1 shadow" style="width: 18rem">
                    <div class='card-header bg-info'>
                      <h3 class="card-title"> ${intern.name} </h3>
                      <h6 class="card-text"><i class="fa graduation-cap"></i> Intern </h6>
                    </div>
                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.id} </li>
                        <li class="list-group-item">Email: <a target="_blank" href="mailto: ${intern.email}"> ${intern.email} </a></li>
                        <li class="list-group-item">School: ${intern.school}</li>
                      </ul>
                    </div>
                </div>
            `
}

module.exports = generateHTML;