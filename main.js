

function login()
{
  name_1 = document.getElementById("username_1").value;
  name_2 = document.getElementById("username_2").value;
  localStorage.setItem("name_1" , name_1);
  localStorage.setItem("name_2" , name_2);
  diplay_name_1 = localStorage.getItem("name_1");
  diplay_name_2 = localStorage.getItem("name_2");
  document.getElementById("name_1").innerHTML=diplay_name_1;
  window.location="screen2.html";
}
