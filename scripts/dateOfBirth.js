(function () {
  const age = document.getElementById("age");

  const date = new Date("2000/1/25");
  const msToYears = (ms) => Math.floor(ms / 1000 / 60 / 60 / 24 / 365);
  age.innerHTML = msToYears(new Date() - date);
})();
