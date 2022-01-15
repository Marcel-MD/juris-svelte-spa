<script>
  import { navigate } from "svelte-routing";
  import { getCurrentUser } from "../../services/auth.service";
  import { verifieProfile } from "../../services/admin.service";
  import { unverifieProfile } from "../../services/admin.service";
  import { deleteProfileAndUser } from "../../services/profile.service";
  import { catchError } from "../../services/error.service";
  import { formatDate } from "../../services/date.service";

  export let id;
  export let userId;
  export let verified;
  export let firstName;
  export let lastName;
  export let profilePicture;
  export let type;
  export let description;
  export let price;
  export let sector;
  export let address;
  export let rating;
  export let educations = [];
  export let experiences = [];

  let user = getCurrentUser();
  let errorMessage = "";

  function handleEdit() {
    navigate("/update-profile/" + id);
  }

  function handleVerifie() {
    verifieProfile(id).then(
      (response) => {
        verified = true;
        errorMessage = "";
      },
      (error) => {
        errorMessage = catchError(error);
      }
    );
  }

  function handleUnverifie() {
    unverifieProfile(id).then(
      (response) => {
        verified = false;
        errorMessage = "";
      },
      (error) => {
        errorMessage = catchError(error);
      }
    );
  }

  function handleDelete() {
    deleteProfileAndUser(id).then(
      (response) => {
        verified = false;
        errorMessage = "User permanently deleted!";
      },
      (error) => {
        errorMessage = catchError(error);
      }
    );
  }
</script>

<main>
  <div class="profile-info row">
    <div class="col-md">
      <img
        src={profilePicture || "../sample-profile.png"}
        alt="profile"
        width="240"
        height="240"
      />
      {#if verified}
        <div class="alert alert-success" role="alert">Verified Profile!</div>
      {:else}
        <div class="alert alert-danger" role="alert">
          Please wait until our admin team checks this profile!
        </div>
      {/if}
      {#if user && (user.id == userId || user.roles.includes("admin"))}
        <button type="button" class="btn btn-primary" on:click={handleEdit}
          >Edit Profile</button
        >
        <button type="button" class="btn btn-danger" on:click={handleDelete}
          >Delete User</button
        >
      {/if}

      {#if user && user.roles.includes("admin")}
        {#if verified}
          <button
            type="button"
            class="btn btn-warning"
            on:click={handleUnverifie}>Unverifie Profile</button
          >
        {:else}
          <button type="button" class="btn btn-success" on:click={handleVerifie}
            >Verifie Profile</button
          >
        {/if}
      {/if}
    </div>

    <div class="col-md">
      <h2>{firstName + " " + lastName}</h2>
      <h5>{type}</h5>
      <p>{description}</p>
      <h5>{sector}, {address}</h5>
      <h2>Price: {price} lei/h</h2>
      <h2>Rating: {rating}</h2>
    </div>
    <div class="col-md">
      <h3>Experience</h3>
      {#each experiences as exp}
        <p>
          {"[" +
            formatDate(exp.startDate) +
            " - " +
            formatDate(exp.endDate) +
            "]"}
          {exp.institution}
        </p>
      {/each}
      <h3>Education</h3>
      {#each educations as edu}
        <p>
          {"[" +
            formatDate(edu.startDate) +
            " - " +
            formatDate(edu.endDate) +
            "]"}
          {edu.institution}
        </p>
      {/each}
    </div>
    {#if errorMessage}
      <div class="alert alert-danger">{errorMessage}</div>
    {/if}
  </div>
</main>

<style>
  .profile-info {
    max-width: 1200px;
  }
  img {
    margin: 1em auto;
  }
  button {
    margin: 0.5em;
  }
  .col-md {
    margin-bottom: 2em;
  }
</style>
