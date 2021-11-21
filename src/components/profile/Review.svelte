<script>
  import { deleteReview } from "../../services/review.service";
  import { catchError } from "../../services/error.service";
  import { getCurrentUser } from "../../services/auth.service";

  export let id;
  export let firstName;
  export let lastName;
  export let description;
  export let rating;
  export let creationDate;

  let user = getCurrentUser();
  let errorMessage = "";
  let theme = "dark";

  function handleDelete() {
    deleteReview(id).then(
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
    <div class="card-header border-{theme}">
      {firstName + " " + lastName}
    </div>
    <div class="card-body text-{theme}">
      <h5 class="card-title">Rating <strong>{rating}</strong></h5>
      <p class="card-text">
        {description}
      </p>
      {#if user && user.roles.includes("admin")}
        <button class="btn btn-danger" on:click={handleDelete}>Delete</button>
      {/if}
      {#if errorMessage}
        <div class="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      {/if}
    </div>
    <div class="card-footer border-{theme}">
      {creationDate}
    </div>
  </div>
</main>

<style>
</style>
