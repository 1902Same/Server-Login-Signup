function SignUp() {
    var user = {
        name: document.getElementById('sname').value,
        fathername: document.getElementById('sfname').value,
        email: document.getElementById('semail').value,
        password: document.getElementById('spassword').value
    };

    document.getElementById('sname').value = "";
    document.getElementById('sfname').value = "";
    document.getElementById('semail').value = "";
    document.getElementById('spassword').value = "";

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/signup';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));
    Http.onreadystatechange = (e) => {
        document.getElementById("result").innerText = Http.responseText;
    }

    return false;
}

function Login() {

    let Lemail = document.getElementById("lemail").value;
    let LPassword = document.getElementById("lpassword").value;

    const Http = new XMLHttpRequest();
    const url = 'http://localhost:3000/login';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");

    Http.send(JSON.stringify({
        email: Lemail,
        password: LPassword
    }));
    document.getElementById('lemail').value = "";
    document.getElementById('lpassword').value = "";
    Http.onreadystatechange = (e) => {

        let JSONres = JSON.parse(Http.responseText);

        document.getElementById("name").innerText = "Name : " + JSONres.name;
        document.getElementById("fname").innerText = "Father Name : " + JSONres.fathername;
        document.getElementById("email").innerText = "Email : " + JSONres.email;
    }

    return false;
}