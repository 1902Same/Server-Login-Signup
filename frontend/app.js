// const url = 'http://localhost:5000';
const url = 'http://localhost:5000';


function SignUp() {
    var user = {
        name: document.getElementById('sname').value,
        fathername: document.getElementById('sfname').value,
        email: document.getElementById('semail').value,
        password: document.getElementById('spassword').value
    };

    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(user));
    Http.onreadystatechange = (e) => {

        if (Http.readyState === 4) {
            let JSONres = JSON.parse(Http.responseText);
            if (JSONres.status === 200) {

                document.getElementById('sname').value = "";
                document.getElementById('sfname').value = "";
                document.getElementById('semail').value = "";
                document.getElementById('spassword').value = "";

                alert(JSONres.message);
                window.location.href = "./login.html"
            }
            else {
                document.getElementById("sresult").innerText = JSONres.message;
            }
        }
    }
    return false;
}

function Login() {

    let Lemail = document.getElementById("lemail").value;
    let LPassword = document.getElementById("lpassword").value;

    const Http = new XMLHttpRequest();

    Http.open("POST", url + "/login");
    Http.setRequestHeader("Content-Type", "application/json");

    Http.send(JSON.stringify({
        email: Lemail,
        password: LPassword
    }));
    document.getElementById('lemail').value = "";
    document.getElementById('lpassword').value = "";
    Http.onreadystatechange = (e) => {

        let JSONres = JSON.parse(Http.responseText);
        if (JSONres.status === 200) {

            document.getElementById("lresult").innerText = JSONres.message;

            document.getElementById("name").innerText = "Name : " + JSONres.alluser.name;
            document.getElementById("fname").innerText = "Father Name : " + JSONres.alluser.fathername;
            document.getElementById("email").innerText = "Email : " + JSONres.alluser.email;
        }
        else if (JSONres.status === 401) {

            document.getElementById("lresult").innerText = JSONres.message;

            document.getElementById("name").innerText = "";
            document.getElementById("fname").innerText = "";
            document.getElementById("email").innerText = "";
        }
    }

    return false;
}