let routes = {}
let templates = {}

let app_div = document.getElementById('app.js')

function home() {}

function about() {}

function route(path, template) {
  if (typeof template === 'function') {
    return (routes[path] = template)
  } else if (typeof template === 'string') {
    return (routes[path] = templates[template])
  } else {
    return
  }
}

function template(name, templateFunction) {
  return (templates[name] = templateFunction)
}
