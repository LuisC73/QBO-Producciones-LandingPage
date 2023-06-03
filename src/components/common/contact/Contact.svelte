<script>
  import InstagramIcon from "../../../assets/icons/Instagram-icon.svelte";
  import MailIcon from "../../../assets/icons/Mail-icon.svelte";
  import YoutubeIcon from "../../../assets/icons/Youtube-icon.svelte";
  import ContactForm from "./Contact-form.svelte";
</script>

<section class="contact" id="Contact">
  <h2 class="contact__title">Contáctanos</h2>
  <div class="contact__wrapper">
    <div class="contact__col">
      <h3 class="contact__sub-title">Contáctanos</h3>
      <div class="contact__info">
        <p class="contact__p">Correo</p>
        <p class="contact__p">Numero</p>
        <p class="contact__p">Dirección</p>
      </div>
    </div>
    <div class="contact__col">
      <h3 class="contact__sub-title">Síguenos</h3>
      <div class="contact__flex">
        <a href="https://www.youtube.com/@anamanuelaramirezcurequia1409" class="contact__link">
          <YoutubeIcon width="18" height="18" />
        </a>
        <a href="https://www.youtube.com/@anamanuelaramirezcurequia1409" class="contact__link">
          <InstagramIcon width="18" height="18" />
        </a>
        <a href="https://www.youtube.com/@anamanuelaramirezcurequia1409" class="contact__link">
          <MailIcon width="18" height="18" />
        </a>
      </div>
    </div>
    <ContactForm />
  </div>
</section>

<style>
  .contact {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    background: url("https://i.postimg.cc/RZ305DTj/image-Home.jpg") center/cover no-repeat;
  }

  .contact::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
  }

  .contact__title {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: 10px;
    font-size: 3rem;
    font-family: var(--font-bold);
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: var(--color-white);
    z-index: 1;
  }

  .contact__title::before {
    content: "";
    position: absolute;
    top: 0;
    width: 104px;
    height: 4px;
    background-color: var(--color-primary);
  }

  .contact__wrapper {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    row-gap: 40px;
    width: 100%;
    margin-top: 40px;
    z-index: 1;
  }

  .contact__col {
    width: 100%;
    height: 100%;
  }

  .contact__sub-title {
    position: relative;
    margin: 0;
    font-size: 1.5rem;
    font-family: var(--font-bold);
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: var(--color-white);
  }

  .contact__sub-title::before {
    content: "";
    position: absolute;
    top: -15px;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: var(--color-primary);
  }

  .contact__info {
    margin-top: 40px;
  }

  .contact__p {
    font-size: 1.3rem;
    color: var(--color-white);
  }

  .contact__flex {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    .contact {
      padding: 110px 136.5px 40px;
    }
    .contact__title {
      font-size: 4rem;
    }
  }
</style>
