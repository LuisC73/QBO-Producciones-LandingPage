<script>
  import CogIcon from "../../../assets/icons/Cog-icon.svelte";
  import DiamontIcon from "../../../assets/icons/Diamont-icon.svelte";
  import InstagramIcon from "../../../assets/icons/Instagram-icon.svelte";
  import MailIcon from "../../../assets/icons/Mail-icon.svelte";
  import MenuIcon from "../../../assets/icons/Menu-icon.svelte";
  import PhoneIcon from "../../../assets/icons/Phone-icon.svelte";
  import StarIcon from "../../../assets/icons/Star-icon.svelte";
  import YoutubeIcon from "../../../assets/icons/Youtube-icon.svelte";

  let isShowMenu = false;

  window.addEventListener("scroll", () => {
    isShowMenu = window.pageYOffset > 200;
  });
</script>

<nav class="navbar" class:active={isShowMenu}>
  <img
    src="https://i.postimg.cc/zDV9CNqr/qbo-producciones-logo.png"
    alt="Logo QBO"
    class="navbar__img"
  />
  <ul class="navbar__list">
    <li class="navbar__item active">
      <a href="#About" class="navbar__link">
        <span class="navbar__icon">
          <DiamontIcon width="21" height="21" />
        </span>
        <span class="navbar__text"> QBO </span>
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
    <a href="https://www.youtube.com/@anamanuelaramirezcurequia1409" class="navbar__icon-social">
      <YoutubeIcon color="primary" width="18" height="18" />
    </a>
    <a href="https://www.youtube.com/@anamanuelaramirezcurequia1409" class="navbar__icon-social">
      <InstagramIcon color="primary" width="18" height="18" />
    </a>
    <a href="https://www.youtube.com/@anamanuelaramirezcurequia1409" class="navbar__icon-social">
      <MailIcon color="primary" width="18" height="18" />
    </a>
  </div>
  <button class="navbar__toggle">
    <MenuIcon />
  </button>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-content: center;
    align-items: center;
    width: 100%;
    height: 90px;
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
    width: 70px;
    height: 70px;
  }

  .navbar__list {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .navbar__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 90px;
    background-color: var(--color-white);
  }

  .navbar__item.active {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  .navbar__link {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    text-decoration: none;
    overflow: hidden;
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

  .navbar__item:hover {
    background-color: var(--color-primary);
    color: var(--color-white);
  }

  .navbar__item:hover .navbar__icon {
    top: 50%;
  }

  .navbar__item:hover .navbar__text {
    top: 100%;
  }

  .navbar__icons-social {
    justify-self: end;
    display: flex;
    align-items: center;
    column-gap: 15px;
  }

  .navbar__toggle {
    display: block;
  }

  @media (min-width: 768px) {
    .navbar {
      grid-template-columns: repeat(3, 1fr);
    }
    .navbar__toggle {
      display: none;
    }
  }
</style>
