<script>
    import { CardHeader } from "sveltestrap";

    import Actions from "./Actions.svelte";

    let hovering;
    let isOpen;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
    }
    
    function toggle() {
        hovering = false;
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

<style>
    .active {
		background-color: #000000;
	}
</style>

<CardHeader class="font-weight-bold d-flex align-items-center justify-content-between">
Done
<div class:active={hovering} on:mouseenter={enter} on:mouseleave={leave} on:click={toggle}>
    <svg {...svg}> 
        <path {...path}/>
    </svg>
    <Actions {toggle} {isOpen}/>
</div>
</CardHeader>