<script>
    import { CardHeader, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "sveltestrap";
    import { media } from 'svelte-match-media'

    import Actions from "./Actions.svelte";

    let isOpen;
    
    function toggle() {
        isOpen = !isOpen
    }

    const path = {
        'fill-rule': "evenodd",
        'd': "M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    }

    const svg = {
        'width': "1em",
        'height': "1em",
        'viewBox': "0 0 16 16",
        'class': "bi bi-list",
        'fill': "currentColor",
        'xmlns': "http://www.w3.org/2000/svg"
    }
</script>

<CardHeader class="font-weight-bold d-flex align-items-center justify-content-between">
Done
{#if $media.mobile}
    <div on:click={toggle} class="btn btn-sm" role="button">
        <svg {...svg}> 
            <path {...path}/>
        </svg>
        <Actions {toggle} {isOpen}/>
    </div>
{:else}
    <Dropdown group direction="right" {toggle} {isOpen}>
        <DropdownToggle color="light">
            <svg {...svg}> 
                <path {...path}/>
            </svg>
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem header>Actions</DropdownItem>
            <DropdownItem>Add a Card...</DropdownItem>
        </DropdownMenu>
    </Dropdown>
{/if}
</CardHeader>