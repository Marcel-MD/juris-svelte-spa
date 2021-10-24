<script>
  import { getCurrentUser } from "../../services/auth.service";
  export let id = getCurrentUser().id;
</script>

<main>
  <h1>Appointment Dashboard {id}</h1>
</main>

<style>
</style>
