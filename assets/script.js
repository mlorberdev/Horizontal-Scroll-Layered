!(function () {

  // SCROLL
  void function scroll() {
    let ll = 0;
    window.addEventListener("wheel", (e) => {
      if (ll === 0 && e.deltaY < 0) return;
      // if (ll > 5 * innerWidth) return;
      e.deltaY < 0 ? ll += 15 : ll -= 15;
      document.getElementById("bg").style.left = ll + "px";
      document.getElementById("bg2").style.left = (.6 * ll) + "px";
      document.getElementById("bg3").style.left = (.4 * ll) + "px";
    });
  }();

  // BG
  void function bg() {

    const rn = (n) => { return Math.floor(Math.random() * n); }
    const tau = Math.PI * 2;
    const c = document.getElementById("c");
    const c2 = document.getElementById("c2");
    const cx = c.getContext("2d");
    const cx2 = c2.getContext("2d");
    const w = 5 * innerWidth;
    const h = innerHeight;
    const r = 100;
    c.width = c2.width = w;
    c.height = c2.height = h;

    void function jt() {
      mk(cx);
      mk(cx2);
    }();

    function mk(cxt) {
      for (let i = 0; i < 200; i++) {
        cxt.fillStyle = `hsla(${rn(360)},${rn(100)}%,${rn(100)}%,.6)`;
        let x = rn(w);
        let y = rn(h);
        let z = rn(r);
        cxt.beginPath();
        cxt.arc(x, y, z, 0, tau);
        cxt.fill();

      }
    }
  }();
})();