import From from './components/Form/Form.jsx';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom' 
// import Recipes from './components/Recipes/Recipes';
import RecipeDetail from './components/RecipeDetail/RecipeDetail.jsx';
import Home from './components/Home/Home.jsx';
import LanndingPage from './components/landingPage/landingPage.jsx';

function App() {
  return (
    <BrowserRouter >
      <Route exact path={'/'} component={LanndingPage}/>
      <Route path={'/home'} component={Home}/>
      <Route path={'/form'} component={From}/>
      <Route path={'/detail/:id'} component={RecipeDetail}/>
    </BrowserRouter>
  );
}

export default App;
