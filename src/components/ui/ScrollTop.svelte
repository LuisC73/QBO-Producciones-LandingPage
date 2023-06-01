<script>
  import UpIcon from "../../assets/icons/Up-icon.svelte";
  let isButtonActive = false;

  window.addEventListener("scroll", () => {
    isButtonActive = window.pageYOffset > 100;
  });

  function handleClickButton() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
</script>

<button class="scroll-up" class:active={isButtonActive} on:click={handleClickButton}>
  <UpIcon width="21" height="21" />
</button>

<style>
  .scroll-up {
    position: fixed;
    bottom: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    border: none;
    outline: none;
    background-color: var(--color-primary);
    opacity: 0;
    transition: 0.5s;
    cursor: pointer;
  }

  .scroll-up.active {
    opacity: 1;
  }
</style>
