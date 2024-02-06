import { Button, Stack } from "react-bootstrap"
import { useBudgut } from "../context/useContext"
import { currencyFormater } from "./helper"
const Header = ({ handleShow, handleShowExpenses }) => {
    const { budget, expenses } = useBudgut()
    const totalExpenses = expenses.map(
        (expense) => expense.amount
    ).reduce((a, b) => {
        return a + b
    }, 0)

    const totalBudget = budget.map(
        (budget) => budget.max
    ).reduce((a, b) => {
        return a + b
    }, 0)


    return (
        <div className="d-flex justify-content-center justify-content-md-between align-items-center border-bottom flex-wrap">
            {
                totalBudget !== 0 && <Stack className="d-flex justify-content-between align-baseline p-2" direction="horizontal" gap={3}>
                    <div className="d-flex align-items-center">
                        <h3 className="text-primary"> Total:</h3>
                        <p className="m-0 fs-5 ms-2 bg-primary p-2 rounded-5 text-white"> {currencyFormater.format(totalExpenses)} / {currencyFormater.format(totalBudget)}</p>
                    </div>

                </Stack>
            }
            <Stack className="d-flex justify-content-center justify-content-md-end align-baseline  p-2" direction="horizontal" gap={3}>
                <div className="">
                    <Button variant="primary" onClick={handleShow} className="me-2">Add Budget</Button>{' '}
                    <Button variant="outline-primary" onClick={handleShowExpenses}>Add Expense</Button>{' '}
                </div>
            </Stack>
        </div>
    )
}

export default Header