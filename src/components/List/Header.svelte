<script>
    import { CardHeader } from "sveltestrap";
    import { media } from 'svelte-match-media'

    import Modal from "./ActionsModal.svelte";
    import Menu from "./ActionsMenu.svelte";
    import Icon from "./ActionsIcon.svelte";

    export let name = '';
    let isOpen;
    
    function toggle() {
        isOpen = !isOpen
    }
</script>

<CardHeader class="font-weight-bold d-flex align-items-center justify-content-between">
{name}
{#if $media.mobile}
    <Modal {toggle} {isOpen}>
        <Icon />
    </Modal>
{:else}
    <Menu {toggle} {isOpen}>
        <Icon />
    </Menu>
{/if}
</CardHeader>