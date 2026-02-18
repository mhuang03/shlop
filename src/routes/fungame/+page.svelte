<svelte:head>
  <title>fungame</title>
</svelte:head>

<div class="fungame-container">
  <a href="/" class="back-link">← Home</a>
  <iframe
    class="fungame-iframe"
    title="Fun Game"
    src="/fungame.html"
  />
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
  .fungame-iframe {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
  }
  .back-link {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    z-index: 1;
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    padding: 0.35rem 0.6rem;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0.25rem;
  }
  .back-link:hover {
    background: rgba(0, 0, 0, 0.75);
  }
</style>
