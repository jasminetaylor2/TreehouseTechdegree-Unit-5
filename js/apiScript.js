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
    let url = 'https://randomuser.me/api/?results=13&inc=name,email,location,picture,cell,dob'
    xhr.onreadystatechange = fetch(url)
        .then(response => response.json())
        .then(results =>  { 
            let arrayResult = results;
            for (let i in arrayResult) {
                let element = arrayResult[i];
                let name = element.name;

                    console.log(element)
            }
        }); 
    
    
    xhr.open('GET', 'https://randomuser.me');
    xhr.send();
    return getAllEmployees;
}
getAllEmployees();


//  < !-- ======================
// Gallery markup:

// You can use the commented out markup below as a template
// for each of your Gallery items, but you must use JS to
// create and append them to the`gallery` div.

function createCard() {
    let cardGallery = $('.gallery')
        .html(`
    <div class="card">
   <div class="card-img-container">
    <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">first last</h3>
        <p class="card-text">email</p>
        <p class="card-text cap">city, state</p>
        </div>
    </div>`);
    return cardGallery;
}
createCard();
// < !-- =======================
//     Modal markup:

// You can use the commented out markup below as a template
// for your modal, but you must use JS to create and append
// it to`body`.
function createModal() {
    let modalcard = $('body')
        .append(`<div class="modal-container">
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
                </div>`);

}

//create modal
$('.card').on('click', () => {
    createModal();
    $(".modal-info-container").append(`<div class="modal-btn-container">
    <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
    <button type="button" id="modal-next" class="modal-next btn">Next</button>
</div>`)
    console.log('now what')
    closeModal();
   
});
//close modal
function closeModal() {
 //let xButton = document.getElementsByTagName('strong')
    $(".modal-info-container").click(function () {
        
        $("div.modal").css({ "display": "none" }); console.log('heard');
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

