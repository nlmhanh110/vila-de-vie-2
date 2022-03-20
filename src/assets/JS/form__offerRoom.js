//load data về các loại phòng từ file json
var roomList = document.getElementById("roomList");
var roomInfo, html = "";
var p; //dùng để đổi format của số tiền
fetch("../Data/rooms.json")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("HTTP error, status " + response.status)
        }
        return response.json();
    })
    .then(function (data) {
        roomInfo = data;
        for (let each of data) {
            p = each.price.toLocaleString();
            html += '<div class="content__container content__container--type2">'
                + `<div class="content__left--2"><img src= ${each.img} alt="${each.title}"></div>`
                + '<div class="content__right--2 content__title--type1">'
                + `<h1><a href= "RoomDetails.html?roomId=${each.id}" target="_blank"> ${each.title}</a></h1>`
                + `<p> ${each.description1}</p>
               <p>${each.description2}</p>
               <p>${each.description3}</p>
               <h3>${p} VND/ ĐÊM</h3>`
                + `<div class="button__container">
                    <button type="button" class="button--type1" onclick="changeRoomType(${each.id})">
                        Chọn phòng
                    </button>
                </div></div></div>`
        }
        roomList.innerHTML = html;
    })
    .catch(function (error) {
        alert("Error:" + error.message);
    })


//button chỉnh sửa
function editRoom() {
    sessionStorage.clear();
    window.history.back();
}

//Lấy thông tin từ form của Bookroom.html
function getUrlParams2() {
    const params = new URLSearchParams(window.location.search);
    return params;
}
var checkin = getUrlParams2().get("checkin");
var checkout = getUrlParams2().get("checkout");
var room = getUrlParams2().get("room");

//hiển thị thông tin ngày
document.getElementById("arrive").innerText = new Date(checkin).toLocaleDateString();
document.getElementById("depart").innerText = new Date(checkout).toLocaleDateString();

var rooms__container = document.getElementsByClassName("rooms__container")[0];
var roomDetails = []; //lưu thông tin phòng được chọn để chuyển qa bên Reservation

//chèn các dòng chọn phòng
for (let i = 0; i < Number(room); i++) {
    var roomItem = document.createElement('button');
    roomItem.classList.add('button--type1', 'room');
    roomItem.innerHTML = `PHÒNG ${i + 1}: CHỌN PHÒNG`
    roomItem.onclick = function () { chooseRoom(i); }
    rooms__container.append(roomItem);
    roomDetails.push({ roomNo: i, roomId: 0, roomTitle: "", roomPrice: 0, maxPeople:0});
}


var rooms = document.getElementsByClassName('room');
var changeRoomNumber;

//function dùng để đổi màu khi người dùng chọn phòng khác để chỉnh
function chooseRoom(i) {

    for (let j = 0; j < rooms.length; j++) {
        rooms[j].style.color = "var(--myColor1)";
        rooms[j].style.backgroundColor = "white"
    }
    changeRoomNumber = i;
    rooms[changeRoomNumber].style.color = "white";
    rooms[changeRoomNumber].style.backgroundColor = "var(--myColor1)";
}

//function dùng để apply thông tin phòng
function changeRoomType(id) {
    for (let each of roomInfo) {
        if (each.id == id) {
            roomDetails[changeRoomNumber].roomId = each.id;
            roomDetails[changeRoomNumber].roomTitle = each.title;
            roomDetails[changeRoomNumber].roomPrice = each.price;
            roomDetails[changeRoomNumber].maxPeople = each.personNumber;
            rooms[changeRoomNumber].innerHTML = `PHÒNG ${changeRoomNumber + 1}: ${each.title} `;
            document.documentElement.scrollTop = 0;
            console.log(roomDetails);
            break;
        }
    }

}

// function changeRoomType(name, price) {
//     roomDetails[changeRoomNumber].roomType = name;
//     roomDetails[changeRoomNumber].roomPrice = price;
//     rooms[changeRoomNumber].innerHTML = `PHÒNG ${ changeRoomNumber + 1 }: ${ name } `;
//     document.documentElement.scrollTop = 0;
// }


//function dùng để check lại trước khi tiến hành đặt phòng
var reserve = document.getElementById('reserve');
reserve.addEventListener("click", function () {
    for (let j = 0; j < roomDetails.length; j++) {
        if (roomDetails[j].roomTitle == "") {
            alert(`Vui lòng chọn loại phòng cho tất cả ${roomDetails.length} phòng`);
            return;
        }
    }
    sessionStorage.setItem("roomDetails", JSON.stringify(roomDetails));
    sessionStorage.setItem("timeDetails", JSON.stringify([checkin, checkout]));
    window.location.assign("Reservation.html");
})

//function dùng để filter phòng
var quantity = document.getElementById("quantity--filter"),
    type = document.getElementById("type--filter");
function roomFilter() {
    let filteredRoom1, filteredRoom2;
    console.log()
    if (type.value == "premium") {
        filteredRoom1 = roomInfo.filter(checkPremiumType);
        if (quantity.value != "all") {
            filteredRoom2 = filteredRoom1.filter(checkQuantity);
        }
        else {
            filteredRoom2 = filteredRoom1;
        }
    }
    else if (type.value == "normal") {
        filteredRoom1 = roomInfo.filter(checkNormalType);
        if (quantity.value != " ") {
            filteredRoom2 = filteredRoom1.filter(checkQuantity);
        }
        else {
            filteredRoom2 = filteredRoom1;
        }
    }
    else {
        if (quantity.value != "all") {
            filteredRoom2 = roomInfo.filter(checkQuantity);
        }
        else {
            filteredRoom2 = roomInfo;
        }
    }
    console.log(filteredRoom2);
    html = "";
    roomList.innerHTML = "";
    for (let each of filteredRoom2) {
        p = each.price.toLocaleString();
        html += '<div class="content__container content__container--type2">'
            + `<div class="content__left--2"><img src= ${each.img} alt="${each.title}"></div>`
            + '<div class="content__right--2 content__title--type1">'
            + `<h1><a href= "RoomDetails.html?roomId=${each.id}" target="_blank"> ${each.title}</a></h1>`
            + `<p> ${each.description1}</p>
           <p>${each.description2}</p>
           <p>${each.description3}</p>
           <h3>${p} VND/ ĐÊM</h3>`
            + `<div class="button__container">
                <button type="button" class="button--type1" onclick="changeRoomType(${each.id})">
                    Chọn phòng
                </button>
            </div></div></div>`
            console.log(html);
        roomList.innerHTML = html;
    }
}
function checkNormalType(room) {
    return room.id.toString().startsWith("1")
}
function checkPremiumType(room) {
    return room.id.toString().startsWith("2")
}
function checkQuantity(room) {
    return room.personNumber == Number(quantity.value)
}

//Load thông tin lại để người dùng chỉnh nếu họ từ trang reservation nhấn chỉnh sửa
if (sessionStorage.getItem("roomDetails") != null) {
    roomDetails = JSON.parse(sessionStorage.getItem("roomDetails"));
    for (let j = 0; j < rooms.length; j++) {
        rooms[j].innerHTML = `PHÒNG ${j + 1}: ${roomDetails[j].roomTitle} `;
    }
}
