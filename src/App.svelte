<script>
  import About from "./components/About.svelte";
  import Contact from "./components/Contact.svelte";
  import Home from "./components/Home.svelte";
  import OurWork from "./components/OurWork.svelte";
  import Phrase from "./components/Phrase.svelte";
  import Services from "./components/Services.svelte";
  import phrases from "./helpers/phrases";
</script>

<main>
  <Home />
  <About />
  <Phrase phraseText={phrases.initial} />
  <Services />
  <Phrase phraseText={phrases.final} />
  <OurWork />
  <Contact />
</main>

<style>
  @font-face {
    src: url("/src/assets/font/Futura\ Book\ font.ttf");
    font-family: "Futura Light";
  }

  @font-face {
    src: url("/src/assets/font/Futura\ Bold\ font.ttf");
    font-family: "Futura Bold";
  }

  :global(:root) {
    --color-primary: #ff2f07;
    --color-secondary: #d4d4d4;
    --color-terciary: #888888;
    --color-fourth: #c3c2c2;
    --color-white: #fff;
    --color-black: #000;
    --color-font: #20201e;
    --font-light: "Futura Light";
    --font-bold: "Futura Bold";
  }
</style>
