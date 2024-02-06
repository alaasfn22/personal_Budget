import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormater } from "./helper";
import { useBudgut } from "../context/useContext";
import { useState } from "react";
import BudgetModel from "./BudgetModel";
import { notify } from "./Toastify";
const BudgetCard = ({ name, id, amount, max, handleShowExpenses }) => {
    const { deleteBudgetById, updateBudgetById } = useBudgut()
    const classNamess = []
    if (amount > max) {
        classNamess.push("bg-danger", "bg-opacity-10")
    } else {
        classNamess.push("bg")
    }
    const [addbudgetID, setAddBudgtId] = useState();
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
    const openBudgetModel = (id) => {
        setAddBudgtId(id);
        setShowAddBudgetModal(true);
    };

    return (
        <Card className={classNamess}>
            <Card.Body className="shadow-sm">
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                    <h3 className="">{name}</h3>
                    <div className="d-flex align-items-baseline fw-medium">
                        {currencyFormater.format(amount)}
                        <span className="text-muted ">/{currencyFormater.format(max)}</span>
                    </div>
                </Card.Title>
                <Card.Text className="">
                    <ProgressBar
                        label={`${Math.round((amount / max) * 100)}%`}
                        variant={getPrograssbarVariant(amount, max)} now={amount} min={0} max={max} />
                    <div className="mt-4 d-flex justify-content-between align-items-center ">
                        <Button onClick={handleShowExpenses} variant="primary" className={amount >= max ? "disabled" : ""}>Add Expense</Button>{' '}
                        <Stack className="" direction="horizontal" gap={3} >
                            <Button onClick={
                                () => openBudgetModel(id)
                            } variant="primary">Edite</Button>{' '}
                            <Button onClick={() => deleteBudgetById(id, notify("Budget Deleted", "success"))} variant="danger">delete</Button>{' '}
                        </Stack>
                    </div>
                </Card.Text>
            </Card.Body>
            <BudgetModel
                show={showAddBudgetModal}
                handleClose={() => setShowAddBudgetModal(false)}
                budgetId={addbudgetID}
            />

        </Card>
    );
};

const getPrograssbarVariant = (amount, max) => {
    const ratio = amount / max;
    if (ratio < 0.5) return "primary";
    if (ratio < 0.75) return "warning";
    return "danger";
};

export default BudgetCard;
