<script>
  import { Col, Container, Row } from "sveltestrap";

  import List from './List/List.svelte'
  import TopAppbar from './TopAppbar.svelte'
</script>

<style>
  /* OVERRIDE BG-PRIMARY WITH ABSOLUTE ZERO || https://coolors.co/0047bb */
  :global(.bg-primary) {
    background-color: #0047BB !important;
  }
</style>

<TopAppbar /> 
<Container fluid>
  <Row class="justify-content-center">
    <Col xs="10">
      <List/>
    </Col>
  </Row>
</Container>
