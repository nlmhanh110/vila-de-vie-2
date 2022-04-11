var btn = document.getElementById("btn"),
    fullname = document.getElementById("Fullname"),
    phone = document.getElementById("Phonenumber"),
    email = document.getElementById("Email"),
    comment = document.getElementById("Comment"),
    result = document.getElementById("result");
btn.addEventListener('click', function () {
    if (typeof (Storage) !== "undefined") {
        let contactInfo = {
            fullname: String(fullname.value),
            phone: String(phone.value),
            email: String(email.value),
            comment: String(comment.value)
        }
        // Store
        let existing = sessionStorage.getItem("contactInfo");
        existing = existing ? JSON.parse(existing) : [];
        existing.push(contactInfo);
        sessionStorage.setItem("contactInfo", JSON.stringify(existing));
        result.innerText = "Bạn đã gửi lời nhắn thành công. Chúng tôi sẽ sớm liên hệ đến bạn!"
        fullname.value = "";
        phone.value = "";
        email.value = "";
        comment.value = "";
    }
    else {
        // Sorry! No Web Storage support..
        alert("Rất tiếc! Trình duyệt của bạn không hỗ trợ Web Storage")
    }

})
