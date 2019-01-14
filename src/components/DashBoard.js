import React from 'react';
import BookList from './BookList';
import BookFilter from './BookFilter';

const DashBoard = () => (
    <div className='container__list'>
        <BookFilter />
        <BookList />
    </div>
);

export default DashBoard;