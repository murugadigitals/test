async function getUsers() {
  try {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
const newArray = [];
const kadapaArray = [];
const targetArray = [];
let first = [
  "Baireddipalle S.O",
  "Bangarupalem S.O",
  "Beerangi Kothakota S.O",
  "Burakayalakota S.O",
  "Chembakur S.O",
  "Cherlopalle S.O",
  "Chinnatippasamudram S.O",
  "Chintaparthi S.O",
  "Chowdepalle S.O",
  "Dravidian University S.O",
  "Gurramkonda S.O",
  "Kalikiri S.O",
  "Kolamasanapalle S.O",
  "Kuppam S.O",
  "Kurabalakota S.O",
  "Madanapalle Bazar S.O",
  "Madanapalle H.O",
  "Mahal S.O Chittoor",
  "Medikurthi S.O",
  "Mogili Venkatagiri S.O",
  "Mulakalacheruvu R.S. S.O",
  "Nimmanapalle S.O",
  "Palamaner S.O",
  "Peddatippasamudram S.O",
  "Punganur S.O",
  "Rallabudugur S.O",
  "Ramakuppam S.O",
  "Rishivalley S.O",
  "Royalpet S.O",
  "Sodam S.O",
  "Tarigonda S.O",
  "Thamballapalle S.O",
  "Vayalpad S.O",
  "Venkatagirikota S.O",
];
async function allClosings() {
  try {
    const response = await fetch("http://localhost:3001/allclosings");
    const data = await response.json();
    // console.log(data);

    // newArray.length = 0;

    // data.forEach((value) => newArray.push(value));
    // newArray = [...data["Bag Number"]];
    // console.log(newArray);
    data.forEach((item) => {
      if (!first.includes(item["To Office Name"])) {
        alert(`Office ${item["To Office Name"]} is not received`);
      }
    });

    targetArray.length = 0;
    data.forEach((item) => {
      // CHECK BAG NUMBER
      if (!newArray.includes(item["Bag Number"])) {
        targetArray.push(item);
      }
    });
    console.log(targetArray);

    var sp = 0;
    var pl = 0,
      temp = 0;
    var total = 0;

    targetArray.forEach((emp, index) => {
      temp = `${emp["Bag Type"]}`;
      if (temp == "SP") {
        sp++;
      } else if (temp == "PL") {
        pl++;
      }
      total = sp + pl;

      var tr = document.createElement("tr");
      tr.style.textAlign = "center";
      tr.innerHTML = `
                            <td>${index + 1}</td>
                            <td style="width:140px">${emp["Bag Number"]}</td >
                            <td id="PL" style="width:60px">${emp["Bag Type"]}</td>
                            <td style="width:120px">${emp["From Office Name"]}</td>
                            <td style ="width:230px;text-align:start;text-indent:10px"> ${emp["To Office Name"]}</td >
                            `;
      document.querySelector("tbody").appendChild(tr);
    });

    document.getElementById("tableContainter").classList.add("col-12");
    // document.getElementById("mlName").textContent =
    // "MailList To : MG-2 Tirupati HUB - 2B";
    document.getElementById("speed").textContent = sp;
    document.getElementById("parcel").textContent = pl;
    document.getElementById("total1").textContent = total;
    window.print();
    window.location.reload();

    // console.log(targetArray);
  } catch (error) {
    console.error("Error fetching closings:", error);
  }
}

function deleteBag() {
  // alert("Working  on it...");
  const bagId = document.getElementById("bagId").value.trim();
  if (bagId === "") {
    alert("Please enter a bag number.");
    return;
  }

  newArray.push(bagId);
  console.log(newArray);
  document.getElementById("bagId").value = "";
  alert(
    `Bag number ${bagId} has been added to the list of bag numbers to exclude.`,
  );
}
