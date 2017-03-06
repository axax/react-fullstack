export default socket => store => next => action => {
  if( !store ){
    console.log("store is null");
  }
  console.log("middleware",action);
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  return next(action);
}