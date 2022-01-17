<script>
  import { navigate } from "svelte-routing";
  export let id;
  export let firstName;
  export let lastName;
  export let profilePicture;
  export let type;
  export let description;
  export let price;
  export let sector;
  export let address;
  export let rating;

  function goToProfile() {
    navigate("/profile/" + id);
  }
</script>

<main>
  <div class="card card-container" on:click={goToProfile}>
    <img
      src={profilePicture || "../sample-profile.png"}
      alt="profile"
      style="width: 240px; height: 240px; object-fit: cover;"
    />
    <div class="card-body">
      <div class="row">
        <div class="col">
          <h4 class="card-title h5 h4-sm">{firstName + " " + lastName}</h4>
          <p class="card-text">{type}</p>
        </div>
        <div class="col" style="text-align: right;">
          <h1>{rating ? rating.toFixed(1) : "-"}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="card-text">{sector + ", " + address}</p>
        </div>
        <div class="col" style="text-align: right;">
          <h4 class="card-title h5 h4-sm">{price + " lei"}</h4>
        </div>
      </div>
      <p class="card-text">{description}</p>
    </div>
  </div>
</main>

<style>
  img {
    height: 200px;
    width: 200px;
  }
  .row {
    margin-bottom: 1em;
  }
  .card {
    max-width: 800px;
    min-width: 800px;
    margin: 2em;
  }
  .card-container {
    flex-direction: row;
    cursor: pointer;
  }
  .card-container:hover {
    box-shadow: 0 0 5px;
  }

  @media only screen and (max-width: 600px) {
    img {
      height: 300px;
      width: 300px;
    }

    .card-container {
      flex-direction: column;
      min-width: 0;
    }
  }
</style>
