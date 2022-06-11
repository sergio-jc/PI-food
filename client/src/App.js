import From from './components/Form/Form.jsx';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom' 
// import Recipes from './components/Recipes/Recipes';
import RecipeDetail from './components/RecipeDetail/RecipeDetail.jsx';
import Nav from './components/Nav/Nav.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <BrowserRouter >
      <Nav/>
      <Route path={'/home'} component={Home}/>
      <Route path={'/form'} component={From}/>
      <Route path={'/detail/:id'} component={RecipeDetail}/>
    </BrowserRouter>
  );
}

export default App;
