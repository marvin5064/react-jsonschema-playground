const tmpDataStore = (state = {}, action) => {
  switch (action.type) {
    case 'INIT':
      console.log(`dummy fit in some sample data`);
      console.log(action.data);
      state = action.data;
      return state;
    case 'UPDATE':
      console.log('--------------');
      console.log(`previous data:`);
      console.log(state);
      console.log(`data updated! with data:`);
      console.log(action.data);
      state = action.data;
      return state;
    default:
      return state;
  }
};

export default tmpDataStore;
