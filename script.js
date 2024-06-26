// script.js
const validNames1 = ['Trần Lê Như Quỳnh','Nguyễn Lê Thiện Nhân','Phan Như Ý','Nguyễn Trương Thiên Ân', 'Đinh Quốc Paul', 'Bùi Thế Hưng', 'Lê Quốc Vinh', 'Lưu Thanh Tùng', 'Đinh Đức Lương','Nguyễn Trọng Tín','Lê Thiên Hải','Đinh Trường Luân','Đoàn Huy Tài','Chiêm Tấn Thịnh','Phan Đức Thịnh','Trần Thành Lũy','Nguyễn Hồng Liên','Nguyễn Quang Huy','Lê Ngọc Mẩn Nghi','Vương Lục Tuệ Nhi','Huỳnh Ngọc Bảo Châu','Hồ Tấn Thức','Vũ Thị Ngọc Anh','Nguyễn Thái Bình', 'Trần Nguyễn Như Lộc','Vũ Quang Việt','Đặng Phùng Đoan Thục','Nguyễn Hồng Nhung','Trương Thành Hưng','Trương Thị Minh Thư','Võ Yến Vy','Đỗ Hoàng Phương Thảo','Hà Thu Thảo','Hoàng Kim Anh'];
const validNames2 = ['Hồ Lê Đoan Thục','Donthut dth s1tg','vk PCY','donthut','eiridy','morning','nyp','vk Sakura'];
function checkName() {
    const nameInput = document.getElementById('nameInput').value.trim(); // Trim whitespace

    if (validNames1.includes(nameInput)) {
        localStorage.setItem('guestName', nameInput);
        window.location.href = 'thankyou1.html';
    } else if (validNames2.includes(nameInput)) {
        localStorage.setItem('guestName', nameInput);
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
document.addEventListener('DOMContentLoaded', (event) => {
    const guestName = localStorage.getItem('guestName');
    if (guestName) {
        document.getElementById('guestName').textContent = guestName;
    }
});
