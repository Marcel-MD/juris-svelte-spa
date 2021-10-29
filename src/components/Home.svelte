<script>
</script>

<main>
  <div class="search-section">
    <h2 class="search-title">Find the right lawyer for you!</h2>
    <div class="search-line">
      <div class="dropdown">
        <button
          class="btn btn-light dropdown-toggle type-button"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Type
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><div class="dropdown-item" value="Lawyer">Lawyer</div></li>
          <li><div class="dropdown-item" value="Notary">Notary</div></li>
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-light dropdown-toggle city-button"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          City
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <li><div class="dropdown-item" value="Chisinau">Chisinau</div></li>
          <li><div class="dropdown-item" value="Balti">Balti</div></li>
          <li><div class="dropdown-item" value="Cahul">Cahul</div></li>
        </ul>
      </div>
      <button type="button" class="btn btn-primary search-button">Search</button
      >
    </div>
  </div>
  <div class="about-section">
    <img src="./juris.png" alt="" width="150" height="150" />
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
  .search-title {
    padding-top: 2em;
    padding-bottom: 1em;
    color: white;
    text-align: center;
  }
  .search-section {
    background-color: rgb(71, 77, 83);
    height: 18em;
    margin: -1em -0.5em 1em;
  }
  .search-line {
    display: flex;
    justify-content: center;
  }
  .type-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 30vw;
    max-width: 300px;
    text-align: left;
  }
  .city-button {
    border-radius: 0;
    width: 30vw;
    max-width: 300px;
    text-align: left;
  }
  .search-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 5rem;
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
