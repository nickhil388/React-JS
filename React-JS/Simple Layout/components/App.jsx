import React from 'react';
import AppHeader from './Common/header/header.jsx';
import AppFooter from './Common/footer/footer.jsx';
import Home from './about/about.jsx';
class App extends React.Component {
   render() {
      return (
      	<div>
      		<AppHeader/>       
      		  		<Home/>
         	<AppFooter/>
         </div>
      );
   }
}

export default App;