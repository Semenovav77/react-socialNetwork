import React, {useState} from 'react';
import s from './users.module.css';
import classNames from 'classnames';

import {Button as BaseButton} from 'antd';

type PropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged(pageNumber: number): void
    portionSize?: number
}

const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return (
            <>
                {portionNumber > 1 &&
                    <div className='users__pages-button'>
                        <BaseButton type='primary' htmlType='submit'
                                 onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</BaseButton>
                    </div>}
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                    return <span className={classNames('page',{'page--selected': (currentPage === p)})}
                                 onClick={() => onPageChanged(p)}>{p}</span>
                })}
                {portionCount > portionNumber &&
                    <div className='users__pages-button'>
                        <BaseButton type='primary' htmlType='submit'
                                onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</BaseButton>
                    </div>}
            </>
    )
};

export default Paginator;