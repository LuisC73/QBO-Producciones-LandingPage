<script>
  export let color = "default";
  export let width = "14";
  export let height = "14";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke-width="1.5"
  stroke="currentColor"
  {width}
  {height}
  class={color}
>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

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
