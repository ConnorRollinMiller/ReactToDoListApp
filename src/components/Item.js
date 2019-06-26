import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => (
   <div className="list-group-item list-group-item-action row" >
      <h4 className="listItemText">
         { props.title }
      </h4>
      <div className="btn-group buttons-group">
         <button
            className="btn btn-primary edit-btn"
            onClick={ props.onFormToggle }
         >
            <i className='fas fa-edit fa-lg'></i>
         </button>
         <button
            type='button'
            className="btn btn-danger"
            onClick={ props.deleteItem }
         >
            <i className="far fa-trash-alt fa-lg"></i>
         </button>
      </div>
   </div>
);

Item.propTypes = {
   title: PropTypes.string.isRequired,
   onFormToggle: PropTypes.func.isRequired,
   deleteItem: PropTypes.func.isRequired,
};

export default Item;