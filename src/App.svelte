<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Login from "./components/Login.svelte";
  import Register from "./components/Register.svelte";
  import Home from "./components/Home.svelte";
  import { getCurrentUser, logout } from "./services/auth.service";

  let user = getCurrentUser();
</script>

<Router>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <Link to="/"><div class="navbar-brand">Juris.md</div></Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link to="/" class="nav-link">Home</Link>
          </li>
          {#if user}
            <li class="nav-item">
              <Link
                to="login"
                class="nav-link"
                on:click={() => {
                  logout;
                  user = null;
                }}>Logout</Link
              >
            </li>
          {:else}
            <li class="nav-item">
              <Link to="login" class="nav-link">Login</Link>
            </li>
            <li class="nav-item">
              <Link to="register" class="nav-link">Register</Link>
            </li>
          {/if}
        </ul>
      </div>
    </div>
  </nav>

  <div style="margin-top: 4em;" />

  <div>
    <Route path="/"><Home /></Route>
    <Route path="login"><Login /></Route>
    <Route path="register"><Register /></Route>
  </div>
</Router>
<footer>
  <p class="mt-5 mb-3 text-muted">&copy; 2021, Juris</p>
</footer>

<style>
</style>
