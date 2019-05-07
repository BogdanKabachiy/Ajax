        document.getElementById("submit").addEventListener("click", function (e) {
             e.preventDefault();
            var Form = document.forms["Form1"];
            var vvodik= Form.elements["inputik"].value;
            var user = JSON.stringify({vvodik: vvodik});
            var request = new XMLHttpRequest();
             request.open("POST", "/user", true);   
             request.setRequestHeader("Content-Type", "application/json");
             request.addEventListener("load", function () {
                 var receivedUser = JSON.parse(request.response);
                 result.append(receivedUser.vvodik);   // смотрим ответ сервера
             });
             request.send(user);
         });