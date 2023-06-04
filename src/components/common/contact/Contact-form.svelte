<script>
  import emailjs from "@emailjs/browser";

  let fullname = "";
  let email = "";
  let phone = "";
  let message = "";

  function sendEmail(e) {
    emailjs.sendForm("service_eqrt7k4", "template_omu6qf9", e.target, "DGMBQ8NGpO7MTNj5y").then(
      (result) => {
        console.log("SUCCESS!", result.text);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );

    fullname = "";
    email = "";
    phone = "";
    message = "";
  }
</script>

<form on:submit|preventDefault={sendEmail} class="form-contact">
  <label for="Name" class="form-contact__label">
    <input
      type="text"
      id="Name"
      name="fullname"
      class="form-contact__input"
      placeholder="Nombre"
      bind:value={fullname}
      required
    />
  </label>
  <label for="Email" class="form-contact__label">
    <input
      type="email"
      id="Email"
      name="email"
      class="form-contact__input"
      placeholder="Email"
      bind:value={email}
      required
    />
  </label>
  <label for="Phone" class="form-contact__label">
    <input
      type="number"
      id="Phone"
      name="phone"
      class="form-contact__input"
      placeholder="Teléfono"
      bind:value={phone}
      required
    />
  </label>
  <textarea
    id="Message"
    class="form-contact__text-area"
    placeholder="Mensaje"
    name="message"
    bind:value={message}
  />
  <label for="SubmitForm" class="form-contact__label">
    <input type="submit" value="Enviar" id="SubmitForm" class="form-contact__submit" />
  </label>
</form>

<style>
  .form-contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    width: 100%;
  }

  .form-contact__label {
    width: 100%;
  }

  .form-contact__input {
    width: 100%;
    height: 40px;
    padding: 9px 15px 7px;
    border: 1px solid transparent;
    outline: none;
    background-color: #f5f5f5;
    font-size: 1.2rem;
    color: #5b5b5b;
  }

  .form-contact__text-area {
    width: 100%;
    height: 147px;
    padding: 9px 15px 7px;
    border: 1px solid transparent;
    outline: none;
    background-color: #f5f5f5;
    font-size: 1.2rem;
    color: #5b5b5b;
    resize: none;
  }

  .form-contact__submit {
    padding: 10px 20px;
    margin-top: 20px;
    border: none;
    outline: none;
    border-radius: 15px;
    background-color: var(--color-terciary);
    font-size: 1.2rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: var(--color-white);
    cursor: pointer;
    transition: 0.5s;
  }

  .form-contact__submit:hover {
    background-color: var(--color-secondary);
    color: var(--color-black);
  }
</style>
