import { useState } from 'react';
import { useBudgut } from '../context/useContext';

const HomeHook = () => {
    const { budget, getBudgetExpenses, deleteBudget } = useBudgut();
    const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
    const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
    const [addExpenseModalBudgtId, setAddExpenseModalBudgtId] = useState();
    const handleShow = () => setShowAddBudgetModal(true);
    const openExpenseModel = (id) => {
        setAddExpenseModalBudgtId(id);
        setShowAddExpenseModal(true);
    };
    return [
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
    ]
}

export default HomeHook