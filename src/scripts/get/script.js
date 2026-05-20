async function getUsers() {
  try {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
const newArray = [
  "EBX0012532914",
  "EBX0012532922",
  "EBX0012532974",
  "EBX0012533339",
  "EBX0012533376",
  "EBX0012533484",
  "EBX0012533523",
  "EBX0012533920",
  "EBX0012534284",
  "EBX0012534657",
  "EBX0012534713",
  "EBX0012534737",
  "EBX0012534782",
  "EBX0012534847",
  "EBX0012534871",
  "EBX0012535047",
  "EBX0012535095",
  "EBX0012535135",
  "EBX0012535247",
  "EBX0012535272",
  "EBX0012535486",
  "EBX0012535567",
  "EBX0012535624",
  "EBX0012553542",
  "EBX0012535664",
  "EBX0012535714",
  "EBX0012535927",
  "EBX0012536116",
  "EBX0012536218",
  "EBX0012539339",
  "EBX0012539895",
  "EBX0012539997",
  "EBX0012541362",
  "EBX0012541473",
  "EBX0012544775",
  "EBX0012545050",
  "EBX0012545408",
  "EBX0012547295",
  "EBX0012549599",
  "EBX0012549799",
];
const kadapaArray = [];
const targetArray = [];

async function allClosings() {
  try {
    const response = await fetch("http://localhost:3001/allclosings");
    const data = await response.json();
    // console.log(data);

    // newArray.length = 0;

    // data.forEach((value) => newArray.push(value));
    // newArray = [...data["Bag Number"]];
    // console.log(newArray);

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
