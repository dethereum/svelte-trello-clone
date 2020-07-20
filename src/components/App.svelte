<script>
  import { onMount } from 'svelte';
  import { Col, Container } from "sveltestrap";

  import List from './List/List.svelte'
  import TopAppbar from './TopAppbar.svelte'

  let isLoading = true;
  let boards = [];
  let allTodos = [];

  onMount(async () => {
    const networkResponse = await fetch('/api/boards');
    const res = await networkResponse.json();

    boards = res.boards;
    allTodos = res.todos;
    isLoading = false;
  });
</script>

<style type="text/scss">
  .scrollable {
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

<TopAppbar /> 
<Container fluid>
  <div id="" class="justify-content-center flex-column flex-md-row justify-content-md-start row flex-md-nowrap scrollable">
    {#each boards as { name, todos }}
      <Col 
        xs={{ size: 10, offset: 1 }} 
        sm={{ size: 6, offset: 3 }} 
        md="4" 
        xl="3" 
        class="mb-5 mb-sm-4 ml-md-4 ml-xl-5 col-xxl-2">
        <List {name} {todos} {allTodos}/>
      </Col>
    {/each}
  </div>
</Container>
