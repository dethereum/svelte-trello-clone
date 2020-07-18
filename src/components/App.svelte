<script>
  import { Col, Container, Row } from "sveltestrap";

  import List from './List/List.svelte'
  import TopAppbar from './TopAppbar.svelte'

  let todos = [0,1,2,3,4,5,6,7];
</script>

<style>
  /* OVERRIDE BG-PRIMARY WITH ABSOLUTE ZERO || https://coolors.co/0047bb */
  :global(.bg-primary) {
    background-color: #0047BB !important;
  }
</style>

<TopAppbar /> 
<Container fluid>
  <Row class="justify-content-center justify-content-md-start">
    {#each todos as todo}
      <Col xs="10" sm="8" md="4" lg="3" xl="2">
        <List/>
      </Col>
    {/each}
  </Row>
</Container>
