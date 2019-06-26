import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemEdit extends Component {

   state = {
      title: '',
   }

   componentDidMount() {
      this.editInput.focus();
      this.editInput.setSelectionRange(this.editInput.value.length, this.editInput.value.length); // focus end of input 

      this.setState({
         title: this.props.title
      });
   }

   handleTitleChange = (e) => {
      this.setState({
         title: e.target.value
      });
   }

   handleSubmit = (e) => {
      e.preventDefault();
      //console.log(this.props.id);

      let id = this.props.id;
      let title = this.state.title;
      let newItem = { _id: id, title: title };

      this.props.onItemUpdate(id, newItem);
      this.props.onFormToggle(e);
      this.setState({
         title: '',
      });
   }

   render() {
      return (
         <form className="list-group-item list-group-item-action row input-group" onSubmit={ this.handleSubmit } >
            <input
               ref={ (input) => this.editInput = input }
               type="text"
               placeholder='To Do Item'
               className="form-control"
               defaultValue={ this.props.title }
               onChange={ this.handleTitleChange }
            />
            <div className="btn-group buttons-group input-group-append">
               <button
                  type="submit"
                  className="btn btn-success"
               >
                  <i className="fas fa-check fa-lg"></i>
               </button>
            </div>
         </form>
      );
   }
}

ItemEdit.propTypes = {
   title: PropTypes.string.isRequired,
   id: PropTypes.string,
   onItemUpdate: PropTypes.func.isRequired,
   onFormToggle: PropTypes.func.isRequired,
};

export default ItemEdit;