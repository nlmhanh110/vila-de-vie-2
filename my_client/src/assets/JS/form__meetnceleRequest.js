var form = document.getElementsByClassName("form--request")[0],
    lastname = document.getElementById("LastName"),
    firstname = document.getElementById("FirstName"),
    phone = document.getElementById("Phone"),
    email = document.getElementById("Email"),
    address = document.getElementById("Address"),
    eventType = document.getElementById("Event"),
    amount = document.getElementById("Amount"),
    roomRequired = document.getElementById("RequestforRoom"),
    start = document.getElementById("StartDate"),
    end = document.getElementById("EndDate"),
    note = document.getElementById("Note"),
    result = document.getElementById("result");

form.addEventListener('submit', function (event) {
    event.preventDefault()
    let today = new Date();
    let startdate = new Date(start.value),
        enddate = new Date(end.value);

    if (today.getTime() > startdate.getTime() || today.getTime() > enddate.getTime()) {
        document.getElementById("result").innerText = "Vui lòng chọn ngày lớn hơn ngày hiện tại";
        return;
    }
    if (startdate.getTime() > enddate.getTime()) {
        document.getElementById("result").innerText = "Vui lòng chọn ngày bắt đầu nhỏ hơn ngày kết thúc";
        return;
    }

    // Store
    if (typeof (Storage) !== "undefined") {
        let requestInfo = {
            lastname: lastname.value,
            firstname: firstname.value,
            phone: phone.value,
            email: email.value,
            address: address.value,
            eventType: eventType.value,
            amount: amount.value,
            roomRequired: roomRequired.value,
            start: start.value,
            end: end.value,
            note: note.value
        }
        let existing = sessionStorage.getItem("requestInfo");
        existing = existing ? JSON.parse(existing) : [];
        console.log(existing);
        existing.push(requestInfo);
        sessionStorage.setItem("requestInfo", JSON.stringify(existing));
        console.log(sessionStorage.getItem("requestInfo"));
        result.innerText = "Bạn đã gửi yêu cầu thành công. Chúng tôi sẽ sớm liên hệ đến bạn!"
        lastname.value = "";
        firstname.value = "";
        phone.value = "";
        email.value = "";
        address.value = "";
        eventType.value = "";
        amount.value = "";
        start.value = "";
        end.value = "";
        note.value = "";
    } else {
        // Sorry! No Web Storage support..
        alert("Rất tiếc! Trình duyệt của bạn không hỗ trợ Web Storage")
    }


})
