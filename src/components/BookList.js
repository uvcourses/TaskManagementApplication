import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';
import getVisibleBooks from '../selectors/books';

const BookList = (props) => (
    <div>
        Book List:
        <ul>
            {props.books.map(book => {
                return (
                    <li key={book.id}>
                        <Book {...book} />
                    </li>
                );
            })}
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        books: getVisibleBooks(state.books, state.filters)
    };
}

export default connect(mapStateToProps)(BookList);