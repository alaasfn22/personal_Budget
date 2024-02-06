import { useEffect, useRef } from 'react';
import { Button, Form, Modal } from 'react-bootstrap'
import BudgetModelHooks from '../Hooks/BudgetModelHooks';

const BudgetModel = ({ show, handleClose, budgetId }) => {
    const [nameRef, maxRef, handelSubmite, updateBudget] = BudgetModelHooks(budgetId, handleClose)

    return (
        <Modal show={show} onHide={handleClose}  >
            <Modal.Header closeButton>
                <Modal.Title className='ms-auto'>New Budget</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type='text' required placeholder="Enter The Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Maximum Spending</Form.Label>
                    <Form.Control ref={maxRef} type='number' step={0.5} required placeholder="0" min={0} />
                </Form.Group>
                <div className='d-flex justify-content-end'>
                    <Button variant='primary' onClick={budgetId ? updateBudget : handelSubmite} >{
                        budgetId ? 'Update Budget' : 'Add Budget'}</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default BudgetModel