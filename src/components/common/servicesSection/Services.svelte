<script>
  import cardsInformation from "../../../helpers/cards";
  import ServicesItem from "./Services-item.svelte";
</script>

<section class="services" id="Services">
  <h2 class="services__title">Nuestros servicios</h2>
  <p class="services__subtitle">Qué podemos ofrecerte</p>
  <div class="services__wrapper">
    {#each cardsInformation as item (item.id)}
      <ServicesItem image={item.icon} title={item.title} text={item.text} />
    {/each}
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
    padding-top: 20px;
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

  @media (min-width: 768px) {
    .services {
      padding: 110px 136.5px 80px;
    }
  }
</style>
