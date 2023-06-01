<script>
  export let image;
  export let title;
  export let text;
</script>

<div class="services__card">
  <img src={image} alt="Piezas Audiovisuales" class="services__icon" />
  <h3 class="services__title-item">{title}</h3>
  <p class="services__paragraph">{text}</p>
</div>

<style>
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
</style>
