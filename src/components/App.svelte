<script>
    import { Navbar, NavbarBrand } from 'sveltestrap';

    import src from '../../assets/images/cream.png';
</script>

<style>
    .responsive {
        max-width: 2rem;
    }
</style>
    
<Navbar color="primary" light class="mb-2 font-responsive font-weight-bold sticky-top">
    <div class="container">
        <NavbarBrand href="#">
            <img class="responsive d-inline-block align-top small" {src} alt="Sally Brand">
            Sally
        </NavbarBrand>
    </div>
</Navbar>
