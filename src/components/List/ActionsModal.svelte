<script>
    import { Modal, ModalHeader, ModalBody, Col, Container, Row } from "sveltestrap";

    export let toggle = undefined;
    export let isOpen = false

    function onClick(){
        console.log("CLICKED A BUTTON!")
        toggle()
    }
</script>

<div on:click={toggle} class="btn btn-sm" role="button">
    <slot></slot>
    <Modal {isOpen} centered scrollable contentClassName="vh-100 my-3" >
        <ModalHeader {toggle} >
            <h5 class="text-center font-weight-bold">Actions</h5>
        </ModalHeader>
        <ModalBody>
            <Container fluid>
                <Row class="justify-content-center">
                  <Col xs="12" >
                    <div class="font-weight-normal" on:click={onClick}>
                        Add a Card...
                    </div>
                  </Col>
                </Row>
              </Container>
        </ModalBody>
    </Modal>
</div>