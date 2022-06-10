import From from './components/Form/Form.jsx';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom' 
// import Recipes from './components/Recipes/Recipes';
import Cards from './components/AllRecipes/AllRecipes.jsx';
import RecipeDetail from './components/RecipeDetail/RecipeDetail.jsx';
function App() {
  return (
    <BrowserRouter >
      {/* <Nav/> */}
      <Route exact path={'/'} component={Cards}/>
      <Route path={'/form'} component={From}/>
      <Route path={'/detail/:id'} component={RecipeDetail}/>
    </BrowserRouter>
  );
}

export default App;
