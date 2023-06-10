<script>
  import MembersItem from "./MembersItem.svelte";
  import members from "../../../helpers/members";
</script>

<div class="members">
  <h3 class="members__title">Crew</h3>
  <div class="members__wrapper">
    {#each members as item (item.id)}
      <MembersItem
        imageUrl={item.imagageUrl}
        fullname={item.fullname}
        position={item.position}
        link={item.link}
      />
    {/each}
  </div>
</div>

<style>
  .members{
    margin-top: 100px;
    width: 100%;
  }

  .members__wrapper{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(240px,258px));
    place-content: center;
    gap: 10px;
    margin-top: 40px;
  }

  .members__title {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: 10px;
    font-size: 2.8rem;
    font-family: var(--font-bold);
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: var(--color-font);
  }

  .members__title::before {
    content: "";
    position: absolute;
    top: 0;
    width: 80px;
    height: 4px;
    background-color: var(--color-primary);
  }
</style>
