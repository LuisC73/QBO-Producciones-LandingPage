<script>
  import { onMount } from "svelte";
  import CogIcon from "../../../assets/icons/Cog-icon.svelte";
  import DiamontIcon from "../../../assets/icons/Diamont-icon.svelte";
  import InstagramIcon from "../../../assets/icons/Instagram-icon.svelte";
  import MailIcon from "../../../assets/icons/Mail-icon.svelte";
  import MenuIcon from "../../../assets/icons/Menu-icon.svelte";
  import PhoneIcon from "../../../assets/icons/Phone-icon.svelte";
  import StarIcon from "../../../assets/icons/Star-icon.svelte";
  import YoutubeIcon from "../../../assets/icons/Youtube-icon.svelte";
  import CameraIcon from "../../../assets/icons/Camera-icon.svelte";

  let isShowMenu = false;
  let isActiveMobile = false;

  window.addEventListener("scroll", () => {
    isShowMenu = window.pageYOffset > 200;
  });

  onMount(() => {
    const menuItems = document.querySelectorAll('a.navbar__link[href^="#"]');
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
          menuItems.forEach((menuItem) => {
            menuItem.classList.remove("active");
          });

          menuItems[index].classList.add("active");
        }
      });
    });
  });

  function handleClickHamburguer() {
    isActiveMobile = !isActiveMobile;
  }
</script>

<nav class="navbar" class:active={isShowMenu}>
  <img
    src="https://i.postimg.cc/zDV9CNqr/qbo-producciones-logo.png"
    alt="Logo QBO"
    class="navbar__img"
  />
  <ul class="navbar__list" class:active={isActiveMobile}>
    <li class="navbar__item">
      <a href="#Init" class="navbar__link active">
        <span class="navbar__icon">
          <DiamontIcon width="21" height="21" />
        </span>
        <span class="navbar__text"> QBO </span>
      </a>
    </li>
    <li class="navbar__item">
      <a href="#About" class="navbar__link active">
        <span class="navbar__icon">
          <CameraIcon width="21" height="21" />
        </span>
        <span class="navbar__text"> Sobre <br> Nosotros </span>
      </a>
    </li>
    <li class="navbar__item">
      <a href="#Services" class="navbar__link">
        <span class="navbar__icon">
          <StarIcon width="21" height="21" />
        </span>
        <span class="navbar__text"> Servicios </span>
      </a>
    </li>
    <li class="navbar__item">
      <a href="#OurWork" class="navbar__link">
        <span class="navbar__icon">
          <CogIcon width="21" height="21" />
        </span>
        <span class="navbar__text"> Portafolio </span>
      </a>
    </li>
    <li class="navbar__item">
      <a href="#Contact" class="navbar__link">
        <span class="navbar__icon">
          <PhoneIcon width="21" height="21" />
        </span>
        <span class="navbar__text"> Contacto </span>
      </a>
    </li>
  </ul>
  <div class="navbar__icons-social">
    <a href="https://www.youtube.com/@QBOProducciones_" class="navbar__icon-social">
      <YoutubeIcon color="primary" width="18" height="18" />
    </a>
    <a href="https://www.instagram.com/qboproducciones/" class="navbar__icon-social">
      <InstagramIcon color="primary" width="18" height="18" />
    </a>
    <a href="mailto:qboproducciones2023@gmail.com" class="navbar__icon-social">
      <MailIcon color="primary" width="18" height="18" />
    </a>
  </div>
  <button class="navbar__toggle" on:click={handleClickHamburguer}>
    <MenuIcon width="21" height="21" />
  </button>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    place-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 40px;
    background-color: var(--color-white);
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.09);
    opacity: 0;
    transform: translateY(-100%);
    transition: 0.5s;
    pointer-events: none;
    z-index: 5;
  }

  .navbar.active {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .navbar__img {
    display: none;
    width: 70px;
    height: 70px;
  }

  .navbar__list {
    position: absolute;
    top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    margin: 0;
    padding: 0;
    transition: transform 0.3s ease-in-out;
  }

  .navbar__item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar__link {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 90px;
    background-color: var(--color-white);
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    text-decoration: none;
    overflow: hidden;
  }

  .navbar__link.active {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
  .navbar__icon {
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: top 0.3s, background 0.3s;
  }

  .navbar__text {
    position: relative;
    top: 0;
    text-align: center;
    transition: top 0.3s;
  }

  .navbar__link:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  .navbar__link:hover .navbar__icon,
  .navbar__link.active .navbar__icon {
    top: 50%;
  }

  .navbar__link:hover .navbar__text,
  .navbar__link.active .navbar__text {
    top: 100%;
  }

  .navbar__icons-social {
    justify-self: end;
    display: none;
    align-items: center;
    column-gap: 15px;
  }

  .navbar__toggle {
    grid-row: 1 / 2;
    justify-self: end;
    display: block;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    background: none;
  }

  @media (max-width: 768px) {
    .navbar__list {
      height: 360px;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-200%);
    }

    .navbar__list.active {
      transform: translateY(0%);
      width: 100vw;
      opacity: 1;
      pointer-events: all;
    }

    .navbar__list.active .navbar__link,
    .navbar__list.active .navbar__item {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    .navbar {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      height: 90px;
    }
    .navbar__toggle {
      display: none;
    }

    .navbar__img {
      display: block;
    }

    .navbar__icons-social {
      display: flex;
    }

    .navbar__list {
      position: relative;
      top: 0;
      width: 100%;
      height: 100%;
      flex-direction: row;
      opacity: 1;
      pointer-events: all;
    }
  }
</style>
