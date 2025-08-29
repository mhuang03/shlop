<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let { text }: { text: string } = $props();

  let spans: HTMLSpanElement[] = [];

  let rafID: number;
  let t = Math.random() * 2 * Math.PI;

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

<div class="wrapper" in:fade={{ duration: 1000 }} out:fade={{ duration: 1000 }}>
  {#each text as char, i}
    <span bind:this={spans[i]}>{char}</span>
  {/each}
</div>

<style>
  .wrapper {
    display: inline-flex;
    justify-content: center;
    gap: 0.08em;
    font-size: 6vw;
    filter: contrast(160%);
    will-change: transform, filter;
    white-space: pre;
    width: 100vw;
    line-height: 1;
  }

  span {
    display: inline-block;
  }
</style>
