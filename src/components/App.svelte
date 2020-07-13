<script>
    import { Navbar, NavbarBrand } from 'sveltestrap';

    import src from '../../assets/images/cream.png';
</script>

<style>
    .img-mw {
        max-width: 2rem;
    }
</style>
    
<Navbar color="primary" light class="mb-2 font-responsive font-weight-bold sticky-top">
    <div class="container">
        <NavbarBrand href="#">
            <img class="img-mw d-inline-block align-middle" {src} alt="Sally Brand">
            Sally
        </NavbarBrand>
    </div>
</Navbar>
