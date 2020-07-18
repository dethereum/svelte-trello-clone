<script>
    import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "sveltestrap";

    export let toggle = undefined;
    export let isOpen = false
</script>

<Dropdown group direction="right" {toggle} {isOpen}>
    <DropdownToggle color="light">
        <slot></slot>
    </DropdownToggle>
    <DropdownMenu>
        <DropdownItem header>Actions</DropdownItem>
        <DropdownItem>Add a Card...</DropdownItem>
    </DropdownMenu>
</Dropdown>