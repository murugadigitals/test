// setTimeotut(() => {
//   var test = [];
//   for (let i = 1; i <= 100; i++) {
//     var li = document.createElement("li");
//     var option = document.createElement("option");
//     var select = document.createElement("select");
//     li.innerHTML = i;
//     test.push("Sasi Rekha Idupulapati : " + i);
//     document.querySelector("ul").appendChild(li);

//     option.innerHTML = "Sasi Rekha Idupulapati " + i;
//     document.querySelector("select").appendChild(option);

//     document.getElementById("selectContainer").appendChild(select);
//   }
//   console.log(test);
// }, 5000);

var btnName = document.querySelector("button");
setTimeout(() => {
  btnName.innerHTML = "Sasi Rekha Idupulapati";
  btnName.classList.add("btn", "bg-success", "text-white");
  btnName.id = "btnName";
  btnName.addEventListener("click", () => {
    alert("Button Clicked");
  });
}, 2000);
