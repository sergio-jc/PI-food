import From from './components/Form/Form.jsx';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom' 
// import Recipes from './components/Recipes/Recipes';
import Cards from './components/AllRecipes/AllRecipes.jsx';
function App() {
  return (
    <BrowserRouter >
      {/* <Nav/> */}
      <Route exact path={'/'} component={Cards}/>
      <Route path={'/form'} component={From}/>
    </BrowserRouter>
  );
}

export default App;
