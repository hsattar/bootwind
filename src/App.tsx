import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Accordians from "./components/Accordians"
import Alerts from "./components/Alerts"
import Badges from "./components/Badges"
import Breadcrumbs from "./components/Breadcrumbs"
import Buttons from "./components/Buttons"
import Cards from "./components/Cards"
import Carousels from "./components/Carousels"
import Collapse from "./components/Collapse"
import Dropwdowns from "./components/Dropdowns"
import Forms from "./components/Forms"
import Home from "./components/Home"
import Jumbotrons from "./components/Jumbotrons"
import ListGroups from "./components/ListGroups"
import Modals from "./components/Modals"
import Navbars from "./components/Navbars"
import NavTabs from "./components/NavTabs"
import OffCanvas from "./components/OffCanvas"
import Popovers from "./components/Popovers"
import ProgressBars from "./components/ProgressBars"
import SkeletonPlaceholder from "./components/SkeletonPlaceholder"
import Spinners from "./components/Spinners"
import Tables from "./components/Tables"
import Toasts from "./components/Toasts"

export default function App() {
  return (
    <Router>
      <div className="font-mono">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/accordians" element={ <Accordians /> } />
        <Route path="/alerts" element={ <Alerts /> } />
        <Route path="/badges" element={ <Badges /> } />
        <Route path="/breadcrumbs" element={ <Breadcrumbs /> } />
        <Route path="/buttons" element={ <Buttons /> } />
        <Route path="/cards" element={ <Cards /> } />
        <Route path="/carousels" element={ <Carousels /> } />
        <Route path="/collapse" element={ <Collapse /> } />
        <Route path="/dropdowns" element={ <Dropwdowns /> } />
        <Route path="/forms" element={ <Forms /> } />
        <Route path="/jumbotrons" element={ <Jumbotrons /> } />
        <Route path="/list%20groups" element={ <ListGroups /> } />
        <Route path="/modals" element={ <Modals /> } />
        <Route path="/navbars" element={ <Navbars /> } />
        <Route path="/navs%20&%20tabs" element={ <NavTabs /> } />
        <Route path="/offcanvas" element={ <OffCanvas /> } />
        <Route path="/popovers" element={ <Popovers /> } />
        <Route path="/progress%20bars" element={ <ProgressBars /> } />
        <Route path="/skeleton%20placeholders" element={ <SkeletonPlaceholder /> } />
        <Route path="/spinners" element={ <Spinners /> } />
        <Route path="/tables" element={ <Tables /> } />
        <Route path="/toasts" element={ <Toasts /> } />
      </Routes>
      </div>
    </Router>
  )
}