<script>
  import {
    acceptAppointment,
    deleteAppointment,
  } from "../../services/appointment.service";
  import { catchError } from "../../services/error.service";
  import { formatDate } from "../../services/date.service";

  export let id;
  export let firstName;
  export let lastName;
  export let phoneNumber;
  export let description;
  export let email;
  export let accepted;
  export let creationDate;
  let errorMessage = "";
  let theme = "primary";
  if (accepted) {
    theme = "success";
  }

  function handleAccept() {
    acceptAppointment(id).then(
      (response) => {
        accepted = true;
        theme = "success";
        errorMessage = "";
      },
      (error) => {
        errorMessage = catchError(error);
      }
    );
  }

  function handleDelete() {
    deleteAppointment(id).then(
      (response) => {
        theme = "danger";
        errorMessage = "";
      },
      (error) => {
        errorMessage = catchError(error);
      }
    );
  }
</script>

<main>
  <div class="card border-{theme} mb-3" style="max-width: 18rem;">
    <div class="card-header border-{theme}">{phoneNumber + " / " + email}</div>
    <div class="card-body text-{theme}">
      <h5 class="card-title">{firstName + " " + lastName}</h5>
      <p class="card-text">
        {description}
      </p>
      {#if !accepted}
        <button class="btn btn-success" on:click={handleAccept}>Accept</button>
      {/if}
      <button class="btn btn-danger" on:click={handleDelete}>Delete</button>
      {#if errorMessage}
        <div class="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      {/if}
    </div>
    <div class="card-footer border-{theme}">
      {formatDate(creationDate)}
    </div>
  </div>
</main>

<style>
</style>
