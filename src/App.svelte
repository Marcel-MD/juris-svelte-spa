<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import { getCurrentUser, logout } from "./services/auth.service";

  import Login from "./components/Login.svelte";
  import Register from "./components/Register.svelte";
  import Home from "./components/Home.svelte";
  import SearchLawyer from "./components/search/SearchLawyer.svelte";
  import AdminAnalytics from "./components/admin/AdminAnalytics.svelte";
  import AdminDashboard from "./components/admin/AdminDashboard.svelte";
  import UpdateProfile from "./components/profile/UpdateProfile.svelte";
  import Profile from "./components/profile/Profile.svelte";
  import AppointmentDashboard from "./components/appointment/AppointmentDashboard.svelte";

  let user = getCurrentUser();
  let location = "";
  let type = "";

  function handleMessage(event) {
    location = event.detail.location;
    type = event.detail.type;
  }
</script>

<Router basepath={"/juris-svelte-spa"}>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top scrolling-navbar"
  >
    <div class="container">
      <Link to="/"
        ><div class="navbar-brand">
          <img src="../logo-pbl2.2.w.png" width="47" height="47" alt="logo" />
        </div></Link
      >
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
          <li class="nav-item">
            <Link to="search" class="nav-link">Search</Link>
          </li>
          {#if user}
            <li class="nav-item">
              <Link to="profile/{user.id}" class="nav-link">Profile</Link>
            </li>
            <li class="nav-item">
              <Link to="appointment-dashboard" class="nav-link">
                Appointments
              </Link>
            </li>
            {#if user.roles.includes("admin")}
              <li class="nav-item">
                <Link to="admin-dashboard" class="nav-link">Dashboard</Link>
              </li>
              <li class="nav-item">
                <Link to="analytics" class="nav-link">Analytics</Link>
              </li>
            {/if}
            <li class="nav-item">
              <Link
                to="login"
                class="nav-link"
                on:click={() => {
                  logout();
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

  <div style="margin-top: 5em;" />

  <div>
    <Route path="/"><Home on:message={handleMessage} /></Route>
    <Route path="search"><SearchLawyer {location} {type} /></Route>
    <Route path="login"><Login /></Route>
    <Route path="register"><Register /></Route>
    <Route path="profile/:id" let:params><Profile id={params.id} /></Route>
    <Route path="update-profile/:id" let:params>
      <UpdateProfile id={params.id} />
    </Route>
    <Route path="appointment-dashboard"><AppointmentDashboard /></Route>
    <Route path="admin-dashboard"><AdminDashboard /></Route>
    <Route path="analytics"><AdminAnalytics /></Route>
  </div>
</Router>
<footer>
  <p class="mt-5 mb-3 text-muted">&copy; 2021, Juris</p>
</footer>

<style>
  .navbar-nav {
    float: left;
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
    font-family: "Roboto";
  }
  footer {
    display: flex;
    justify-content: center;
    font-family: "Roboto";
    margin: 3em;
  }
</style>
