<script>
  import About from "./components/About.svelte";
  import Home from "./components/Home.svelte";
</script>

<main>
  <Home />
  <About />
</main>

<style>
  @font-face {
    src: url("/src/assets/font/futura\ light\ bt.ttf");
    font-family: "Futura Light";
  }

  @font-face {
    src: url("/src/assets/font/Futura\ Heavy\ font.ttf");
    font-family: "Futura Bold";
  }

  @font-face {
    src: url("/src/assets/font/futura\ medium\ bt.ttf");
    font-family: "Futura Medium";
  }

  :global(:root) {
    --color-primary: #ff2f07;
    --color-secondary: #d4d4d4;
    --color-terciary: #888888;
    --color-fourth: #c3c2c2;
    --color-white: #fff;
    --color-black: #000;
    --font-light: "Futura Light";
    --font-medium: "Futura Medium";
    --font-bold: "Futura Bold";
  }
</style>
