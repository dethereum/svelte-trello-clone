<script>
    import { Card } from "sveltestrap";

    import Header from './Header.svelte';

    export let name = '';
    export let todos = [];
    export let allTodos = [];


</script>

<style type="text/scss">
  button {
    @include font-size(0.9rem);
  }

  .card-body {
    @include media-breakpoint-between(xs, md) {
      padding: 0.25rem;
    }
  }

  .list-group {
    overflow-y: auto;
    max-height: 75vh;
    @include media-breakpoint-between(xs, md) {
      height: 30vh;
    }
    @include media-breakpoint-up(md) {
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
</style>

<Card class="mt-3">
    <Header {name}/>
    <div class="card card-body">
        <div class="list-group list-group-flush text-left">
          {#each todos as todo}
            <button type="button" class="list-group-item list-group-item-action">{allTodos.find(({id}) => id == todo).name}</button>
          {/each}
        </div>
    </div>
</Card>