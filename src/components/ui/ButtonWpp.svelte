<script>
  import WhatsappIcon from "../../assets/icons/Whatsapp-icon.svelte";
</script>

<a href="wpp" class="button-wpp">
  <WhatsappIcon width="28" height="28" />
</a>

<style>
  .button-wpp {
    position: fixed;
    bottom: 10px;
    left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    background-color: #25d366;
    z-index: 3;
  }
</style>
