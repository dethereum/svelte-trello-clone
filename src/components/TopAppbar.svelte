<script>
  import { Navbar, NavbarBrand } from "sveltestrap";

  import src from "../../assets/images/cream.png";
</script>

<style type="text/scss">
  @include media-breakpoint-up(sm) {
    div > :global(a) {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  @include media-breakpoint-up(lg) {
    div > :global(a) {
      font-size: 1.4rem;
      font-weight: 200;
    }
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
