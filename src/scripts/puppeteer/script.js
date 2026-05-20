async function submitClick() {
  const response = await fetch("http://localhost:3000/nellore");

  const blob = await response.blob();

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "puppeteer.pdf";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}

async function kadapaClick() {
  const response = await fetch("http://localhost:4000/kadapa");

  const blob = await response.blob();

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "puppeteer.pdf";
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}
