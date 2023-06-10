<script>
  import MembersContainer from "../members/MembersContainer.svelte";

</script>
<section id="About" class="about">
  <h2 class="about__title">Sobre Nosotros</h2>
  <p class="about__p">
    Nuestro colectivo trata de una empresa, la cual tiene como razón social la producción y venta de
    proyectos audiovisuales. Nuestra actividad se basa en la realización de proyectos propios como
    cortos ficcionales y no ficcionales, además de apoyar productoras y estudiantes quienes buscan
    una mayor proyección en el mundo audiovisual.
  </p>
  <MembersContainer />
</section>

<style>
  .about {
    max-width: 1340px;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
  }

  .about__title {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: 10px;
    font-size: 4rem;
    font-family: var(--font-bold);
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: var(--color-font);
  }

  .about__title::before {
    content: "";
    position: absolute;
    top: 0;
    width: 104px;
    height: 4px;
    background-color: var(--color-primary);
  }

  .about__p {
    font-size: 1.6rem;
    line-height: 2rem;
  }

  @media (min-width: 768px) {
    .about {
      padding: 40px 136.5px;
    }
  }
</style>
