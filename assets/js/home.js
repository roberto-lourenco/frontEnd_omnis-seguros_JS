function ajustarFundo() {
    let hero = document.getElementById("cta");
    let vetorHero = document.getElementById("vetor-hero");
    if (window.innerWidth < 993) {
      hero.style.backgroundImage = "";
      vetorHero.style.display = "flex";
      hero.style.backgroundColor = "#f8f9fa";
    } else {
      hero.style.backgroundImage = "url('assets/img/banner2.png')";
      vetorHero.style.display = "none";
    }
  }
  window.addEventListener("resize", ajustarFundo);
  ajustarFundo();



