async function deleteBag() {
  const bagNumber = document.getElementById("bagNumber").value;
  alert(`Deleting bag with number: ${bagNumber}`);

  const response = await fetch(`http://localhost:3000/delete/${bagNumber}`, {
    method: "DELETE",
  });

  const result = await response.json();
  alert(result.message);
}
