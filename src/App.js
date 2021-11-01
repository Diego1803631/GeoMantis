import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from './pages/Index';
import CompNavbar from "./components/CompNavbar";
import '../src/css/Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
  integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
  crossorigin="anonymous"
/>

function App() {
  return (
    <Router>
      <CompNavbar></CompNavbar>  
      <Switch>
        <Route exact path='/' component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
