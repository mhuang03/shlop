<script lang="ts">
  import { onMount } from "svelte";
  import ShloppyText from "./ShloppyText.svelte";

  let { interval, lines, opacity = 1 }: { interval: number; lines: string[]; opacity?: number } = $props();

  let index = $state(0);

  onMount(() => {
    const timer = setInterval(() => {
      index = (index + 1) % lines.length;
    }, interval);

    return () => clearInterval(timer);
  });
</script>

<span class="cycler" style="opacity: {opacity}">
  {#key lines[index]}
    <ShloppyText text={lines[index]}/>
  {/key}
</span>

<style>
  .cycler {
    position: relative;
    display: inline-block;
  }

  .cycler > :global(*) {
    position: absolute;
    inset: 0;
  }
</style>
