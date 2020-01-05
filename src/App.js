import React,{Component} from 'react';
import Header from './Header';
import Teams from './Teams';
import Games from './Games';
import Pop from './Popover'
class App extends React.Component {
 render()
 {
  const buttonStyle1={width:'25%',backgroundColor:'orange', height:'30px',marginLeft:'24%',color:'white'};
  const buttonStyle2={width:'25%',backgroundColor:'white', height:'30px',borderColor:'ghostwhite'}
  return (
    <div>
   <Header/>
   <div>
  
          <button style={buttonStyle1}  >NBA Teams</button>
          <button style={buttonStyle2} >NBA Games</button>
          <Teams/>
          {/* <Games/> */}
          {/* <Pop/> */}
          
   </div>
    </div>
  );
}
}

export default App;
