import React from 'react';
import { connect } from 'react-redux';
import { removeBook } from '../actions/books';

const Book = ({ id, title, description, author, published, dispatch }) => (
    <div>
        <h4>{title} ({published})</h4>
        <p>Author: {author}</p>
        {description && <p>{description}</p>}
        <button onClick={() => {
            dispatch(removeBook({ id }));
        }}>Remove</button>
    </div>
);

export default connect()(Book);