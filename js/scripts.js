
// 

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        // let employees = JSON.parse(xhr.responseText   
        //  console.log(xhr.responseText);
        $.ajax({
            url: 'https://randomuser.me/api/?results=13&inc=name,email,location,picture',
            dataType: 'json',
            success: function (data) {
                console.log(data);
            }
        });
    }
}
xhr.open('GET', 'https://randomuser.me');
xhr.send();
//typeof

//display users that AJAX GET

{/* <div class="card-img-container">
    <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">first last</h3>
        <p class="card-text">email</p>
        <p class="card-text cap">city, state</p>
    </div>
</div> */}

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