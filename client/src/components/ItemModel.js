import {
    Button,
    Modal,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input,
    ModalBody
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemAction';
import React, { Component } from 'react'

 class ItemModel extends Component {
     state = {
         model: false,
         name: ''
     }

     toggle = () => {
        this.setState({model: !this.state.model})
     }

     onChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }

     onSubmit = (e) => {
        e.preventDefault();

        const newItem = {

            name: this.state.name
        }

        this.props.addItem(newItem)

        this.toggle();
     }

    render() {
        return (
            <div>
                <Button 
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}
                >Add Item</Button>

                <Modal
                    isOpen={this.state.model}
                    toggle={this.toggle}
                >
                <ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input 
                                type="text"
                                name="name"
                                id="item"
                                placeholder="add shpoiing item"
                                onChange={this.onChange}
                            />
                            <Button
                                color="dark"
                                style={{marginBottom: '2rem'}}
                                block
                            >
                                Add Item
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
                </Modal>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item 
})

export default connect(mapStateToProps, { addItem })(ItemModel);