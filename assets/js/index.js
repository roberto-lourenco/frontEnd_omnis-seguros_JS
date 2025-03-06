function ajustarFundo() {
    let hero = document.getElementById("cta");
    if (window.innerWidth < 993) {
      hero.style.backgroundImage = "";
      hero.style.backgroundColor = "#f8f9fa";
    } else {
      hero.style.backgroundImage = "url('assets/img/banner2.png')";
    }
  }
  window.addEventListener("resize", ajustarFundo);
  ajustarFundo();



