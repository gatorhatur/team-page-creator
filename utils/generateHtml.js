function getIcon(role) {
    return
}

function formatRoleText(role, specialText) {
    switch (role) {
        case 'Manager':
            return `Office Number: ${specialText}`
        case 'Engineer':
            return `Github: ${specialText}`
        case 'Intern':
            return `School: ${specialText}`
            
    }
}

function generateCard(employeeObj) {

    let { name: empName, id: empId, email: empEmail, ...other } = employeeObj;
    let roleText = other[Object.keys(other)]
    let role = employeeObj.getRole()

    return `
    <div class="card mt-10 shadow" style="width: 18rem;">
    <div class="card-img-top bg-warning">
        <h3 class="p-10">${empName}</h3>
        <h5 class="p-10"><span id="icon"></span>${role}</h5>
    </div>
    <div class="card-body">
      <p class="card-text">ID: ${empId}</p>
      <p class="card-text">Email: ${empEmail}</p>
      <p class="card-text">${formatRoleText(role,roleText)}</p>
    </div>
    </div>
    `
}

function generateHtml(employeeArr) {

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" integrity="sha512-UyNhw5RNpQaCai2EdC+Js0QL4RlVmiq41DkmCJsRV3ZxipG2L0HhTqIf/H9Hp8ez2EnFlkBnjRGJU2stW3Lj+w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<!--Will need to be updated to best practice path-->
    <link rel="stylesheet" href="./assets/css/style.css" />

    <title>Get to know your Team!</title>
</head>
<body>
    <header class="container-fluid bg-info h-25">
        <h1 class="text-light text-center">Meet our Team!</h1>
    </header>

    <main class="container mt-10 d-flex flex-wrap">

        ${generateCard(employeeArr[0])}
          
    </main>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
</body>
</html>    
    `
}

module.exports = generateHtml;