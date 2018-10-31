export const SIGNUP = "SIGNUP";
export const ERRORS = "ERRORS";

export function getSignUpData(data){
     console.log(data);
    return function (dispatch) {
      fetch('/users', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
          .then(function (response) {
            dispatch({type:SIGNUP,response});
            console.log(response);
          })
          .catch(function (error) {
            dispatch({type:ERRORS,error});
            console.log(error);
          });
    }
}