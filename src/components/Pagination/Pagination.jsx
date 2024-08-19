import React from 'react';
import './Pagination.css';
import { POSTS_PER_PAGE } from '../../constants';

const Pagination = ({ setCurrentPage, currentPage, totalPages }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPages / POSTS_PER_PAGE); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? 'active' : ''}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
