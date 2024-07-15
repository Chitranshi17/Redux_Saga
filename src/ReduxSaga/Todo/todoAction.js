export const FETCH_TODOS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_USERS_FAILURE";


// Get Todos

export const fetchTodoRequest = () => ({type : FETCH_TODOS_REQUEST});

export const fetchTodoSuccess = (todos) => ({type : FETCH_TODOS_SUCCESS, payload : todos});

export const fetchTodoFailure = (error) => ({type : FETCH_TODOS_FAILURE, payload : error});