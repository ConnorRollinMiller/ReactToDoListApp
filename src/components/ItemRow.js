import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css//ListItem.css';
import Item from './Item';
import ItemEdit from './ItemEdit';

class ListItem extends Component {

   state = {
      isEditFormOpen: false,
   }

   handleFormToggle = (e) => {
      e.preventDefault();
      this.setState({
         isEditFormOpen: !this.state.isEditFormOpen
      });
   }

   deleteItem = (e) => {
      e.preventDefault();
      let id = this.props.id;
      this.props.onItemDelete(id);
   }

   render() {
      return (
         <div>
            { (this.state.isEditFormOpen) ?
               <ItemEdit
                  title={ this.props.title }
                  id={ this.props.id }
                  onItemUpdate={ this.props.onItemUpdate }
                  onFormToggle={ this.handleFormToggle }

               />
               :
               <Item
                  title={ this.props.title }
                  onFormToggle={ this.handleFormToggle }
                  deleteItem={ this.deleteItem }
               /> }
         </div>
      );
   }
}

ListItem.propTypes = {
   title: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   onItemUpdate: PropTypes.func.isRequired,
   onItemDelete: PropTypes.func.isRequired
};

export default ListItem;