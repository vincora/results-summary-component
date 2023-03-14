import React from 'react';
import cn from 'classnames';

const ListItem = ({icon,category,score}) => {
  return (
    <div className={cn('list-item', `list-item_${category}`)}>
        <div className="list-item__parametr">
            <img className="list-item__icon" src={icon} alt="" />
            <span className="list-item__category">{category}</span>
        </div>
        <div className="list-item__value">
            <span className="list-item__score">{score}</span>
            <span>/</span>
            <span className="list-item__total">100</span>
        </div>
    </div>
  )
}

export default ListItem