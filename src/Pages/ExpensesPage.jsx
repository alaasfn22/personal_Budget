import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AllExpensesTable from '../components/AllExpensesTable'
import SideBar from '../components/SideBar'
import AddExpenseModal from '../components/ExpensesModel'
import { ToastContainer } from 'react-toastify';

const ExpensesPage = () => {
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);

    const handleShowExpenses = () => setShowAddExpenseModal(true);

    return (
        <div>
            <Row className='m-0 flex-nowrap'>
                <Col className='col-2 p-0 m-0'>
                    <SideBar />
                </Col>
                <Col className='col-10 '>

                    <AllExpensesTable
                        handleShowExpenses={handleShowExpenses} />
                </Col>


            </Row>
            <ToastContainer />

        </div>
    )
}

export default ExpensesPage