import From from './components/Form/Form.jsx';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom' 
// import Recipes from './components/Recipes/Recipes';
import RecipeDetail from './components/RecipeDetail/RecipeDetail.jsx';
import Home from './components/Home/Home.jsx';
import LanndingPage from './components/landingPage/landingPage.jsx';
import Loading from './components/Cards/Loading/Loading.jsx';
import Error from './components/Cards/Error/Error.jsx';

function App() {
  return (
    <BrowserRouter >
      <Route exact path={'/'} component={LanndingPage}/>
      <Route path={'/home'} component={Home}/>
      <Route path={'/form'} component={From}/>
      <Route path={'/detail/:id'} component={RecipeDetail}/>
      <Route path={'/lolo'} component={Loading}/>
      <Route path={'/error'} component={Error}/>
    </BrowserRouter>
  );
}

export default App;
