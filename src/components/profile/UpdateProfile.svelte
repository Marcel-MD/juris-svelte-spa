<script>
  import {
    getProfileById,
    updateProfile,
  } from "../../services/profile.service";
  import { getTypes, getSectors } from "../../services/enum.service";
  import { catchError } from "../../services/error.service";
  import { getCurrentUser } from "../../services/auth.service";
  import { navigate } from "svelte-routing";
  import UpdateEducation from "./UpdateEducation.svelte";
  import UpdateExperience from "./UpdateExperience.svelte";

  export let id;

  let firstName;
  let lastName;
  let profilePicture;
  let type;
  let description;
  let price;
  let phoneNumber;
  let sector;
  let address;
  let educations = [];
  let experiences = [];

  let typeList = [];
  let sectorList = [];

  let errorMessage = "";
  let successMessage = "";
  let user = getCurrentUser();

  if (!user || (user.id != id && !user.roles.includes("admin"))) {
    navigate("/profile/" + id);
  }

  getTypes().then(
    (response) => {
      typeList = Object.values(response.data);
    },
    (error) => {
      errorMessage = catchError(error);
    }
  );

  getSectors().then(
    (response) => {
      sectorList = Object.values(response.data);
    },
    (error) => {
      errorMessage = catchError(error);
    }
  );

  getProfileById(id).then(
    (response) => {
      errorMessage = "";
      let p = response.data;

      firstName = p.firstName;
      lastName = p.lastName;
      profilePicture = p.profilePicture;
      type = p.type;
      description = p.description;
      price = p.price.toString();
      phoneNumber = p.phoneNumber.toString();
      sector = p.sector;
      address = p.address;
      educations = p.educations;
      experiences = p.experiences;
    },
    (error) => {
      errorMessage = catchError(error);
    }
  );

  function handleUpdate() {
    updateProfile(
      id,
      firstName,
      lastName,
      profilePicture,
      type,
      description,
      price,
      phoneNumber,
      sector,
      address
    ).then(
      (response) => {
        errorMessage = "";
        successMessage = "Success!";
        navigate("/profile/" + id);
      },
      (error) => {
        errorMessage = catchError(error);
      }
    );
  }
</script>

<main>
  <form class="row info-form" on:submit|preventDefault={handleUpdate}>
    <div class="col-md-3">
      <img
        src={profilePicture || "/sample-profile.png"}
        alt="profile"
        width="240"
        height="240"
      />
      <br />
      <div class="col-12">
        <label for="validationDefault00" class="form-label">Image URL</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault00"
          bind:value={profilePicture}
        />
      </div>
      {#if successMessage}
        <div class="alert alert-success col-12" role="alert">
          {successMessage}
        </div>
      {:else}
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Update Profile
          </button>
        </div>
      {/if}
      {#if errorMessage}
        <div class="alert alert-danger col-12" role="alert">
          {errorMessage}
        </div>
      {/if}
    </div>
    <div class="col-md-9 row g-3">
      <div class="col-md-6">
        <label for="validationDefault01" class="form-label">First name</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault01"
          bind:value={firstName}
          required
        />
      </div>
      <div class="col-md-6">
        <label for="validationDefault02" class="form-label">Last name</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault02"
          bind:value={lastName}
          required
        />
      </div>
      <div class="col-md-6">
        <label for="type-select" class="form-label">Type</label>
        <select bind:value={type} class="form-select" id="type-select">
          {#each typeList as type}
            <option value={type}>{type}</option>
          {/each}
        </select>
      </div>
      <div class="col-md-6">
        <label for="validationDefault03" class="form-label">Phone number</label>
        <input
          type="tel"
          class="form-control"
          id="validationDefault03"
          bind:value={phoneNumber}
          required
        />
      </div>
      <div class="col-md-6">
        <label for="sector-select" class="form-label">Sector</label>
        <select bind:value={sector} class="form-select" id="sector-select">
          {#each sectorList as sector}
            <option value={sector}>{sector}</option>
          {/each}
        </select>
      </div>
      <div class="col-md-6">
        <label for="validationDefault04" class="form-label">Price</label>
        <input
          type="string"
          class="form-control"
          id="validationDefault04"
          bind:value={price}
          required
        />
      </div>
      <div class="col-12">
        <label for="validationDefault05" class="form-label">Address</label>
        <input
          type="text"
          class="form-control"
          id="validationDefault05"
          bind:value={address}
          required
        />
      </div>
      <div class="col-12">
        <label for="validationDefault04" class="form-label">Description</label>
        <textarea
          class="form-control"
          id="validationDefault04"
          rows="3"
          bind:value={description}
          required
        />
      </div>
    </div>
  </form>

  <UpdateEducation profileId={id} {educations} />
  <UpdateExperience profileId={id} {experiences} />
</main>

<style>
  .info-form {
    max-width: 1200px;
    margin: auto;
  }
  .alert {
    max-width: 600px;
    margin: 1em auto;
  }
  button {
    margin: 1em 0;
  }
</style>
