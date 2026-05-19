async function getUsers() {
  try {
    const response = await fetch("http://localhost:3001/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

async function allClosings() {
  try {
    const response = await fetch("http://localhost:3001/allclosings");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching closings:", error);
  }
}
