<script lang="ts">
  import Shlopoetry from "$lib/components/Shlopoetry.svelte";

  const shlopoem = [
    "everything is shlop",
    "nothing is shlop",
    "slop is shlop",
    "you are shlop",
    "i am shlop",
    "we are all shlop",
    "the universe is shlop",
    "life is shlop",
    "death is shlop",
    "existence is shlop",
    "non-existence is shlop",
    "reality is shlop",
    "illusion is shlop",
    "time is shlop",
    "space is shlop",
    "matter is shlop",
    "energy is shlop",
    "consciousness is shlop",
    "unconsciousness is shlop",
  ]
</script>

<h1>Shlop</h1>

<div class="hero">
  <Shlopoetry interval={3000} lines={shlopoem} />
  <Shlopoetry interval={200} lines={shlopoem} opacity={0.6} />
</div>

<style>
  .hero {
    display: flex; 
    justify-content: center;
  }
</style>
