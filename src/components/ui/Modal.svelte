<script>
  import CloseIcon from "../../assets/icons/Close-icon.svelte";
  export let videoUrl = "";
  export let isOpen = false;

  function handleCloseModal() {
    isOpen = false;
  }
</script>

{#if isOpen}
  <div class="modal">
    <div class="modal__content">
      <!-- svelte-ignore a11y-media-has-caption -->
      <video src={videoUrl} controls class="modal__video" />
      <button on:click={handleCloseModal} class="modal__button"
        ><CloseIcon width="21" height="21" color="default-black" /></button
      >
    </div>
  </div>
{/if}

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    z-index: 6;
  }

  .modal__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 6px;
    background-color: var(--color-white);
  }

  .modal__video {
    width: 280px;
    height: 280px;
  }

  .modal__button {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: var(--color-secondary);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .modal__content {
      width: 720px;
      height: 420px;
    }

    .modal__video {
      width: 700px;
      height: 400px;
    }
  }
</style>
