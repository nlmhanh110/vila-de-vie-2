var form = document.getElementById("form__career"),
    lastname = document.getElementById("LastName"),
    firstname = document.getElementById("FirstName"),
    email = document.getElementById("Email"),
    phone = document.getElementById("Phone"),
    position = document.getElementById("Position"),
    resume = document.getElementById("CV"),
    coverLetter = document.getElementById("CL"),
    linkedIn = document.getElementById("LinkedIn"),
    method = document.getElementById("method"),
    data = document.getElementById("data"),
    result = document.getElementById("result");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (typeof (Storage) !== "undefined") {
        let newApplication = {
            lastname: lastname.value,
            firstname: firstname.value,
            phone: phone.value,
            email: email.value,
            position: position.value,
            resume:resume.value,
            coverLetter:coverLetter.value,
            method:method.value,
            data:data.value
        }
        let existing = sessionStorage.getItem("applicationInfo");
        existing = existing ? JSON.parse(existing) : [];
        console.log(existing);
        existing.push(newApplication);
        sessionStorage.setItem("applicationInfo", JSON.stringify(existing));
        console.log(sessionStorage.getItem("applicationInfo"));
        result.innerText = "Bạn đã gửi đơn đăng ký thành công. Chúng tôi sẽ sớm liên hệ đến bạn!"
        lastname.value = "";
        firstname.value = "";
        phone.value = "";
        email.value = "";
        position.value ="";
        resume.value ="";
        coverLetter.value="";
        method.value ="";
        data.value = ""

    } else {
        // Sorry! No Web Storage support..
        alert("Rất tiếc! Trình duyệt của bạn không hỗ trợ Web Storage")
    }
})
