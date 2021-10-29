<script>
</script>

<main>
  <div class="search-section">
    <center><img src="./logo-pbl2.1.w.png" alt="logo" width="240" height="300" style = "padding-top:70px" /></center>
    <div class="search-line" style = "padding-top:150px" >
      <div class="dropdown">
        <button
          class="btn btn-light dropdown-toggle type-button rounded-left"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Type
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><div class="dropdown-item" style="color:#fffbfa" rounded-top  value="Lawyer">Lawyer</div></li>
          <li><div class="dropdown-item" style="color:#fffbfa" rounded-top  value="Notary">Notary</div></li>
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-light dropdown-toggle city-button rounded-left"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          City
        </button>
        <ul class="dropdown-menu"  aria-labelledby="dropdownMenuButton2">
          <li><div class="dropdown-item" style="color:#fffbfa" rounded-top value="Chișinău">Chișinău</div></li>
          <li><div class="dropdown-item" style="color:#fffbfa" rounded-top value="Bălți">Bălți</div></li>
          <li><div class="dropdown-item" style="color:#fffbfa" rounded-top value="Cahul">Cahul</div></li>
        </ul>
      </div>
      <button type="button" class="btn btn-lg btn-outline-light search-button rounded-right">Search</button
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
    background-image : url('/grunge-cracked-wall.jpg');
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
    width: 200px;
    height: 50px;
    max-width: 300px;
    text-align: left;
    font-family: 'Roboto';
    background-color: #fffbfa;
  }
  .city-button {
    border-radius: 0;
    width: 200px;
    height: 50px;
    max-width: 300px;
    text-align: left;
    font-family: 'Roboto';
    background-color: #fffbfa;
  }
  .search-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 10rem;
    height: 50px;
    background-color: transparent;
    font-family: 'Roboto';
  }
  .dropdown-menu{
    background-color: #1b65a6;
    font-family: 'Roboto'; 
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
