<script>
  import { Navbar, NavbarBrand } from "sveltestrap";

  import src from "../../assets/images/cream.png";
</script>

<style type="text/scss">
  div {
    @include rfs(3rem);
  }
  
  img {
    max-width: 2rem;
  }
</style>

<Navbar color="primary" dark class="mb-2 sticky-top">
  <div class="container">
    <NavbarBrand>
      <img class="d-inline-block align-middle" {src} alt="Sally Brand" />
      Sally
    </NavbarBrand>
  </div>
</Navbar>
