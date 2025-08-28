<script lang="ts">
  import { onMount } from "svelte";

  let { text }: { text: string } = $props();
  let spans: HTMLSpanElement[] = [];

  let rafID: number;
  let t = 0;

  function animate() {
    t = (t + 0.01) % (2 * Math.PI);
    spans.forEach((span, i) => {
      const wave = Math.sin(t + i * 0.5);
      const scaleY = 1 + wave * 0.3;
      const scaleX = 1 - wave * 0.2;
      const y = wave * 10;

      span.style.transform = `translateY(${y}px) scale(${scaleX}, ${scaleY})`;
    });

    rafID = requestAnimationFrame(animate);
  }

  onMount(() => {
    animate();
    return () => cancelAnimationFrame(rafID);
  });
</script>

<div class="wrapper">
  {#each text as char, i}
    <span bind:this={spans[i]}>{char}</span>
  {/each}
</div>

<style>
  .wrapper {
    display: flex;
    gap: 0.05em;
    font-size: 5rem;
    filter: contrast(160%);
    will-change: transform, filter;
  }
</style>
