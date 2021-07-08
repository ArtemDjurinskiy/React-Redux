import React from 'react';
import './App.css';
import store from './redux/state';
import Header from './componetns/Header/Header.jsx';
import Navbar from './componetns/Navbar/Navbar.jsx';
import Profile from './componetns/Profile/Profile.jsx';
import Dialogs from './componetns/Dialogs/Dialogs.jsx';
import Music from './componetns/Music/Music.jsx';
import Settings from './componetns/Settings/Settings.jsx';
import News from './componetns/News/News.jsx';
import {Route} from 'react-router-dom';

const App = (props) => {
  return (
    
      <div className='app-wrapper'>
        <Header />
        <Navbar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' 
              render={ () => <Dialogs 
                state={props.dialogsPage} 
                addMasseg={props.stateaddMasseg} 
                updateNewPostText={props.updateNewPostText}/>}/>
            <Route path='/profile' 
              render={ () => <Profile state={props.profilePage} addPost={props.addPost} artem='artem'/>}/>
            <Route path='/music' render={ () => <Music/>}/>
            <Route path='/news' render={ () => <News/>}/>
            <Route path='/settings' render={ () => <Settings/>}/>
          </div>
      </div>
    
  );
}


export default App;

