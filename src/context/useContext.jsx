import { createContext, useContext } from "react";
import { v4 as uuidv4 } from 'uuid'
import { useLocalStorage } from "../Hooks/useLocalStorageHook";

const budgetContext = createContext()
export function useBudgut() {
    return useContext(budgetContext)
}
const BudgetContext = ({ children }) => {
    const [budget, setBudget] = useLocalStorage("budget", [])
    const [expenses, setExpenses] = useLocalStorage("expenses", [])
    const addBudget = ({ name, max }) => {
        setBudget((prev) => {
            if (prev.find((budget) => budget.name === name)) {
                return prev
            }
            return [...prev, { id: uuidv4(), name, max }]
        })
    }
    function addExpense({ description, amount, budgetId, date }) {
        setExpenses(prevExpenses => {
            return [...prevExpenses, { id: uuidv4(), description, amount, budgetId, date }]
        })
    }
    const updateExpenseById = ({ id, updateExpense }) => {
        setExpenses(expenses.map(expense => expense.id === id ? { ...expense, ...updateExpense } : expense))
        console.log(updateExpense)
    }
    const updateBudgetById = ({ id, updateBudget }) => {
        setBudget(budget.map(budget => budget.id === id ? { ...budget, ...updateBudget } : budget))
    }
    function getBudgetExpenses(budgetId) {
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
    const deleteExpenses = ({ expenseId }) => {
        setExpenses((prev) => {
            return prev.filter((expense) => expense.id !== expenseId)
        })
    }
    const deleteBudgetById = (id) => {
        setBudget((prev) => {
            return prev.filter((budget) => budget.id !== id)
        })
        setExpenses((prev) => {
            return prev.filter((expense) => expense.budgetId !== id)
        })
    }


    return (
        <budgetContext.Provider value={{ budget, expenses, addBudget, deleteBudgetById, updateBudgetById, addExpense, updateExpenseById, deleteExpenses, getBudgetExpenses }}>
            {children}
        </budgetContext.Provider>
    )
}

export default BudgetContext