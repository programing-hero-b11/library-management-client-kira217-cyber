import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateBook = () => {
    const updateBook = useLoaderData()
    console.log(updateBook.data)
    return (
        <div>
            UpdateBook
        </div>
    );
};

export default UpdateBook;