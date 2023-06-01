<script>
  import CloseIcon from "../../../assets/icons/Close-icon.svelte";

  export let image;
  export let text;
  let imageUrl = "";
  let isActiveModal = false;

  function handleClickCaptureData(e) {
    imageUrl = e.currentTarget.querySelector("img").src;
    isActiveModal = true;
  }

  function handleDesactiveModal() {
    imageUrl = "";
    isActiveModal = false;
  }

  function handleKeyCaptureData() {}
</script>

<div>
  <figure
    class="our-work__img-container"
    on:click={handleClickCaptureData}
    on:keypress={handleKeyCaptureData}
  >
    <img src={image} alt={text} class="our-work__img" />
    <figcaption class="our-work__caption">{text}</figcaption>
  </figure>

  {#if isActiveModal}
    <div class="our-work__modal">
      <div
        class="our-work__close"
        on:click={handleDesactiveModal}
        on:keypress={handleDesactiveModal}
      >
        <CloseIcon />
      </div>
      <img src={imageUrl} alt="prueba" class="our-work__modal-img" />
      <p class="our-work__modal-paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet rerum facere aliquam
        asperiores quidem ad possimus ipsum? Optio, quis. Molestias, consequuntur libero? Vero eaque
        distinctio mollitia, aspernatur itaque fugit harum.
      </p>
    </div>
  {/if}
</div>

<style>
  .our-work__img-container {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    overflow: hidden;
  }

  .our-work__img-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: 0.5s;
  }

  .our-work__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s;
    transform: scale(1.03);
  }

  .our-work__caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #fff;
    opacity: 0;
    transition: 0.5s;
    z-index: 1;
  }

  .our-work__img-container:hover img {
    transform: scale(1);
  }

  .our-work__img-container:hover::after,
  .our-work__img-container:hover figcaption {
    opacity: 1;
  }

  .our-work__modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: var(--color-secondary);
    z-index: 3;
  }

  .our-work__modal-img {
    width: 200px;
    height: 200px;
  }

  .our-work__close {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
</style>
