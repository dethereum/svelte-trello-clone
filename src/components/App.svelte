<script>
  import TopAppbar from './TopAppbar.svelte'
</script>

<style>
  /* OVERRIDE BG-PRIMARY WITH ABSOLUTE ZERO || https://coolors.co/0047bb */
  :global(.bg-primary) {
    background-color: #0047BB !important;
  }
</style>

<TopAppbar /> 
