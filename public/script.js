document.getElementById("btn").addEventListener("click", async () => {
  const response = await fetch("/.netlify/functions/hello");
  const data = await response.json();

  document.getElementById("response").innerHTML = JSON.stringify(data);
});
