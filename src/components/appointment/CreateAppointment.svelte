<script>
  export let userId;
  let email = "";
  let fname = "";
  let lname = "";
  let phone = "";
  let description = "";

  function appointment() {
    console.log("Noice");
  }
</script>

<main>
  <div class="card">
    <div class="card-body">
      <form class="row g-3" on:submit|preventDefault={appointment}>
        <div class="col-md-6">
          <label for="validationDefault01" class="form-label">First name</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            bind:value={fname}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefault02" class="form-label">Last name</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            bind:value={lname}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefaultEmail" class="form-label">Email</label>
          <div class="input-group">
            <input
              type="email"
              class="form-control"
              id="validationDefaultEmail"
              bind:value={email}
              required
            />
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationDefault03" class="form-label"
            >Phone number</label
          >
          <input
            type="tel"
            class="form-control"
            id="validationDefault03"
            bind:value={phone}
            required
          />
        </div>
        <div class="col-12">
          <label for="validationDefault04" class="form-label"
            >Problem description</label
          >
          <textarea
            class="form-control"
            id="validationDefault04"
            rows="3"
            bind:value={description}
            required
          />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Make Appointment</button
          >
        </div>
      </form>
    </div>
  </div>
</main>

<style>
  .card {
    max-width: 600px;
  }
</style>
