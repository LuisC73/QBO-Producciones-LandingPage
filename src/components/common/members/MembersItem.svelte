<script>
	import PlusIcon from './../../../assets/icons/Plus-icon.svelte';
  export let imageUrl;
  export let fullname;
  export let position;
  export let link;
</script>

<div class="members__card">
  <figure class="members__img-container">
    <img src={imageUrl} alt={fullname} class="members__img">
  </figure>
  <div class="members__text-container">
    <h4 class="members__card-title">{fullname}</h4>
    <p class="members__p">{position}</p>
  </div>
  <a href={link} class="members__link" target="_blank">
    Ver más información
  </a>
</div>

<style>
  .members__card{
    position: relative;
    width: 100%;
    height: 450px;
    background-color: #f9f9f9;
    border-radius: 12px;
    overflow: hidden;
  }

  .members__img-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .members__img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .members__text-container{
    position: absolute;
    top: 40px;
    right: 20px;
    text-align: right;
  }

  .members__card-title{
    margin: 0;
    padding-left: 20px;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    color: var(--color-white);
  }

  .members__p{
    margin: 0;
    font-size: 1.6rem;
    color: var(--color-white);
  }

  .members__link{
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 15px;
    border: 2px solid transparent;
    background-color: var(--color-primary);
    font-size: 1.3rem;
    color: var(--color-white);
    transition: 0.5s;
  }

  .members__link:hover{
    background-color: transparent;
    border-color: var(--color-primary);
  }
</style>