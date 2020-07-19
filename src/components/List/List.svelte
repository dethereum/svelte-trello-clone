<script>
    import { Card } from "sveltestrap";

    import Header from './Header.svelte';

    let items = [
      'Dapibus ac facilisis in vicarius dracyarus harius',
      'Morbi leo risus',
      'Porta ac consectetur ac',
    ]

</script>

<style type="text/scss">
  button {
    @include font-size(0.9rem);
  }
</style>

<Card class="mt-3">
    <Header />
    <Card body>
        <div class="list-group list-group-flush text-left">
          {#each items as item}
            <button type="button" class="list-group-item list-group-item-action">{item}</button>
          {/each}
        </div>
    </Card>
</Card>