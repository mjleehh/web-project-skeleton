import {Elm} from './Main.elm'

console.log(Elm)

const app = Elm.App.init({node: document.getElementById('main')})
const {toJs, toElm} = app.ports
toJs.subscribe(() => toElm.send(Math.random()))