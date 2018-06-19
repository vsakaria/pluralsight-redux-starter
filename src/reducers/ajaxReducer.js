import initState from "./initState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == "_SUCCESS";
}

export default function ajaxReducer(state = initState.ajaxCalls, action) {
  if (action.type === "AJAX_CALLED") {
    return state + 1;
  }

  if (actionTypeEndsInSuccess(action.type) || action.type === "AJAX_FAILED") {
    return state - 1;
  }

  return state;
}
