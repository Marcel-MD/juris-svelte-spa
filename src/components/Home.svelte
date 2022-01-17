<script>
  import { navigate } from "svelte-routing";
  import { createEventDispatcher } from "svelte";
  import { catchError } from "../services/error.service";
  import { getTypes, getSectors } from "../services/enum.service";

  let location = "";
  let type = "";
  let locationList = [];
  let typeList = [];
  let errorMessage;

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
      locationList = Object.values(response.data);
    },
    (error) => {
      errorMessage = catchError(error);
    }
  );

  const dispatch = createEventDispatcher();

  function search() {
    dispatch("message", {
      location: location,
      type: type,
    });
    navigate("/search");
  }
</script>

<main>
  <div class="search-section">
    <center
      ><img
        src="/logo-pbl2.1.w.png"
        alt="logo"
        width="240"
        height="240"
        style="margin-top: 3em;"
      /></center
    >
    <div class="search-line" style="padding-top:150px">
      <select bind:value={type} class="form-select type-button">
        <option value="">Any</option>
        {#each typeList as type}
          <option value={type}>{type}</option>
        {/each}
      </select>
      <select bind:value={location} class="form-select city-button">
        <option value="">Any</option>
        {#each locationList as location}
          <option value={location}>{location}</option>
        {/each}
      </select>
      <button
        on:click={search}
        type="button"
        class="btn btn-lg btn-outline-light search-button rounded-right"
        >Search</button
      >
    </div>
    {#if errorMessage}
      <div class="alert alert-danger" role="alert">
        {errorMessage}
      </div>
    {/if}
  </div>
  <div class="about-section">
    <h2 class="about-title">About Us</h2>
    <p class="about-text">
      Who are we? A small team which a big dream, to simplify the connection
      between lawyers and their clients. The solution we came up to, is the web
      platform you see. Juris helps lawyers sell their services and find new
      clients. For clients, it provides means of choosing the right attorney for
      their need. We are very fascinated about bringing out to society a new
      product that will connect clients with attorneys in our local area and
      improve the quality of services.
    </p>
  </div>
</main>

<style>
  .search-section {
    background-image: url("/grunge-cracked-wall.jpg");
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin: -1em -0.5em 3em;
  }
  .search-line {
    display: flex;
    justify-content: center;
  }
  .type-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 30vw;
    height: 50px;
    max-width: 300px;
    text-align: left;
    font-family: "Roboto";
  }
  .city-button {
    border-radius: 0;
    width: 30vw;
    height: 50px;
    max-width: 300px;
    text-align: left;
    font-family: "Roboto";
  }
  .search-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 7em;
    height: 50px;
    background-color: transparent;
    font-family: "Roboto";
  }
  .search-button:hover {
    background-color: #1b65a6;
    color: white;
  }
  .alert {
    max-width: 600px;
    margin: 1em auto;
  }

  .about-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    margin-top: 4em;
  }
  .about-text {
    max-width: 600px;
    text-align: justify;
  }
</style>
