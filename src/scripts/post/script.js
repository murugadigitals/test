async function submitClick() {
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const response = await fetch("http://localhost:3000/addUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });
  const data = await response.json();
  console.log(data);
}
