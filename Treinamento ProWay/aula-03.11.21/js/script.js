window.addEventListener("load", start);

      function start() {
        const nightMode = document.querySelector("#night-mode");

        // ao clicar mudaremos as cores
        nightMode.addEventListener("click", () => {
          // adiciona a classe `night-mode` ao html
          document.documentElement.classList.toggle("night-mode");
        });
      }
