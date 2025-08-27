<script lang="ts">
  import { onMount } from 'svelte';

  let { interval = 400, lines }: { interval: number, lines: string[] } = $props();

  let index = $state(0);
  let words = $derived(lines[index].split(' '));
  
  onMount(() => {
    const timer = setInterval(() => {
      index = (index + 1) % lines.length;
    }, interval);

    return () => clearInterval(timer);
  });
</script>

<span>
  {#each words as word}
    <span>{word + ' '}</span>
  {/each}
</span>
