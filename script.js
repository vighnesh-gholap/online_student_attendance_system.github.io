let students = JSON.parse(localStorage.getItem("students")) || [];

function saveData(){
localStorage.setItem("students", JSON.stringify(students));
}

function addStudent(){

let name = document.getElementById("name").value;

if(name==""){
alert("Enter student name");
return;
}

let student = {
name:name,
present:0,
absent:0
};

students.push(student);
saveData();
displayStudents();

document.getElementById("name").value="";
}

function markAttendance(index,type){

if(type=="present"){
students[index].present++;
}

if(type=="absent"){
students[index].absent++;
}

saveData();
displayStudents();

}

function displayStudents(){

let table="";

students.forEach((s,index)=>{

let total = s.present + s.absent;
let percent = total==0 ? 0 : ((s.present/total)*100).toFixed(1);

table+=`
<tr>
<td>${s.name}</td>

<td>
<button onclick="markAttendance(${index},'present')">Present</button>
</td>

<td>
<button onclick="markAttendance(${index},'absent')">Absent</button>
</td>

<td>${percent}%</td>

</tr>
`;

});

document.getElementById("studentList").innerHTML = table;

}

displayStudents();

function showTab(tab){

document.getElementById("attendance").style.display="none";
document.getElementById("materials").style.display="none";

document.getElementById(tab).style.display="block";

}