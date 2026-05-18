const office = [
  "Akkurthi S.O",
  "AVILALA SO",
  "Bhakarapet S.O",
  "Buchinaidu Kandriga S.O",
  "Chandragiri H.O",
  "Chinnagottigallu S.O",
  "Damalacheruvu S.O",
  "Ekambarakuppam S.O",
  "Gyarampalle kothapalle S.O",
  "Kalakada S.O",
  "Kallur S.O Chittoor",
  "Karvetinagar S.O",
  "Kattakindavenkatapuram S.O",
  "Kovanur S.O",
  "Mangalam S.O",
  "Mangalampet S.O",
  "Nagalapuram S.O Chittoor",
  "Nagari S.O",
  "Narasingapuram S.O Chittoor",
  "Narayanavaram S.O",
  "Nindra S.O",
  "Pachikapallam S.O",
  "Pakala S.O",
  "Pallam S.O",
  "Panagal S.O",
  "Pannur S.O Chittoor",
  "Papanaidupet S.O",
  "Peddakannali S.O",
  "Perumallapalle S.O",
  "Piler S.O",
  "Pissatur S.O",
  "Puttur S.O",
  "Renigunta S.O",
  "Rompicherla S.O Chittoor",
  "Satyavedu S.O",
  "Settipalli S.O",
  "Sri Bommarajapuram S.O",
  "Sricity S.E.Z SO",
  "Srikalahasti H.O",
  "Thondamanadu S.O",
  "Tiruchanoor S.O",
  "Tirumala S.O Chittoor",
  "Vadamalpet S.O",
  "Varadaiahpalem S.O",
  "Vepagunta S.O Chittoor",
  "Yerpedu S.O",
];

// console.log(office.length);

// office.includes("Chandragiri H.O") ? console.log("Yes") : console.log("No");

// console.log(office.indexOf("Sodam S.O"));

// console.log(office.slice(1, 3));

// const result = office.slice(1, 3);
// console.log(result);

// const newArray = office.splice(46, 0, "Sri Hari M", "Sasi Rekha Idupulapati");

// office.splice(46, 2);
// console.log(office);

// office.forEach((value) => console.log(value));

// const result = office.map((value) => value.toUpperCase());

office.push("Chittoor H.O", "Madanapalle H.O", "Proddatur H.O");

// const result = office.filter(
//   (value) => value.includes("H.O") && value.startsWith("P"),
// );

// console.log(result);

// const result = office.find((value) => value == "Proddatur H.O");

// console.log(office.at(42));

// console.log(office.length);

// var searchIndex = office.findIndex((value) => {
//   //   return value === "Proddatur H.O";
//   return value === "Chittoor H.O";
// });
// console.log(searchIndex);

// var searchItem = office.every((value) => {
//   return value.endsWith("H.O");
// });
// console.log(searchItem);

// console.log(office.sort().reverse());

// console.log(office.join("              "));

const newOffices = [...office];
console.log(newOffices);
