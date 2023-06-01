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
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  />
</svg>

<style>
  .default {
    fill: #000;
    stroke: #000;
    transition: 0.5s;
  }

  .default-outline {
    fill: transparent;
    stroke: #fff;
  }
</style>
