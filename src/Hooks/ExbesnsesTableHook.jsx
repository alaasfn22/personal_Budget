import { useEffect, useState } from "react";
import { useBudgut } from "../context/useContext";
import { notify } from "../components/Toastify";

const ExbesnsesTableHook = () => {
    const columns = [
        {
            name: "#",
            selector: row => row.uniqId,
            sortable: true,
        },
        {
            name: "Title",
            selector: row => <h6> {row.title}</h6>,

        },
        {
            name: "Date",
            selector: row => <h6> {row.date}</h6>,
            sortable: true,

        },
        {
            name: "Category",
            selector: row => <h6>{row.category}</h6>,

        },
        {
            name: "budget",
            selector: row => <div className=''><h6>{row.budget}</h6></div>,
        },
        {
            name: "amount",
            selector: row => <h6>{row.amount}</h6>,
            sortable: true,
        },
        {
            name: "Edit",
            cell: row => <button
                onClick={(e) => { onClickEdit(e, row.id) }
                }
                className="btn btn-primary" >Edit</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
        {
            name: "Delete",
            cell: row => <button
                onClick={(e) => {
                    handelDeleted(e, row.id)
                }}
                className="btn btn-danger">Delete</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        }
    ];
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [exensiveModelId, setExensiveModelId] = useState();

    const onClickEdit = (e, id) => {
        e.preventDefault()
        setShowAddExpenseModal(true)
        setExensiveModelId(id)

    }
    const handelDeleted = (e, id) => {
        e.preventDefault()
        deleteExpenses({ expenseId: id })
        notify(
            "Expense Deleted",
            "success"
        )
    }
    const [pending, setPending] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPending(false);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);
    const { budget, expenses, deleteExpenses } = useBudgut()
    return [
        columns,
        pending,
        showAddExpenseModal,
        setShowAddExpenseModal,
        exensiveModelId,
        setExensiveModelId,
        budget,
        expenses,
        deleteExpenses
    ]
}

export default ExbesnsesTableHook