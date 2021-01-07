import React from 'react';
import Greeting from './Greeting';
import Time from './Time';

const main = {
  width : '100%',
  height : '100vh',
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center'
};

const date = new Date();
const hours  = date.getHours();

if (hours>=5 && hours<=12) {
  main.backgroundColor = '#d7e8fd';
}
else if(hours>12 && hours<=17){
  main.backgroundColor = '#ffb6a2';
}
else if (hours>17 && hours<=21) {
  main.backgroundColor = '#0051ca'
}
else{
  main.backgroundColor = '#444444'
}

const App = () => {
  return(
    <>
      <div style = {main}>
        <div>
          <Time />
          <Greeting />
        </div>
      </div>
    </>
  );
}


export default App;