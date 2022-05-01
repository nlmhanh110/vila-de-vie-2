var code = document.getElementById("code"),
    time = document.getElementById("time"),
    checkin = document.getElementById("checkin"),
    checkout = document.getElementById("checkout"),
    quantityRoom = document.getElementById("quantityRoom"),
    quantityPeople = document.getElementById("quantityPeople"),
    total = document.getElementById("total"),
    fullName = document.getElementById("Fullname"),
    phonenumber = document.getElementById("phonenumber"),
    email = document.getElementById("email"),
    address = document.getElementById("address"),
    paymentmethod = document.getElementById("paymentmethod"),
    bookstatus = document.getElementById("bookstatus"),
    discount = document.getElementById("voucher"),
    formFeedBack = document.getElementById("formFeedBack");

//Khai báo biến dùng để định dạng tiền tệ
var formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'VND',
})

var bookingInfo = JSON.parse(sessionStorage.getItem("bookingInfo"))
var urlparams = new URLSearchParams(location.search);
var findBookingInfoCode = Number(urlparams.get("bookingId")),
    bookingInfoPosition;
for (let i = 0; i < bookingInfo.length; i++) {
    if (bookingInfo[i].id == findBookingInfoCode) {
        bookingInfoPosition = i;
        code.value = findBookingInfoCode;
        time.value = new Date(bookingInfo[i].bookTime).toLocaleString();
        checkin.value = new Date(bookingInfo[i].timeInfo[0]).toLocaleDateString();
        checkout.value = new Date(bookingInfo[i].timeInfo[1]).toLocaleDateString();
        quantityRoom.value = bookingInfo[i].roomInfo.length;
        quantityPeople.value = bookingInfo[i].maxPeople;
        total.value = formatter.format(bookingInfo[i].totalAmount);
        fullName.value = bookingInfo[i].lastname + " " + bookingInfo[i].firstname;
        phonenumber.value = bookingInfo[i].phone;
        email.value = bookingInfo[i].email;
        address.value = bookingInfo[i].address;
        paymentmethod.value = bookingInfo[i].paymentMethod;
        discount.value = bookingInfo[i].discount;
        if(bookingInfo[i].bookingStatus == "paid"){
            bookstatus.value = "Đã thanh toán"
        }
        else{
            bookstatus.value = "Đã hủy"
        }

        //Thêm thông tin phòng vào bảng thông tin đặt phòng
        var rooms__container = document.getElementsByClassName("rooms__container")[0];
        var html = "";
        for (let j = 0; j < bookingInfo[i].roomInfo.length; j++) {
            html += `<div class="detail">
            <label class="form__label" for="room${j + 1}">Phòng ${j + 1}</label>
            <output class="form__output" type="text" name="room${j + 1}" id="room${j + 1}">${bookingInfo[i].roomInfo[j].roomTitle}</output></div>
            <div class="detail">
            <label class="form__label" for="price${j + 1}">Giá phòng</label>
            <output class="form__output" type="text" name="price${j + 1}" id="price${j + 1}">`
                + formatter.format(bookingInfo[i].roomInfo[j].roomPrice).toString() + "</output></div>"
        }
        rooms__container.innerHTML = html + rooms__container.innerHTML;
        break;
    }
}

formFeedBack.addEventListener('submit', function (event) {
    event.preventDefault();
    bookingInfo[bookingInfoPosition].feedback = document.getElementById("fb").value;sessionStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
    document.getElementsByClassName("result--Fb")[0].innerText = "Cảm ơn bạn đã phản hồi."
    setTimeout(function(){
        $("#formFeedBack").modal("hide");;
    },3000);
    
})
console.log(bookingInfo)


function bookingCancel(){
    // To calculate the time difference of two dates
    let Difference_In_Time = new Date(bookingInfo[bookingInfoPosition].timeInfo[0]).getTime() - new Date().getTime();

    // To calculate the no. of days between two dates
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days < 1){
        document.getElementById("checkCancel").innerHTML = 'Hủy phòng trong vòng 24h trước ngày checkin sẽ không được hoàn tiền (<a class="file__item" href="Policy.html" target="_blank">Chính sách hủy phòng</a>). Bạn vẫn muốn tiếp tục ?'
    }
    else{
        document.getElementById("checkCancel").innerHTML ='Quý khách sẽ được hoàn tiền theo <a class="file__item" href="Policy.html" target="_blank">Chính sách hủy phòng</a> của chúng tôi. Bạn vẫn muốn tiếp tục ?'
    }
    $("#popupCancel").modal("hide");
}

function cancelYes(){
    bookingInfo[bookingInfoPosition].bookingStatus = "canceled";
    bookstatus.value = "Đã hủy";    
    document.getElementsByClassName("result--cancel")[0].innerText = "Bạn đã hủy phòng thành công."
    setTimeout(function(){
        $("#popupCancel").modal("hide");
    },3000); 
    sessionStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
}

function cancelNo(){
    document.getElementsByClassName("result--cancel")[0].innerText = "Bạn đã hủy phòng thất bại."
    setTimeout(function(){
        $("#popupCancel").modal("hide");
    },3000);
}