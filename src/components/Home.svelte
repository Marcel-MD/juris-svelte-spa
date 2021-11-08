<script>
  import { navigate } from "svelte-routing";
  let location;
  let type;

  function search() {
    navigate("/search/" + type + "/" + location);
  }
</script>

<main>
  <div class="search-section">
    <center
      ><img
        src="./logo-pbl2.1.w.png"
        alt="logo"
        width="240"
        height="240"
        style="margin-top: 3em;"
      /></center
    >
    <div class="search-line" style="padding-top:150px">
      <select bind:value={type} class="form-select type-button">
        <option value="Lawyer">Lawyer</option>
        <option value="Notary">Notary</option>
        <option value="All">All</option>
      </select>
      <select bind:value={location} class="form-select city-button">
        <option value="Chisinau">Chisinau</option>
        <option value="Balti">Balti</option>
        <option value="Cahul">Cahul</option>
        <option value="All">All</option>
      </select>
      <button
        on:click={search}
        type="button"
        class="btn btn-lg btn-outline-light search-button rounded-right"
        >Search</button
      >
    </div>
  </div>
  <div class="about-section">
    <h2 class="about-title">About Us</h2>
    <p class="about-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
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
