<script lang="ts">
  import { encryptPath } from "$lib/link_utils";

  const { href, children } = $props();
  const encryptedPathPromise = encryptPath(href);
</script>

{#if href == "/"}
  <a {href}>{@render children?.()}</a>
{:else}
  {#await encryptedPathPromise}
    <a {href}>{@render children?.()}</a>
  {:then path}
    <a href={path}>{@render children?.()}</a>
  {/await}
{/if}
