import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddItemForm from './AddItemForm';
import ToDoList from './ToDoList';
import '../css/ToDoListContainer.css';
import axios from 'axios';


class ToDoListContainer extends Component {

   state = {
      data: [],
   }

   componentDidMount() {

      this.loadItemsFromServer();

   }

   loadItemsFromServer = () => {
      axios.get(this.props.apiUrl)
         .then((res) => {
            console.log(res.data);
            this.setState({
               data: res.data
            });
         });
   }

   handleAddItem = (item) => {
      let prevList = this.state.data;
      item._id = Date.now().toString();
      let newList = prevList.concat(item);
      this.setState({
         data: newList
      });

      axios.post(this.props.apiUrl, item)
         .catch((err) => {
            console.log(err);
            this.setState({ data: prevList });
         });
   }

   handleItemUpdate = (id, item) => {
      this.setState({
         data: this.state.data.map((oldItems) => oldItems._id === id ? item : oldItems)
      });
      axios.put(`${ this.props.apiUrl }/${ id }`, item)
         .catch((err) => console.log(err));
   }

   handleItemDelete = (id) => {

      this.setState({
         data: this.state.data.filter((item) => item._id !== id)
      });

      axios.delete(`${ this.props.apiUrl }/${ id }`)
         .then((res) => console.log('Message Deleted!'))
         .catch((err) => console.log(err));

   }

   render() {
      return (
         <div className="toDoListContainer" >
            <AddItemForm
               onAddItem={ this.handleAddItem }
            />
            <ToDoList
               data={ this.state.data }
               onItemUpdate={ this.handleItemUpdate }
               onItemDelete={ this.handleItemDelete }
            />
         </div>
      );
   }
}

ToDoListContainer.propTypes = {
   apiUrl: PropTypes.string.isRequired,
   pollInterval: PropTypes.number.isRequired
};

export default ToDoListContainer;
