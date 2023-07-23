


document.addEventListener("DOMContentLoaded", function() {
  let fullname = prompt("Lütfen adınızı giriniz:");
  let greeting = document.querySelector("#greeting");
  greeting.innerHTML = `${greeting.innerHTML}<small style="color:red">${fullname}</small>`;
});

document.addEventListener("DOMContentLoaded",function(){
  
  let last=document.querySelector("ul#list>li:last-child");
  console.log(last);
  let first=document.querySelector("ul#list>li:last-child");
  document.querySelector("ul#list>li:first-child").innerText="degistiii";
  let ulDom=document.querySelector("ul#list");
  let liDom=document.createElement('li')
  liDom.innerHTML="kendi oluşturduğumuz öge"
  ulDom.append(liDom);//en sona ekler
  ulDom.prepend(liDom);//en başa ekler

});