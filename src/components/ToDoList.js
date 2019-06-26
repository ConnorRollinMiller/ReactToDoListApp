import React from 'react';
import PropTypes from 'prop-types';
import ItemRow from './ItemRow';
import '../css/ToDoList.css';

const ToDoList = (props) => {

   return (
      <div className="toDoList list-group" >
         {
            props.data.map((item) => (
               <ItemRow
                  key={ item._id }
                  id={ item._id }
                  title={ item.title }
                  onItemUpdate={ props.onItemUpdate }
                  onItemDelete={ props.onItemDelete }
               />
            ))
         }
      </div>
   );
}

ToDoList.propTypes = {
   data: PropTypes.array.isRequired,
   onItemDelete: PropTypes.func.isRequired,
   onItemUpdate: PropTypes.func.isRequired
};

export default ToDoList;