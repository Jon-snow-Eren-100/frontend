function go(page) {
  const lang = document.getElementById("langSelect").value;
  localStorage.setItem("lang", lang);
  window.location.href = page;
}
