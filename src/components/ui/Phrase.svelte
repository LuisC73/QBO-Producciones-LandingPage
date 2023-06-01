<script>
  export let phraseText = "";
</script>

<div class="phrase-container">
  <h2 class="phrase__text">
    {phraseText}
  </h2>
</div>

<style>
  .phrase-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url("https://i.postimg.cc/RZ305DTj/image-Home.jpg") center/cover no-repeat;
    background-attachment: fixed;
    padding: 40px 20px;
  }

  .phrase__text {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 30px;
    font-size: 3rem;
    font-family: var(--font-light);
    line-height: 4rem;
    text-align: center;
    color: var(--color-font);
  }

  .phrase__text::before {
    content: "";
    position: absolute;
    top: 0;
    width: 104px;
    height: 4px;
    background-color: var(--color-font);
  }

  @media (min-width: 768px) {
    .phrase-container {
      height: 470px;
      padding: 136.5px;
    }
  }
</style>
