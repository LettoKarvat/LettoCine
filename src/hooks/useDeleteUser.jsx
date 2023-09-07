// useDeleteUser.js
import { useState } from 'react';

const useDeleteUser = () => {
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [deleteError, setDeleteError] = useState(null);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const deleteUser = async (username) => {
        setLoadingDelete(true);
        setDeleteError(null);
        setDeleteSuccess(false);

        try {
            const response = await fetch(`http://127.0.0.1:5000/delete_user?username=${username}`, {
                method: "POST",
            });
            const data = await response.json();
            if (data.status === "success") {
                setDeleteSuccess(true);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            setDeleteError(error.message);
        } finally {
            setLoadingDelete(false);
            window.location.reload();
        }
    };

    return { deleteUser, loadingDelete, deleteError, deleteSuccess };
};

export default useDeleteUser;
