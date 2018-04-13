// // // // BLAZEPLATE WHITESPACE
// REST verbs
const GET = 'get'
const PUT = 'put'
const POST = 'post'
const DELETE = 'delete'
// // // // BLAZEPLATE WHITESPACE
// Defines requestHeaders object
const REQUEST_HEADERS = {
  'Content-Type': 'application/json'
}
// // // // BLAZEPLATE WHITESPACE
// Defines request
function buildRequest (verb, options) {
  // Defines request headers
  let requestHeaders = { ...REQUEST_HEADERS }
  // // // // BLAZEPLATE WHITESPACE
  // Adds `Authorization` header to request if token parameter is defined
  if (options.token) requestHeaders['Authorization'] = `JWT ${options.token}`
  // // // // BLAZEPLATE WHITESPACE
  // Returns request object
  let req = { method: verb, headers: new Headers(requestHeaders) }
  // // // // BLAZEPLATE WHITESPACE
  // Appends body to request if it's defined
  if (options.body) req.body = JSON.stringify(options.body)
  // // // // BLAZEPLATE WHITESPACE
  // Returns the request
  return req
}
// // // // BLAZEPLATE WHITESPACE
// TODO - this function should return the server-provided error messages
function handleErrors (response) {
  if (!response.ok) {
    throw Error(response)
  }
  return response
}
// // // // BLAZEPLATE WHITESPACE
// // // //
// // // // BLAZEPLATE WHITESPACE
// $POST helper function
export const $POST = function (url, options = {}) {
  return fetch(url, buildRequest(POST, options))
  .then(handleErrors)
  .then((response) => { return response.json() })
}
// // // // BLAZEPLATE WHITESPACE
// // // //
// // // // BLAZEPLATE WHITESPACE
// $GET Helper function
export const $GET = function (url, options = {}) {
  return fetch(url, buildRequest(GET, options))
  .then(handleErrors)
  .then((response) => { return response.json() })
}
// // // // BLAZEPLATE WHITESPACE
// // // //
// // // // BLAZEPLATE WHITESPACE
// $PUT helper function
export const $PUT = function (url, options = {}) {
  return fetch(url, buildRequest(PUT, options))
  .then(handleErrors)
  .then((response) => { return response.json() })
}
// // // // BLAZEPLATE WHITESPACE
// // // //
// // // // BLAZEPLATE WHITESPACE
// $DEL helper function
export const $DEL = function (url, options = {}) {
  return fetch(url, buildRequest(DELETE, options))
  .then(handleErrors)
  .then((response) => { return response.json() })
}
// // // // BLAZEPLATE WHITESPACE