import logo from './logo.svg';
import './App.css';
import './style.css'
import Greet from './Greet';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import EditorDynamic from './component/Editor/EditorDynamic';
import SideMenu from './SideMenu';
// import { Header } from 'semantic-ui-react';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import {Route, Switch ,Redirect, useHistory} from 'react-router-dom';
import EditorBasic from './component/EditorBasic/EditorBasic';
import CreateAnnouncement from './component/Announcement/CreateAnnouncement';
import SavedAnnouncement from './component/Announcement/SavedAnnouncement';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-content">
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/editorlist' component={EditorDynamic} />
          <Route path='/editor' component={EditorBasic} />
          <Route path='/createAnnouncement' component={CreateAnnouncement} />
          <Route path='/savedAnnouncement' component={SavedAnnouncement} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </div>
      {/* <Login/> */}
      {/* <EditorDynamic/> */}
      {/* <Signup/> */}
      {/* <Greet/> */}
      {/* <SideMenu/> */}
    </div>
  );
}

export default App;
