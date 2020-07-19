<script>
  import { Col, Container } from "sveltestrap";

  import List from './List/List.svelte'
  import TopAppbar from './TopAppbar.svelte'

  let todos = [0,1,2,3,4,5,6,7];
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
    {#each todos as todo}
      <Col 
        xs={{ size: 10, offset: 1 }} 
        sm={{ size: 6, offset: 3 }} 
        md="4" 
        xl="3" 
        class="mb-5 mb-sm-4 ml-md-4 ml-xl-5 col-xxl-2">
        <List/>
      </Col>
    {/each}
  </div>
</Container>
