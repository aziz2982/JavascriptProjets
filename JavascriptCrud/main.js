function validateform(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if(name == ""){
        alert("Ismimni Kiriting")
        return false
    }
    if(age == ""){
        alert("Yoshingizni Kiriting")
        return false
    }
    if(address == ""){
        alert("Manzilingizni Kiriting")
        return false
    }
    if(email == ""){
        alert("Email Kiriting")
        return false
    }else if(!email.includes("@")){
        alert("Invalid Email")
        return false
    }
    return true

}


function showData(){
    var peopleList;
    if(localStorage.getItem("peopleList")== null){
        peopleList = []
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    var html = ""
    peopleList.forEach(function (element, index){
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += '<td> <button class="btns btnD" onclick="deleteDate('+index+')">Delete</button><button class="btns btnE" onclick="updateDate('+index+')">Edit</button>';
        html += "</tr>"
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData();

function AddData(){
    if(validateform() == true){
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;


        var peopleList;
        if(localStorage.getItem("peopleList")== null){
            peopleList = []
        }
        else{
            peopleList = JSON.parse(localStorage.getItem("peopleList"))
        }

        peopleList.push({
            name : name,
            age : age,
            address : address,
            email : email
        })

        localStorage.setItem("peopleList", JSON.stringify
        (peopleList));
        showData();
        var name = document.getElementById("name").value = "";
        var age = document.getElementById("age").value = "";
        var address = document.getElementById("address").value = "";
        var email = document.getElementById("email").value= "";
    } 
}

// delete

function deleteDate(index){
    var peopleList;
    if(localStorage.getItem("peopleList")== null){
        peopleList = []
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    peopleList.splice(index, 1);
    localStorage.setItem("peopleList", JSON.stringify
    (peopleList));
    showData()
}


// upDate

function updateDate(index){
    document.getElementById("Submit").style.display = "none";
    document.getElementById("UpDate").style.display = "block";
    var peopleList;
    if(localStorage.getItem("peopleList")== null){
        peopleList = []
    }
    else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"))
    }

    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("age").value = peopleList[index].age;
    document.getElementById("address").value = peopleList[index].address;
    document.getElementById("email").value = peopleList[index].email;

    document.getElementById("UpDate").onclick = function(){
        if(validateform() == true){
            peopleList[index].name = document.getElementById("name").value;
            peopleList[index].age = document.getElementById("age").value;
            peopleList[index].address = document.getElementById("address").value;
            peopleList[index].email = document.getElementById("email").value;

            localStorage.setItem("peopleList", JSON.stringify
            (peopleList));

            showData()

            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("address").value = "";
            document.getElementById("email").value = "";
            document.getElementById("Submit").style.display = "block";
            document.getElementById("UpDate").style.display = "none";
        }
    }
}