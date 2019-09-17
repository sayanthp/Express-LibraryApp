function validateEmail(email) {
    var re_mail = /^[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*$/;
    return re_mail.test(email);
}

function validatePhone(phone) {
    var re_phone = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/;
    return re_phone.test(phone);
}

function check_name(name) {

    var message_name = "";
    if (name.value === "") {
        name.style.border = '1px solid red';
        message_name = "Please enter your name !";
        document.getElementById('message_name').innerHTML = message_name;
        return 0;
    } else if (name.value.length < 7) {
        name.style.border = '1px solid red';
        message_name = "Please enter your full name !";
        document.getElementById('message_name').innerHTML = message_name;
        return 0;
    } else {
        name.style.border = '1px solid green';
        message_name = "";
        document.getElementById('message_name').innerHTML = message_name;
        return true;
    }
}

function check_email(mail) {
    var message_mail = "";
    if (mail.value === "") {
        mail.style.border = '1px solid red';
        message_mail = "Please enter your Email !";
        document.getElementById('message_mail').innerHTML = message_mail;
        return 0;
    } else if (!validateEmail(mail.value)) {
        mail.style.border = '1px solid red';
        message_mail = "Email invalid !";
        document.getElementById('message_mail').innerHTML = message_mail;
        return 0;
    } else {
        mail.style.border = '1px solid green';
        message_mail = "";
        document.getElementById('message_mail').innerHTML = message_mail;
        return 1;
    }
}

function check_address(address) {
    var message_address = "";
    if (address.value === "") {
        address.style.border = '1px solid red';
        message_address = "Please enter your address !";
        document.getElementById('message_address').innerHTML = message_address;
        return 0;
    } else {
        address.style.border = '1px solid green';
        message_address = "";
        document.getElementById('message_address').innerHTML = message_address;
        return 1;
    }
}

function check_phone(phone) {
    var message_phone = "";
    if (phone.value === "") {
        phone.style.border = '1px solid red';
        message_phone = "Please enter your phone number !";
        document.getElementById('message_phone').innerHTML = message_phone;
        return 0;
    } else if (!validatePhone(phone.value)) {
        phone.style.border = '1px solid red';
        message_phone = "Number phone invalid !";
        document.getElementById('message_phone').innerHTML = message_phone;
        return 0;
    } else {
        phone.style.border = '1px solid green';
        message_phone = "";
        document.getElementById('message_phone').innerHTML = message_phone;
        return 1;
    }
}

function check_password(password) {
    var message_password = "";
    if (password.value === "") {
        password.style.border = '1px solid red';
        message_password = "Please enter your password !";
        document.getElementById('message_password').innerHTML = message_password;
        return 0;
    } // else if (password.value.length < 8) {
    //     password.style.border = '1px solid red';
    //     message_password = "Passwords must be at least 8 characters long";
    //     document.getElementById('message_password').innerHTML = message_password;
    //     return 0;
    // } 
    else {
        password.style.border = '1px solid green';
        message_password = "";
        document.getElementById('message_password').innerHTML = message_password;
        return 1;
    }
}

function check_conf_password(conf_password, password) {
    var message_conf_password = "";
    if (conf_password.value === "") {
        conf_password.style.border = '1px solid red';
        message_conf_password = "Please confirm your password !";
        document.getElementById('message_conf_password').innerHTML = message_conf_password;
        return 0;
    } else if (conf_password.value != password.value) {
        conf_password.style.border = '1px solid red';
        message_conf_password = "Password incorrect !";
        document.getElementById('message_conf_password').innerHTML = message_conf_password;
        return 0;
    } else {
        conf_password.style.border = '1px solid green';
        message_conf_password = "";
        document.getElementById('message_conf_password').innerHTML = message_conf_password;
        return 1;
    }
}

function check() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    var password = document.getElementById('password');
    var conf_password = document.getElementById('conf_password');
    check_name(name);
    if (check_name(name) == 0) {
        return;
    }
    check_email(email);
    if (check_email(email) == 0) {
        return;
    }
    check_address(address);
    if (check_address(address) == 0) {
        return;
    }
    check_phone(phone);
    if (check_phone(phone) == 0) {
        return;
    }
    check_password(password);
    if (check_password(password) == 0) {
        return;
    }
    check_conf_password(conf_password, password);
    if (check_conf_password(conf_password, password) == 0) {
        return;
    }
    window.location.reload(); //Refresh page
}

function checkLogin() {
    var name = document.getElementById('name');
    var password = document.getElementById('password');
    check_name(name);
    if (check_name(name) == 0) {
        return;
    }
    check_password(password);
    if (check_password(password) == 0) {
        return;
    }
    window.location.reload();
}


function addBook() {
    var Bname = document.getElementById('name');
    var genre = document.getElementById("genre");
    var Aname = document.getElementById("aname");
    var Bio = document.getElementById("Bio");
    var img = document.getElementById("img");
    var lang = document.getElementById("lang");
    if (Bname.value == "") {
        Bname.style.border = '1px solid red';
        message_name = "Please enter the book name !";
        document.getElementById('message_name').innerHTML = message_name;
        return 0;
    } else if (genre.value == "") {
        genre.style.border = '1px solid red';
        message_name = "Please enter the genre of book !";
        document.getElementById('message_genre').innerHTML = message_name;
        return 0;
    } else if (Aname.value == "") {
        Aname.style.border = '1px solid red';
        message_name = "Please enter Author's name !";
        document.getElementById('message_Aname').innerHTML = message_name;
        return 0;
    } else if (Bio.value == "") {
        Bio.style.border = '1px solid red';
        message_name = "Please enter bio of Author!";
        document.getElementById('message_Bio').innerHTML = message_name;
        return 0;
    }
    // } else if (img.value == "") {
    //     img.style.border = '1px solid red';
    //     message_name = "Please upload the photo !";
    //     document.getElementById('message_img').innerHTML = message_name;
    //     return 0;
    // } 
    else if (lang.value == "") {
        lang.style.border = '1px solid red';
        message_name = "Please enter the langauage!";
        document.getElementById('message_lang').innerHTML = message_name;
        return 0;
    }
    alert("Thanks for your contribution!!!");
    window.location.reload();
}



function previewFile() {
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.addEventListener("load", function() {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}


function addAuthor() {
    window.location.reload();
}