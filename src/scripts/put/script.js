async function submitClick() {
  //   const id = document.getElementById("id").value;
  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;

  const response = await fetch(`http://localhost:3000/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  });
  const data = await response.text();
  console.log(data);
}
