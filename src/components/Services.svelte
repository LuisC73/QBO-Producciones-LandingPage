<script>
  import images from "../helpers/images";
</script>

<section class="services">
  <h2 class="services__title">Nuestros servicios</h2>
  <p class="services__subtitle">Que podemos ofrecerte</p>
  <div class="services__wrapper">
    <div class="services__card">
      <img src={images.iconMovie} alt="Piezas Audiovisuales" class="services__icon" />
      <h3 class="services__title-item">Piezas audiovisuales con enfoque comercial.</h3>
      <p class="services__paragraph">
        Te apoyamos produciendo el promo que tanto quieres para tu pequeño negocio.
      </p>
    </div>
    <div class="services__card">
      <img src={images.iconPlay} alt="VideoClips" class="services__icon" />
      <h3 class="services__title-item">Videoclips musicales.</h3>
      <p class="services__paragraph">
        Producción para artistas emergentes y que se quieren proyectar en el mundo artístico.
      </p>
    </div>
    <div class="services__card">
      <img src={images.iconColaborate} alt="Piezas Audiovisuales" class="services__icon" />
      <h3 class="services__title-item">Cortos colaborativos.</h3>
      <p class="services__paragraph">
        Si tienes una idea y no tienes equipo de producción, somos tu primera opción.
      </p>
    </div>
  </div>
</section>

<style>
  .services {
    max-width: 1340px;
    padding: 20px;
    text-align: center;
  }

  .services__title {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    margin-bottom: 10px;
    font-size: 4rem;
    font-family: var(--font-bold);
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: var(--color-font);
  }

  .services__title::before {
    content: "";
    position: absolute;
    top: 0;
    width: 104px;
    height: 4px;
    background-color: var(--color-primary);
  }

  .services__subtitle {
    font-size: 1.5rem;
    font-family: var(--font-light);
    text-transform: uppercase;
  }

  .services__wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 340px));
    grid-template-rows: 260px;
    gap: 15px;
    width: 100%;
    margin-top: 40px;
  }

  .services__card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 50px 15px;
    background-color: #f9f9f9;
  }

  .services__icon {
    width: 80px;
    height: 80px;
  }

  .services__title-item {
    font-size: 1.4rem;
    font-family: var(--font-bold);
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  .services__paragraph {
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-family: var(--font-light);
  }

  @media (min-width: 768px) {
    .services {
      padding: 110px 136.5px 80px;
    }
  }
</style>
