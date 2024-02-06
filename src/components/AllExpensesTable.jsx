import DataTable from 'react-data-table-component';
import AddExpenseModal from './ExpensesModel';
import ExbesnsesTableHook from '../Hooks/ExbesnsesTableHook';
import DataNull from './DataNull';
import { useState } from 'react';
import ReactPaginate from 'react-paginate'
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function AllExpensesTable() {


    const [
        columns,
        pending,
        showAddExpenseModal,
        setShowAddExpenseModal,
        exensiveModelId,
        setExensiveModelId,
        budget,
        expenses,
        deleteExpenses
    ] = ExbesnsesTableHook()
    const limit = 4;
    const [current, setCurrent] = useState(1)
    const NbPage = Math.ceil(expenses.length / limit)
    const startIndx = (current - 1) * limit;
    const endIndx = current * limit
    const pageData = expenses.slice(startIndx, endIndx)

    const handlePageClick = (data) => {
        setCurrent(data.selected + 1)
    };


    return (
        <>
            {
                expenses.length > 0 ?
                    <DataTable
                        columns={columns}
                        title="All Expenses"
                        data={
                            pageData?.map((expense, index) => ({
                                uniqId: index + 1,
                                id: expense.id,
                                category: budget.find((bud) => bud.id === expense.budgetId)?.name,
                                budget: budget.find((bud) => bud.id === expense.budgetId)?.max,
                                date: expense.date,
                                description: expense.description,
                                title: expense.description,
                                amount: expense.amount
                            })
                            )
                        }
                        progressPending={pending}
                        highlightOnHover={true}
                        // pagination
                        fixedHeader
                        fixedHeaderScrollHeight="68vh"
                        subHeader

                    />
                    :
                    <DataNull name="No Expenses" />

            }
            <AddExpenseModal
                show={showAddExpenseModal}
                infoByID={exensiveModelId}
                handleClose={() => setShowAddExpenseModal(false)}
            />
            {/* <div className='d-flex justify-content-center'>
                {
                    Array.from({ length: NbPage }, (_, i) => i + 1).map((num) => {
                        return (
                            <button
                                key={num}
                                className={`btn rounded-pill ${current === num ? 'active' : ''}`}
                                onClick={() => setCurrent(num)}
                            >
                                {num}
                            </button>
                        )
                    })
                }
            </div> */}
            <div dir='ltr' className='py-4'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<FontAwesomeIcon icon={faAnglesRight} />}
                    onPageChange={handlePageClick}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    pageCount={NbPage}
                    previousLabel={<FontAwesomeIcon icon={faAnglesLeft} />}
                    containerClassName={"pagination justify-content-center flex-wrap p-0 m-0"}
                    pageClassNam={"page-item"}
                    pageLinkClassName={"page-link "}
                    nextLinkClassName={"page-link nextLink "}
                    previousLinkClassName={"page-link nextLink  "}
                    nextClassName={"page-item text-center  "}
                    previousClassName={"page-item text-center "}
                    breakClassName={"page-item "}
                    breakLinkClassName={"page-link break-link"}
                    activeLinkClassName={"active a"}

                />
            </div>

        </>
    );
}

export default AllExpensesTable