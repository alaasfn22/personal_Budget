import { useEffect, useRef } from "react";
import { useBudgut } from "../context/useContext";
import { notify } from "../components/Toastify";

const BudgetModelHooks = (budgetId, handleClose) => {
    const nameRef = useRef();
    const maxRef = useRef();
    const { budget, addBudget, updateBudgetById } = useBudgut();
    function getBudetDataByID(id) {
        return budget.find((budget) => budget.id === id)
    }

    let budetData = {}
    if (budgetId) {
        budetData = getBudetDataByID(budgetId)
    }
    useEffect(() => {
        if (budgetId) {
            nameRef.current.value = budetData.name
            maxRef.current.value = budetData.max
        }
    }, [budgetId]);
    const handelSubmite = (e) => {
        e.preventDefault();
        if (maxRef.current.value < 0) {
            return notify("Please Enter The Maximum Spending", "warn")
        } else if (nameRef.current.value === "") {
            return notify("Please Enter The Name", "warn")
        } else
            addBudget(
                {
                    name: nameRef.current.value,
                    max: parseFloat(maxRef.current.value)
                });

        handleClose();
        notify(
            "Budget Added",
            "success"
        )
    }
    const updateBudget = (e) => {
        e.preventDefault();
        if (maxRef.current.value < 0) {
            return notify("Please Enter The Maximum Spending", "warn")
        } else if (
            nameRef.current.value === ""
        ) {
            return notify("Please Enter The Name", "warn")
        } else
            updateBudgetById({
                id: budgetId,
                updateBudget: {
                    name: nameRef.current.value,
                    max: parseFloat(maxRef.current.value)
                }
            });
        handleClose();
        notify(
            "Budget Updated",
            "success"
        )
    }
    return [
        nameRef,
        maxRef,
        handelSubmite,
        updateBudget
    ]
}

export default BudgetModelHooks