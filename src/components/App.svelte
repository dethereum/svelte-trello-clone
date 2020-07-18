<script>
  import { Col, Container } from "sveltestrap";

  import List from './List/List.svelte'
  import TopAppbar from './TopAppbar.svelte'

  let todos = [0,1,2,3,4,5,6,7];
</script>

<style>
  /* OVERRIDE BG-PRIMARY WITH ABSOLUTE ZERO || https://coolors.co/0047bb */
  :global(.bg-primary) {
    background-color: #0047BB !important;
  }

  /* Make Lists horizontally scrollable without the bar across browsers */
  @media (min-width: 768px) {
    .scrollable::-webkit-scrollbar {
      display: none;
    }

    .scrollable {
      overflow-x: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
</style>

<TopAppbar /> 
<Container fluid>
  <div id="" class="justify-content-center justify-content-md-start row flex-md-nowrap scrollable">
    {#each todos as todo}
      <Col xs="10" sm="8" md="4" lg="3" xl="2" class="ml-md-4 ml-xl-5">
        <List/>
      </Col>
    {/each}
  </div>
</Container>
