import React from 'react';
import Header from "./Header";
import Error404 from './Error404';

class App extends React.Component{

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path= '/'
            render={()=> <Forum />}
          <Route path='/createpost'
            render={()=><NewTicketControl />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }

}

export default App;
