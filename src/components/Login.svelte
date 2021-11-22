<script>
  import { login } from "../services/auth.service";
  import { catchError } from "../services/error.service";

  let password = "";
  let email = "";
  let errorMessages = [];
  let loading = "";

  function signin() {
    errorMessages = [];
    loading = "Loading...";
    login(email, password).then(
      (response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location.href = "/";
        }
      },
      (error) => {
        errorMessages = catchError(error);
        loading = "";
      }
    );
  }
</script>

<main class="form-signin">
  <form>
    <img
      class="mb-4"
      src="/juris-md.png"
      alt=""
      width="200"
      height="200"
      style="margin-left: 3em;"
    />
    <h1 class="h3 mb-3 fw-normal">Login</h1>

    <div class="form-floating">
      <input
        bind:value={email}
        type="email"
        class="form-control"
        id="floatingInput"
      />
      <label for="floatingInput">Email Address</label>
    </div>
    <div class="form-floating">
      <input
        bind:value={password}
        type="password"
        class="form-control"
        id="floatingPassword"
      />
      <label for="floatingPassword">Password</label>
    </div>

    <button class="w-100 btn btn-lg btn-primary" type="button" on:click={signin}
      >Login</button
    >
    <div style="margin-top: 1em;" />
    {#if Array.isArray(errorMessages)}
      {#each errorMessages as message}
        <div class="alert alert-danger" role="alert">
          {message}
        </div>
      {/each}
    {:else if errorMessages}
      <div class="alert alert-danger" role="alert">
        {errorMessages}
      </div>
    {/if}
    {#if loading}
      <div class="alert alert-primary" role="alert">
        {loading}
      </div>
    {/if}
  </form>
</main>

<style>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-signin .form-floating:focus-within {
    z-index: 2;
  }

  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
