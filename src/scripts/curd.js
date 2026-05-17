const form = document.getElementById("userForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = document.getElementById("userId").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (id) {
    // UPDATE
    await fetch(`/updateuser/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
  } else {
    // CREATE
    await fetch("/adduser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
  }

  form.reset();
  loadUsers();
});

// LOAD USERS
async function loadUsers() {
  const res = await fetch("/users");
  const data = await res.json();

  const tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  data.forEach((user) => {
    const row = `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <button class="btn btn-warning btn-sm" onclick="editUser(${user.id}, '${user.name}', '${user.email}')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Delete</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// EDIT
function editUser(id, name, email) {
  document.getElementById("userId").value = id;
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
}

// DELETE
async function deleteUser(id) {
  if (!confirm("Delete this user?")) return;

  await fetch(`/deleteuser/${id}`, {
    method: "DELETE",
  });

  loadUsers();
}

// Initial load
loadUsers();
