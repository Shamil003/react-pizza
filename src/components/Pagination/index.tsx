import React from 'react';

import ReactPaginate from 'react-paginate';

import styles from './Pogination.module.scss'

type PaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
}

const Index: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => <div>
    <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
    />
</div>

export default Index;