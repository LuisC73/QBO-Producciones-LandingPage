<script>
  import PlayIcon from "../assets/icons/Play-icon.svelte";
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import CloseIcon from "../assets/icons/Close-icon.svelte";

  let splitText;
  let isVideoActive = false;

  onMount(() => {
    const textPlayVideo = document.querySelector(".home__p");
    const text = textPlayVideo.innerHTML;
    const splitLetters = Array.from(text)
      .map((letter) => `<span class="home__letter">${letter}</span>`)
      .join("");

    textPlayVideo.innerHTML = splitLetters;

    splitText = Array.from(document.querySelectorAll(".home__letter"));
  });

  function animateLetters() {
    gsap.fromTo(splitText, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.1 });
  }

  const handleClickToggleVideo = () => {
    isVideoActive ? (isVideoActive = false) : (isVideoActive = true);
  };

  const handleKeyPressToggleVideo = (e) => {
    if (e.keyCode === 13) {
      isVideoActive ? (isVideoActive = false) : (isVideoActive = true);
    }
  };
</script>

<div class="home">
  <div class="home__wrapper" on:mouseenter={animateLetters}>
    <div class="home__icon" on:click={handleClickToggleVideo} on:keyup={handleKeyPressToggleVideo}>
      <PlayIcon width="24" height="24" />
    </div>
    <p class="home__p">play reel</p>
    <!-- svelte-ignore a11y-missing-content -->
    <a href="#About" class="home__scroll" />
  </div>
  <div class="home__video-container" class:active={isVideoActive}>
    <div class="home__video">
      <div
        class="home__video-close"
        on:click={handleClickToggleVideo}
        on:keyup={handleKeyPressToggleVideo}
      >
        <CloseIcon width="40" height="40" />
      </div>
      <!-- svelte-ignore a11y-media-has-caption -->
      <video src="../../public/videos/8.Animación-Campaña.mp4" controls />
    </div>
  </div>
</div>

<style>
  .home {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url("https://i.postimg.cc/RZ305DTj/image-Home.jpg") center/cover no-repeat;
  }

  .home::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 0;
  }

  .home__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-rows: 4fr 60px 20px 1fr 40px;
    row-gap: 10px;
    padding-bottom: 20px;
    z-index: 1;
  }

  .home__icon {
    grid-row: 2 / 3;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 54px;
    height: 54px;
    border: 1px solid var(--color-white);
    border-radius: 50%;
    cursor: pointer;
  }

  .home__wrapper:hover .home__p {
    opacity: 1;
    transform: translateY(0);
  }

  .home__p {
    grid-row: 3 / 4;
    font-size: 1rem;
    font-family: var(--font-bold);
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    text-align: center;
    color: var(--color-white);
    opacity: 0;
    transition: 0.5s;
    transform: translateY(-100%);
    overflow: hidden;
  }

  .home__scroll {
    position: relative;
    grid-row: 5 / -1;
    width: 20px;
    height: 35px;
    border: 1px solid var(--color-white);
    border-radius: 48px;
  }

  .home__scroll::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
    width: 7px;
    height: 7px;
    margin: auto;
    border-radius: 50%;
    background-color: var(--color-white);
    animation: move-down 2s infinite;
  }

  .home__video-container {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: 0.5s;
    pointer-events: none;
    z-index: 3;
  }

  .home__video-container.active {
    opacity: 1;
    pointer-events: all;
  }

  .home__video {
    position: relative;
    width: 260px;
    height: 200px;
    transform: scale(0.8);
    transition: 0.5s;
  }

  .home__video-container.active .home__video {
    transform: scale(1);
  }

  .home__video-close {
    position: absolute;
    top: -35px;
    right: -30px;
    cursor: pointer;
    transition: 0.5s;
    z-index: 3;
  }

  .home__video-close:hover {
    transform: scale(1.02);
  }

  @media (min-width: 769px) {
    .home__video {
      width: 700px;
      height: 400px;
    }

    .home__video-close {
      top: -35px;
      right: -37px;
    }
  }
  @keyframes move-down {
    80% {
      opacity: 0.5;
    }

    100% {
      transform: translateY(17px);
      opacity: 0;
    }
  }
</style>
