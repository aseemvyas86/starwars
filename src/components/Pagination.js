import React from "react";
import _ from "lodash";

const Pagination = props => {
  const { count, perPage, onPageChange } = props;
  const pageCount = Math.ceil(count / perPage);
  const pages = _.range(1, pageCount + 1);
  return (
    <div className="ui pagination menu">
      {pages.map(page => {
        return (
          <a className="item" key={page} onClick={() => onPageChange(page)}>
            {page}
          </a>
        );
      })}
    </div>
  );
};

export default Pagination;
