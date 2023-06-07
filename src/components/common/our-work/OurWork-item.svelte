<script>
  import CloseIcon from "../../../assets/icons/Close-icon.svelte";
  import projectsInformation from "../../../helpers/projects";
  import Modal from "../../ui/Modal.svelte";

  export let image;
  export let text;
  export let id;
  export let url = null;

  let selectedItemId = null;

  function openModal(idItem) {
    selectedItemId = idItem;
  }

  function handleKeyCaptureData() {}
</script>

<div>
  {#if !url}
    <figure
      class="our-work__img-container"
      on:click={() => openModal(id)}
      on:keypress={handleKeyCaptureData}
    >
      <img src={image} alt={text} class="our-work__img" />
      <figcaption class="our-work__caption">{text}</figcaption>
    </figure>

    <Modal
      isOpen={selectedItemId != null}
      videoUrl={selectedItemId &&
        projectsInformation.find((item) => item.id === selectedItemId).video}
    />
  {:else}
    <a href={url} target="_blank">
      <figure
        class="our-work__img-container"
        on:click={() => openModal(id)}
        on:keypress={handleKeyCaptureData}
      >
        <img src={image} alt={text} class="our-work__img" />
        <figcaption class="our-work__caption">{text}</figcaption>
      </figure>
    </a>
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
</style>
