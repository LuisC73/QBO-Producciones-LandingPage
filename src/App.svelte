<script>
  import About from "./components/common/sections/About.svelte";
  import Contact from "./components/common/contact/Contact.svelte";
  import Home from "./components/common/home/Home.svelte";
  import OurWork from "./components/common/our-work/OurWork.svelte";
  import Phrase from "./components/ui/Phrase.svelte";
  import Services from "./components/common/servicesSection/Services.svelte";
  import phrases from "./helpers/phrases";
  import ButtonWpp from "./components/ui/ButtonWpp.svelte";
  import ScrollTop from "./components/ui/ScrollTop.svelte";
</script>

<main>
  <Home />
  <About />
  <Phrase phraseText={phrases.initial} />
  <Services />
  <Phrase phraseText={phrases.final} />
  <OurWork />
  <Contact />
  <ButtonWpp />
  <ScrollTop />
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
