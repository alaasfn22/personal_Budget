import { useEffect, useRef } from "react"
import { useBudgut } from "../context/useContext"
import { notify } from "../components/Toastify"

const ExpensesModelHook = (infoByID, handleClose) => {
    const descriptionRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const dateRef = useRef()
    const { addExpense, budget, expenses, updateExpenseById } = useBudgut()
    function clearForm() {
        descriptionRef.current.value = ""
        amountRef.current.value = ""
        budgetIdRef.current.value = ""
        dateRef.current.value = ""
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (budgetIdRef.current.value === "0" ||
            amountRef.current.value < 0 ||
            descriptionRef.current.value === "" ||
            dateRef.current.value === "") {
            return notify(
                "Please fill all the fields",
                "warn"
            )
        } else {
            addExpense({
                description: descriptionRef.current.value,
                amount: parseFloat(amountRef.current.value),
                budgetId: budgetIdRef.current.value,
                date: dateRef.current.value
            })

            clearForm()

        }
        notify(
            "Expense Added",
            "success"
        )

        handleClose()
    }

    const getExpenseById = (id) => {
        return expenses.find(expense => expense.id === id)
    }
    let data = {}
    if (infoByID) {
        data = getExpenseById(infoByID)
    }

    useEffect(() => {
        if (infoByID) {
            descriptionRef.current.value = data.description
            amountRef.current.value = data.amount
            budgetIdRef.current.value = data.budgetId
            dateRef.current.value = data.date
        }
    }, [infoByID]);

    const handleUpdate = (e) => {
        e.preventDefault()
        if (budgetIdRef.current.value === "0" ||
            amountRef.current.value < 0 ||
            descriptionRef.current.value === "" ||
            dateRef.current.value === "") {
            return notify(
                "Please fill all the fields",
                "warn"
            )
        } else {
            updateExpenseById({
                id: infoByID,
                updateExpense: {
                    description: descriptionRef.current.value,
                    amount: parseFloat(amountRef.current.value),
                    budgetId: budgetIdRef.current.value,
                    date: dateRef.current.value
                }
            })

            handleClose()
            notify(
                "Expense Updated",
                "success"
            )
        }
    }


    return [
        descriptionRef,
        amountRef,
        budgetIdRef,
        dateRef,
        handleSubmit,
        handleUpdate,
        budget]
}

export default ExpensesModelHook