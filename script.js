function addStudent(){

let name=document.getElementById("name").value;

if(name==""){
alert("Enter student name");
return;
}

let table=document.getElementById("studentList");

let row=table.insertRow();

let cell1=row.insertCell(0);
let cell2=row.insertCell(1);

cell1.innerHTML=name;
cell2.innerHTML='<input type="checkbox">';

document.getElementById("name").value="";
}