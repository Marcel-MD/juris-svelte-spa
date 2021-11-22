<script>
  import { getProfileById } from "../../services/profile.service";
  import Review from "./Review.svelte";
  import CreateReview from "./CreateReview.svelte";
  import CreateAppointment from "../appointment/CreateAppointment.svelte";
  import ProfileInfo from "./ProfileInfo.svelte";
  import { getCurrentUser } from "../../services/auth.service";
  import { catchError } from "../../services/error.service";

  export let id;
  let user = getCurrentUser();
  let profile = null;
  let reviews = [];
  let errorMessage = "";

  getProfileById(id).then(
    (response) => {
      profile = response.data;
      reviews = profile.reviews;
      errorMessage = "";
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
  {:else}
    <div class="top-container">
      <ProfileInfo {...profile} />
      <CreateAppointment {id} />
      <h1>Reviews</h1>
      <div class="container">
        {#each reviews as review}
          <Review {...review} />
        {/each}
      </div>
      <CreateReview userId={id} />
    </div>
  {/if}
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
  .top-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em 0;
  }
</style>
