// script.js
const validNames1 = ['Tran Le Nhu Quynh','Nguyen Truong Thien An', 'Dinh Quoc Paul', 'Bui The Hung', 'Le Quoc Vinh', 'Luu Thanh Tung', 'Dinh Duc Luong','Chiem Tan Thinh','Phan Duc Thinh','Tran Thanh Luy','Nguyen Hong Lien','Nguyen Quang Huy','Le Ngoc Man Nghi','Vuong Luc Tue Nhi','Tran Ngoc Bao Chau','Ho Tan Thuc','Vu Thi Ngoc Anh','Nguyen Thai Binh', 'Tran Nguyen Nhu Loc','Truong Thanh Hung','Truong Thi Minh Thu','Vo Yen Vy','Do Hoang Phuong Thao','Ha Thu Thao'];
const validNames2 = ['Ho Le Doan Thuc','donthut','eiridy','morning','Cụt','Mít','nyc','qk','bibo lien'];
function checkName() {
    const nameInput = document.getElementById('nameInput').value.trim(); // Trim whitespace

    if (validNames1.includes(nameInput)) {
        window.location.href = 'thankyou1.html';
    } else if (validNames2.includes(nameInput)) {
        window.location.href = 'thankyou2.html';
    } else {
        document.getElementById("oopsPopup").style.display = "block";
    }
}
function goBack() {
    window.history.back();
}
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}
function hideOopsPopup() {
    document.getElementById("oopsPopup").style.display = "none";
}
function showAnotherPopup() {
    document.getElementById("anotherPopup").style.display = "block";
}

function hideAnotherPopup() {
    document.getElementById("anotherPopup").style.display = "none";
}
function hideMap() {
    document.getElementById("mapPopup").style.display = "none";
}

function showMapPopup() { // Function to show the map popup directly from the main window
    document.getElementById("mapPopup").style.display = "block";
}
function handleKeyPress(event) {
    if (event.keyCode === 13) {
        checkName();
    }
}