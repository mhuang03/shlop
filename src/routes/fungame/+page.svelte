<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://not-fl3.github.io/miniquad-samples/mq_js_bundle.js';
    script.onload = () => {
      if (typeof load === 'function') {
        load('/fungame.wasm');
      }
    };
    document.head.appendChild(script);
  });
</script>

<svelte:head>
  <title>TITLE</title>
</svelte:head>

<div class="fungame-container">
  <canvas id="glcanvas" tabindex="1"></canvas>
</div>

<style>
  .fungame-container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    background: black;
    z-index: 0;
  }
  .fungame-container :global(canvas) {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
