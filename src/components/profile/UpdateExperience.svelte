<script>
  import {
    addExperience,
    deleteExperience,
  } from "../../services/edu.exp.service";
  import { catchError } from "../../services/error.service";
  import { formatDate } from "../../services/date.service";

  export let profileId;
  export let experiences = [];

  let institution = "";
  let startDate;
  let endDate;

  let errorMessage = "";

  function handleAdd() {
    addExperience(profileId, institution, startDate, endDate).then(
      (response) => {
        experiences.push(response.data);
        experiences = experiences;
        errorMessage = "";
      },
      (error) => {
        errorMessage = catchError(error);
      }
    );
  }

  function handleDelete(id) {
    deleteExperience(id).then(
      (response) => {
        experiences = experiences.filter((exp) => exp.id !== id);
        errorMessage = "";
      },
      (error) => {
        errorMessage = catchError(error);
      }
    );
  }
</script>

<main>
  <div class="container">
    <h4>Experience</h4>
    {#each experiences as exp}
      <p>
        <svg
          on:click={() => handleDelete(exp.id)}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
          />
        </svg>
        {"[" +
          formatDate(exp.startDate) +
          " - " +
          formatDate(exp.endDate) +
          "]"}
        {exp.institution}
      </p>
    {/each}

    <div class="input-group">
      <span class="input-group-text">Institution</span>
      <input
        bind:value={institution}
        type="text"
        aria-label="Institution"
        class="form-control"
      />
      <input
        bind:value={startDate}
        type="date"
        aria-label="Start date"
        class="form-control"
      />
      <input
        bind:value={endDate}
        type="date"
        aria-label="End date"
        class="form-control"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        on:click={handleAdd}>Add</button
      >
    </div>

    {#if errorMessage}
      <div class="alert alert-danger col-12" role="alert">
        {errorMessage}
      </div>
    {/if}
  </div>
</main>

<style>
  .container {
    max-width: 800px;
    margin-top: 2em;
  }
  .alert {
    max-width: 600px;
    margin: 1em auto;
  }
  .bi:hover {
    color: red;
    cursor: pointer;
  }
</style>
