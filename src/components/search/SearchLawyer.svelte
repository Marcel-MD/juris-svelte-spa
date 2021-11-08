<script>
  export let type = "All";
  export let location = "All";
  let sort = "High Rating";

  console.log(type, location);
  function search() {
    console.log("Search", type, location, sort);
  }
</script>

<main>
  <div class="search-line" style="padding-top:50px">
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
    <select bind:value={sort} class="form-select city-button">
      <option value="Cheap">Cheap</option>
      <option value="Expensive">Expensive</option>
      <option value="High Rating">High Rating</option>
      <option value="Low Rating">Low Rating</option>
      <option value="All">All</option>
    </select>
    <button
      on:click={search}
      type="button"
      class="btn btn-lg btn-dark search-button rounded-right">Search</button
    >
  </div>
</main>

<style>
  .search-line {
    display: flex;
    justify-content: center;
  }
  .type-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 25vw;
    height: 50px;
    max-width: 300px;
    text-align: left;
    font-family: "Roboto";
  }
  .city-button {
    border-radius: 0;
    width: 25vw;
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
    font-family: "Roboto";
  }
  .search-button:hover {
    background-color: #1b65a6;
    color: white;
  }
</style>
