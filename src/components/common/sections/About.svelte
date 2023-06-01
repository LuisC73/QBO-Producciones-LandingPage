<section id="About" class="about">
  <div class="about__flex">
    <img src="https://i.postimg.cc/3w54R1yd/animation-icon-up.gif" alt="Icon" class="about__icon" />
    <h1 class="about__title">
      Somos un equipo de cuatro integrantes apasionados por captar el mundo a través del lente,
      queremos aprender contigo y que tú aprendas con nosotros
    </h1>
  </div>
</section>

<style>
  .about {
    max-width: 1340px;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
  }

  .about__title {
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 2.7rem;
    text-transform: uppercase;
    line-height: 1.4;
    font-family: var(--font-light);
    color: var(--color-font);
  }

  .about__flex {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
  }

  .about__icon {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 768px) {
    .about {
      padding: 40px 136.5px;
    }
  }
</style>
