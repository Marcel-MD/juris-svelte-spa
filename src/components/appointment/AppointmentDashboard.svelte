<script>
  import CreateAppointment from "./CreateAppointment.svelte";
  import Appointment from "./Appointment.svelte";
  import { getAppointments } from "../../services/appointment.service";
  import { catchError } from "../../services/error.service";

  let errorMessage = "";
  let appointmentList = [];

  getAppointments().then(
    (response) => {
      appointmentList = response.data;
      console.log(response.data);
    },
    (error) => {
      errorMessage = catchError(error);
    }
  );
</script>

<main>
  {#if errorMessage}
    <div class="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  {/if}

  <div class="container">
    {#each appointmentList as appointment}
      <Appointment {...appointment} />
    {/each}
  </div>
</main>

<style>
  .alert {
    max-width: 600px;
    margin: 1em auto;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 2em 2em;
    max-width: 900px;
  }
</style>
