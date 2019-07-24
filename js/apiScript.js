const url = 'https://randomuser.me/api/?results=13&inc=name,email,location,picture,cell,dob'
let arrayResult;
//Custom Markup
$(".header-text-container").prepend(`<h3>JASMINE TAYLOR'S</h3>`);
//                     < !-- ======================
// Search markup:

// You can use the commented out markup below as a template
// for your search feature, but you must use JS to create and
// append it to`search-container` div.

$(".search-container")
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
                let cardGallery = `
                <div class="card">
                <div class="card-img-container">
                 <img class="card-img" src= ${picture} alt="profile picture">
                </div>

                <div class="card-info-container">
                <h3 id="name" class="card-name cap">${name.first} ${name.last}</h3>
                <p class="card-text">${email}</p>
                <p class="card-text cap">${location.city} , ${location.state}</p>
                </div>
                </div>`;

                $(".gallery").append(cardGallery);
                $(".card").attr("id", "btn")
            }   //createCard() //employee, index
            console.log(arrayResult)
        })


    xhr.open('GET', 'https://randomuser.me')
    xhr.send();

}


getAllEmployees();



// < !-- =======================
//     Modal markup:

// You can use the commented out markup below as a template
// for your modal, but you must use JS to create and append
// it to`body`.
function createModal(i) {
  //arrayResult[]
 
        let modalcard = $('body')
            .append(`<div class="modal-container">
                 <div class="modal">
                 <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                 <div class="modal-info-container">
            <img class="modal-img" src="picture" alt="profile picture"> 
                <h3 id="name" class="modal-name cap">name</h3>
                <p class="modal-text">email</p>
                <p class="modal-text cap">city</p>
                <hr>
                    <p class="modal-text">(555) 555-5555</p>
                    <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
                    <p class="modal-text">Birthday: 10/21/2015</p>
                    </div>
                </div>`);
      // $('body').append(modalcard) return modalcard;
    


}

//create modal
$(".gallery").on("click", ".card", function (e) {
    let i = e.currentTarget
    createModal(i);
    //     $(".modal-info-container").append(`<div class="modal-btn-container">
    //     <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
    //     <button type="button" id="modal-next" class="modal-next btn">Next</button>
    // </div>`)
    //     closeModal();
    // var children = e.currentTarget.index();

    console.log(e);


});

//close modal
function closeModal() {
    //let xButton = document.getElementsByTagName('strong')
    $(".modal-info-container").click(function () {
        // $("div.modal").prop("disabled", false)
        // if ($("div.modal").value = false) {
        // $("div.modal").css({ "display": "none" });
        $(".modal-info-container").hide();
        console.log('heard');
    })


}

// function modalButton(selector, idx) { 
//     $(selector).attr('idx', 'idx');
//     $(selector).prop("disabled", false)

// }

/*
    $(".modal-info-container">).append(`<div class="modal-btn-container">
    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
    <button type="button" id="modal-next" class="modal-next btn">Next</button>
</div>`)

$(".modal-btn-container").append(`class="modal">
             <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>` ) */

