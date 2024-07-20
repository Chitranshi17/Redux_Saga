import React, { useEffect } from 'react'
import ListItems from './ListItems'
import { connect } from 'react-redux'
import { fetchTodoRequest } from '../ReduxSaga/Todo/todoAction'

const ListGroup = ({todos, error, loading, getData}) => {

  useEffect(()=>{
    getData
  },[]);

  console.log(todos, error, loading);

  return (
    <div className='w-100 d-flex align-items-center justify-content-center ListSec'>
       <ul className='w-50 d-flex align-items-center justify-content-around flex-column list-group ListUl overflow-y-scroll'>
        <ListItems/>
       </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos :  state.todos.allTodos,
  error : state.todos.error,
  loading : state.todos.loading
})

const mapDispatchToProper = (dispatch) => ({
  getData : dispatch(fetchTodoRequest())
})

export default connect(mapStateToProps, mapDispatchToProper)(ListGroup);
