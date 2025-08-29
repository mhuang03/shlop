<script lang="ts">
  import { onMount } from "svelte";
  import ShloppyText from "./ShloppyText.svelte";

  let {
    interval,
    lines,
    opacity = 1,
  }: {
    interval: number;
    lines: string[];
    opacity?: number;
  } = $props();

  let index = $state(0);

  onMount(() => {
    const timer = setInterval(() => {
      index = (index + 1) % lines.length;
    }, interval);

    return () => clearInterval(timer);
  });
</script>
<div class="cycler" style="opacity:{opacity}">
  <div class="spacer">
    <ShloppyText text={lines[index]} />
  </div>

  {#key lines[index]}
    <div class="slide">
      <ShloppyText text={lines[index]} />
    </div>
  {/key}
</div>

<style>
  .cycler {
    position: relative;
    display: inline-block;
  }

  .spacer {
    visibility: hidden;
  }

  .slide {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
