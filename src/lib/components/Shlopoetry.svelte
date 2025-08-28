<script lang="ts">
  import { onMount } from 'svelte';
  import ShloppyText from './ShloppyText.svelte';

  let { interval = 400, lines }: { interval: number; lines: string[] } = $props();

  let index = $state(0);

  onMount(() => {
    const timer = setInterval(() => {
      index = (index + 1) % lines.length;
    }, interval);

    return () => clearInterval(timer);
  });
</script>

<span>
  {#key lines[index]}
    <ShloppyText text={lines[index]} />
  {/key}
</span>
