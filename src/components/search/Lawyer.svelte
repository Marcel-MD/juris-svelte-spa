<script>
  // export let id;
</script>

<main>
  <div class="card card-container">
    <img src="./sample-profile.png" alt="profile" />
    <div class="card-body">
      <h4 class="card-title h5 h4-sm">Left image</h4>
      <p class="card-text">Example text</p>
    </div>
  </div>
</main>

<style>
  .card {
    max-width: 800px;
    margin: 2em;
  }
  .card-container {
    flex-direction: row;
  }
  @media only screen and (max-width: 600px) {
    .card-container {
      flex-direction: column;
    }
  }
</style>
