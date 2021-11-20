<script>
  import { getUnverifiedProfiles } from "../../services/admin.service";
  import { catchError } from "../../services/error.service";
  import Lawyer from "../search/Lawyer.svelte";

  let errorMessage = "";
  let profileList = [];

  getUnverifiedProfiles().then(
    (response) => {
      profileList = response.data;
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

  <div class="profileList">
    {#each profileList as profile}
      <Lawyer {...profile} />
    {/each}
  </div>
</main>

<style>
  .alert {
    max-width: 600px;
    margin: 1em auto;
  }
  .profileList {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
