<script>
  import { Navbar, NavbarBrand } from "sveltestrap";

  import src from "../../assets/images/cream.png";
</script>

<style>
  /* Make brand responsive */
  /* Extra small devices (portrait phones, less than 576px) */
  @media (max-width: 575px) {
    div > :global(a) {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    div > :global(a) {
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
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
