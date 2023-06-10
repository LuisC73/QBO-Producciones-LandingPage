<script>
  export let color = "default";
  export let width = "14";
  export let height = "14";
</script>


<svg
  xmlns="http://www.w3.org/2000/svg"
  {width}
  {height}
  viewBox="0 0 24 24"
  class={color}
  ><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" /></svg
>

<style>
  .default {
    fill: #fff;
    stroke: #fff;
  }

  .default-outline {
    fill: transparent;
    stroke: #fff;
  }

  .default-black {
    fill: #000;
    stroke: #000;
  }
</style>
