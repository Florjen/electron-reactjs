import * as Routing from 'react-router-dom'
export default Routing


const userAget = navigator.userAgent.toLocaleLowerCase()

let route = null
if(userAget.indexOf("electron/") > 1) {
    route = Routing.HashRouter
} else {
route = Routing.BrowserRouter
}
export const Router = route