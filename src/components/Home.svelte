<script>
  import { onMount } from "svelte";
  import { getPublicContent } from "../services/public.service";

  let responsePromise = getPublicContent();
</script>

<main>
  {#await responsePromise}
    <h>...waiting</h>
  {:then response}
    <h>{response.data}</h>
  {:catch error}
    <h style="color: red">
      {(error.response && error.response.data) || error.message}
    </h>
  {/await}
</main>
