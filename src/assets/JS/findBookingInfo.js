var form= document.getElementsByClassName("form__viewinfo")[0],
    code = document.getElementById("code"),
    result = document.getElementById("result");
bookingInfo = JSON.parse(sessionStorage.getItem("bookingInfo"));
form.addEventListener('submit', function(event){
    event.preventDefault()
    let isNotExisted = true;
    for(let i=0; i<bookingInfo.length;i++){
        if(bookingInfo[i].id == code.value){
            isNotExisted =false;
            window.location.assign(`BookingInfo.html?bookingId=${code.value}`)
            break;
        }   
    }
    if(isNotExisted){
        result.innerText = "Không tìm thấy dữ liệu";
    }
})
console.log(bookingInfo);