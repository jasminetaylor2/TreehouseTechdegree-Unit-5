
// 
$(".header-text-container").prepend(`<h3>JASMINE TAYLOR'S</h3>`);


//Search Markup
$(".search-container").html(`<form action="#" method="get">
                            <input type="search" id="search-input" class="search-input" placeholder="Search...">
                            <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
                        </form>`);

// Make an AJAX request
let xhr = new XMLHttpRequest();
const url = "https://randomuser.me/api/?results=13&inc=name,email,location,picture";
xhr.onreadystatechange = function () {

    if (xhr.readyState === 4) {
        let employeeResponse = fetch(url)
            .then(response => response.json())
            .then(json => () => { 
              

            });
        console.log(employeeResponse);
        // let e = employeeResponse.map(() => { });

        // $.ajax({
        //     url: 'https://randomuser.me/api/?results=13&inc=name,email,location,picture',
        //     dataType: 'json',
        //     success: function (data) {
        //         let response = data.results;
        //         for (let i in response) {
        //             let randEmployee = response[i];
        //             let name = randEmployee.name;
        //             let location = randEmployee.location;
        //             let contact = data.results.email;
        //             //return response;
        //             //console.log(response)
        //             //  console.log(randEmployee[i]);
        //             console.log(randEmployee);
        //         }

        //     }
        // });

    }

}
xhr.open('GET', 'https://randomuser.me');
xhr.send();


//display users that AJAX GET

//Create gallery Div
function generateHTML(results) {
    $(".gallery").html(`<div class="card"></div>`);
    $(".card").append(`<div class="card-img-container"></div>`);
    $(".card-img-container").append(`<img class="card-img">`);
    $(".card-img").attr("src", "https://placehold.it/90x90");
    $(".card-img").attr("alt", "profile picture");
    $(".card").append(` <div class="card-info-container"></div>`);
    $(".card-info-container").append(`<h3 id="name" class="card-name cap">${name.first}  ${name.last}</h3>`);
    $(".card-info-container").append(`<p class="card-text">email</p>`);
    $(".card-info-container").append(`<p class="card-text cap">${location.city}, ${location.state}</p>`);
}
// function generateProfile(results) {
//     results.map(result => {
generateHTML();

//     });

/* 

function generateHTML(data) {
const section = document.createElement('section');
peopleList.appendChild(section);
section.innerHTML = `
<img src=${data.thumbnail.source}>
<h2>${data.title}</h2>
<p>${data.description}</p>
<p>${data.extract}</p>
`;
}*/

//Modal Window

{/* <div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
                <h3 id="name" class="modal-name cap">name</h3>
                <p class="modal-text">email</p>
                <p class="modal-text cap">city</p>
                <hr>
                    <p class="modal-text">(555) 555-5555</p>
                    <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                    <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div> */}

// var employees = JSON.parse(xhr.responseText);  //json.parse takes string and tries to convert it to var statusHTML = '<ul class="bulleted">';
// var statusHTML = '<ul class="bulleted">';
// for (let i = 0; i < employees.length; i += 1) {
//     if (employees[i].inoffice === true) {
//         statusHTML += '<li class="in">';
//     } else { statusHTML += '<li lcass="out">'; }

//     statusHTML += employees[i].name;
// }
// statusHTML += '</li>';  
// }
// statusHTML += '</ul>';
// document.getElementById('employeeList').innerHTML = statusHTML;