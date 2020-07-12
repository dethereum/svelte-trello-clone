<script>
    import { Navbar, NavbarBrand } from 'sveltestrap';

    import src from '../../assets/images/cream.png';
</script>

<style>
    @media (max-width: 575px) {
        .responsive {
            width: 100%;
            max-width: 1.75em;
            height: auto;
        }
    }
    @media (min-width: 576px) and (max-width: 767px) {
        .responsive {
            width: 100%;
            max-width: 2.25em;
            height: auto;
        }
    }
    @media (min-width: 768px) and (max-width: 991px) {
        .responsive {
            width: 100%;
            max-width: 2.5em;
            height: auto;
        }
     }
    @media (min-width: 992px) and (max-width: 1199px) {
        .responsive {
            width: 100%;
            max-width: 2.75em;
            height: auto;
        }
     }
    @media (min-width: 1200px) {
        .responsive {
            width: 100%;
            max-width: 3em;
            height: auto;
        }
     }
</style>
    
<Navbar
    color="primary"
    dark={true}
    light={false}
    class="mb-2"
>
    <NavbarBrand href="/"><img class="responsive" {src} alt="Sally Brand">Sally</NavbarBrand>
</Navbar>
