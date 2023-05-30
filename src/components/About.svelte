<script>
  import images from "../helpers/images";
</script>

<section id="About" class="about">
  <div class="about__flex">
    <img src={images.iconUp} alt="Icon" class="about__icon" />
    <h1 class="about__title">
      Apoyamos proyectos de estudiantes y pequeñas empresas, todo con el fin de crecer juntos.
    </h1>
  </div>
</section>

<style>
  .about {
    max-width: 1340px;
    padding: 20px;
    text-align: center;
  }

  .about__title {
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 2.7rem;
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
