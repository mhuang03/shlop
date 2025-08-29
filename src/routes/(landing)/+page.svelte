<script lang="ts">
  import "@fontsource/coral-pixels";
  import Link from "$lib/components/Link.svelte"
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

<svelte:head>
  <style>
    @import "./landing.css";
  </style>
</svelte:head>


<div>
  <h1>Shlop</h1>

  <div class="hero-row">
    <div class="hero-layer">
     <Shlopoetry interval={4000} lines={shlopoem} />
    </div>
    <div class="hero-layer">
      <Shlopoetry interval={300} lines={shlopoem} opacity={0.6} />
    </div>
  </div>

  <Link href="/units">Unit Creator</Link>
</div>