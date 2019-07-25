const url = 'https://randomuser.me/api/?results=13&inc=name,email,location,picture,cell,dob'
let arrayResult;
//Custom Markup
$(".header-text-container").prepend(`<h3>JASMINE TAYLOR'S</h3>`);
//                     < !-- ======================
// Search markup:

// You can use the commented out markup below as a template
// for your search feature, but you must use JS to create and
// append it to`search-container` div.

$(".search-container")                                              //created the search input element in the html
    .html(`<form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">
        </form>`);

/*
  Get a random employee with http request
    if successful, call function to insert into the gallery
*/
function getAllEmployees() {
    let xhr = new XMLHttpRequest
    let url = 'https://randomuser.me/api/?results=12&inc=name,email,location,picture,cell,dob'

    xhr.onreadystatechange = fetch(url)
        .then(response => response.json())

        .then(results => {

            arrayResult = results;
            for (let index = 0; index < arrayResult.results.length; index++) {
                const person = arrayResult.results[index]
                const picture = person.picture.medium
                const name = person.name
                const email = person.email
                const location = person.location
                const phone = person.cell
                const bDay = new Date( person.dob.date)
                const bd_formated = bDay.getMonth() + '/' + bDay.getDate() + '/' + bDay.getFullYear();
                const street = person.location.street
                const city = person.location.city
                const state = person.location.state
                const postcode = person.location.postcode
                const address = street + '. ' + city + ", " + state + ' '+ postcode
                let cardGallery = `
                <div class="card">
                <div class="card-img-container">
                 <img class="card-img" src= ${picture} alt="profile picture">
                </div>

                <div class="card-info-container">
                <h3 id="name" class="card-name cap">${name.first} ${name.last}</h3>
                <p class="card-text">${email}</p>
                <p class="card-text cap">${city} , ${state}</p>
                <p class="phone">${phone}</p>
                <p class="address">${address}</p>
                <p class="city">${city}</p>
                <p class="state">${state}</p>
                <p class="dob">${bd_formated}</p>
                <p class="postcode">${postcode}</p>
                </div>
                </div>`;
                $(".phone").hide();
                $(".address").hide();
                $(".city").hide()
                $(".state").hide();
                $(".dob").hide()
                $(".postcode").hide()
               
               // console.log(address)

                $(".gallery").append(cardGallery);
                $(".card").attr("id", "btn")
            }   //createCard() //employee, index
            console.log(arrayResult)
            
        })


    xhr.open('GET', 'https://randomuser.me')
    xhr.send();

}


getAllEmployees();



//create modal
$(".gallery").on("click", ".card", function (e) {
    let i = e.currentTarget
    let picture = i.firstElementChild.firstElementChild.currentSrc
    let name = i.children[1].firstElementChild.innerHTML
    let email = i.firstElementChild.nextElementSibling.children[1].innerHTML
    let city = i.children[1].children[5].innerHTML 
    let phone = i.children[1].children[3].innerHTML               
    let address = i.children[1].children[4].innerHTML
    let bDay = i.children[1].children[7].innerHTML
    let handleOb; 
    //holds the information that populates the modal window
    let modalcard = $('body')
        .append(`<div class="modal-container">
                 <div class="modal">
                 <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                 <div class="modal-info-container">
            <img class="modal-img" src=${picture} alt="profile picture"> 
                <h3 id="name" class="modal-name cap">${name}</h3>
                <p class="modal-text">${email}</p>
                <p class="modal-text cap">${city}</p>
                <hr>
                    <p class="modal-text">${phone}</p>
                    <p class="modal-text" id="add">${address}</p>
                    <p class="modal-text">Birthday: ${bDay} </p>
                    </div>
                </div>`);
    document.getElementById("add").style.textTransform = "capitalize"  //transform every first letter to capital 
    $('body').append(modalcard)
  //creates the next/ prev buttons and append them to the modal
        $("div.modal").append(`<div class="modal-btn-container">                   
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>`)
  
        $(".phone").show();
        $(".city").show()
        $(".state").show();
        $(".dob").show()
        $(".postcode").show()
        $(".address").show()
 
        
    //Modal strong button
    //calls the closeModal function when button clicked
    const xButton = document.querySelector("button");
    xButton.className = "modal-close-btn";
    xButton.onclick = () => {
       closeModal()                                         
    }
    
    //Next and Prev modal buttons
    //shows the info for the employee card details before or after it
    const prev = document.getElementById("modal-prev")
    const next = document.getElementById("modal-next")
    const card = document.getElementById("btn")
    prev.className = "modal-prev btn";
    prev.onclick = () => { console.log('u clicked prev button')}
    
    next.className = "modal-next btn";
    next.onclick = () => {console.log('u clicked next button') }

    console.log(e);

  
});

//close modal
function closeModal() {
    $('.modal-container').remove();                 //removes the entire modal element when called
    $(".phone").hide();                             //hides the extra employee info when modal closed
    $(".address").hide();
    $(".city").hide()
    $(".state").hide();
    $(".dob").hide()
    $(".postcode").hide()
    console.log('you closed the modalContainer')
}

//  function modalButton(selector, idx) {
//     let arrayIndex = 0

// prev.onclick = function () {
//     $(selector).attr('idx', 'idx');
//     $(selector).prop("disabled", false)
//     console.log(modalbuttons)
// }

// }
 

$("body").css({ "background-color": "lightblue", })
$("header").css({ "border-bottom-style": "solid", "border-color": "white" })
//$(".header-text-container").css()

