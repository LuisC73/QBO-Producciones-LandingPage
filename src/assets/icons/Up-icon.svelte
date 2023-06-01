<script>
  export let color = "default";
  export let width = "14";
  export let height = "14";
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} viewBox="0 0 24 24" class={color}
  ><path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z" /></svg
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
</style>
