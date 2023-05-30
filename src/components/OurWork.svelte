<section class="our-work">
  <h2 class="our-work__title">Nuestro trabajo</h2>
  <div class="our-work__categories">
    <button class="our-work__option our-work__option--active">Todos</button>
    <button class="our-work__option">Videoclips musicales</button>
    <button class="our-work__option">Documentales</button>
    <button class="our-work__option">Cortos</button>
    <button class="our-work__option">Transmedia</button>
  </div>
  <div class="our-work__wrapper">
    <figure class="our-work__img-container">
      <img src="" alt="" />
    </figure>
  </div>
  <button class="our-work__more">Mostrar más</button>
</section>

<style>
  .our-work {
    max-width: 1340px;
    padding: 20px;
    text-align: center;
  }

  .our-work__title {
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

  .our-work__title::before {
    content: "";
    position: absolute;
    top: 0;
    width: 104px;
    height: 4px;
    background-color: var(--color-primary);
  }

  .our-work__categories {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin: 40px 0;
  }

  .our-work__option {
    padding: 5px 10px;
    border: none;
    outline: none;
    border-radius: 15px;
    background: none;
    font-size: 1.4rem;
    transition: 0.5s;
    cursor: pointer;
  }

  .our-work__option:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-5px);
  }

  .our-work__option--active {
    background: var(--color-primary);
    color: var(--color-white);
  }

  @media (min-width: 768px) {
    .our-work {
      padding: 110px 136.5px 80px;
    }
  }
</style>
