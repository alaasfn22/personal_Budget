import { Form, Modal, Button } from "react-bootstrap"
import ExpensesModelHook from "../Hooks/ExpensesModelHook"

export default function AddExpenseModal({ show, handleClose, defaultBudgetId, infoByID }) {
    const [descriptionRef, amountRef, budgetIdRef, dateRef, handleSubmit, handleUpdate, budget] = ExpensesModelHook(infoByID, handleClose)

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={infoByID ? handleUpdate : handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            ref={amountRef}
                            type="number"
                            step="0.5"

                            min={0}

                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            ref={dateRef}
                            type="date"


                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="budgetId">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select defaultValue={defaultBudgetId} ref={budgetIdRef}>
                            <option value={0} >Selecte Budget</option>
                            {budget.map(budget => (
                                <option key={budget.id} value={budget.id}>
                                    {budget.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">
                            {
                                infoByID ? "Update" : "Add"
                            }
                        </Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}