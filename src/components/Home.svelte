<script>
  import { onMount } from "svelte";
  import { getPublicContent } from "../services/public.service";

  let responsePromise = getPublicContent();
</script>

<main>
  {#await responsePromise}
    <h3>...waiting</h3>
  {:then response}
    <h1>{response.data}</h1>
  {:catch error}
    <h3 style="color: red">
      {(error.response && error.response.data) || error.message}
    </h3>
  {/await}
</main>
