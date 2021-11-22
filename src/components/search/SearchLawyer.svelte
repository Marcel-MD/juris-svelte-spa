<script>
  import Lawyer from "./Lawyer.svelte";
  import { catchError } from "../../services/error.service";
  import { getProfiles } from "../../services/profile.service";
  import { getTypes, getSectors } from "../../services/enum.service";

  export let type = "";
  export let location = "";
  let page = 1;
  let nrOfPages = 1;
  let rating = "";
  let price = "";

  let profileList = [];
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

  function search() {
    getProfiles(page, type, location, price, rating).then(
      (response) => {
        profileList = response.data.data;
        nrOfPages = Math.ceil(response.data.total / 4);
      },
      (error) => {
        errorMessage = catchError(error);
      }
    );
  }

  search();

  let sort = "no sort";
  function handleSortOption() {
    let words = sort.split(" ");

    switch (words[0]) {
      case "price":
        price = words[1];
        rating = "";
        break;
      case "rating":
        rating = words[1];
        price = "";
        break;
      default:
        price = "";
        rating = "";
    }
  }

  function nextPage() {
    if (page + 1 > nrOfPages) {
      return;
    }

    page = page + 1;
    search();
  }

  function previousPage() {
    if (page - 1 < 1) {
      return;
    }

    page = page - 1;
    search();
  }

  function goToPage(pageNumber) {
    page = pageNumber;
    search();
  }
</script>

<main>
  <div class="search-line" style="padding-top:2em">
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
    <select
      bind:value={sort}
      on:change={handleSortOption}
      class="form-select city-button"
    >
      <option value="price ASC">Price Asc</option>
      <option value="price DESC">Price Desc</option>
      <option value="rating ASC">Rating Asc</option>
      <option value="rating DESC">Rating Desc</option>
      <option value="no sort">-</option>
    </select>
    <button
      on:click={search}
      type="button"
      class="btn btn-lg btn-dark search-button rounded-right">Search</button
    >
  </div>

  {#if errorMessage}
    <div class="alert alert-danger" role="alert">
      {errorMessage}
    </div>
  {/if}

  <div class="profileList">
    {#each profileList as profile}
      <Lawyer {...profile} />
    {/each}

    <ul class="pagination">
      <li class="page-item" on:click={previousPage}>
        <div class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </div>
      </li>
      {#each Array(nrOfPages) as _, i}
        <li
          class="page-item{page == i + 1 ? ' active' : ''}"
          on:click={() => goToPage(i + 1)}
        >
          <div class="page-link">{i + 1}</div>
        </li>
      {/each}
      <li class="page-item" on:click={nextPage}>
        <div class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </div>
      </li>
    </ul>
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
  .alert {
    max-width: 600px;
    margin: 1em auto;
  }
  .profileList {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .page-link {
    cursor: pointer;
  }
</style>
