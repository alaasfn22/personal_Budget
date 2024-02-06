
import BudgetCard from "../components/Card";
import Header from "../components/Header";
import { Col, Row } from "react-bootstrap";
import SideBar from "../components/SideBar";
import AddExpenseModal from "../components/ExpensesModel";
import BudgetModel from "../components/BudgetModel";
import DataNull from "../components/DataNull";
import { ToastContainer } from 'react-toastify';
import HomeHook from "../Hooks/HomeHook";


const Home = () => {
    const [
        budget,
        getBudgetExpenses,
        deleteBudget,
        showAddBudgetModal,
        setShowAddBudgetModal,
        showAddExpenseModal,
        setShowAddExpenseModal,
        addExpenseModalBudgtId,
        setAddExpenseModalBudgtId,
        handleShow,
        openExpenseModel
    ] = HomeHook()


    return (
        <div>
            <Row className="m-0 p-0">
                <Col className="col-2 p-0">
                    <SideBar />
                </Col>
                <Col className="col-10 m-0 ">
                    <div className="">
                        <Header
                            handleShow={handleShow}
                            handleShowExpenses={openExpenseModel}
                        />
                        {
                            budget.length > 0 ? (
                                <div className="budget_Container">
                                    {budget.map((budget) => {
                                        return (
                                            <BudgetCard
                                                handleShowExpenses={() => openExpenseModel(budget.id)}
                                                deleteBudget={() => deleteBudget({ budgetId: budget.id })}
                                                key={budget.id}
                                                id={budget.id}
                                                name={budget.name}
                                                amount={getBudgetExpenses(budget.id).reduce(
                                                    (total, expense) => total + expense.amount,
                                                    0
                                                )}

                                                max={budget.max}
                                            />
                                        );
                                    })}
                                </div>
                            ) :
                                <DataNull name="Empty Budget   " />

                        }
                    </div>
                </Col>
            </Row>
            <AddExpenseModal
                defaultBudgetId={addExpenseModalBudgtId}
                show={showAddExpenseModal}
                handleClose={() => setShowAddExpenseModal(false)}
            />
            <BudgetModel
                show={showAddBudgetModal}
                handleClose={() => setShowAddBudgetModal(false)}
            />
            <ToastContainer />
        </div>
    );
};

export default Home;
