var test;
async function submitFormData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  fetchUsers();

  const res = await fetch("http://localhost:3000/adduser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });
  const data = await res.json();
  console.log(data);
}

async function fetchUsers() {
  const res = await fetch("http://localhost:3000/users");
  const data = await res.json();
  // console.log(data);

  data.forEach((user) => {
    // console.log(user.Email);

    if (user.Name === "M Sri Hari" || user.Email === "msharipdtr@gmail.com") {
      document.getElementById("status").textContent =
        "User Alaready Exists: " + user.Name;
      //   "User Found: " + user.Name;
      return;
    } else {
      document.getElementById("status").textContent = "User Added Successfully";
    }
  });
}

async function fetchUsers1() {
  const res = await fetch("http://localhost:3000/users");
  // console.log(res);
  const data = await res.json();
  console.log(data);

  data.unshift({
    SNO: 25,
    Name: "P Kavya",
    Email: "pkavya@gmail.com",
  });
  console.log(data);
}
