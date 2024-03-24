import React from 'react';
import Nav from './components/Nav';
import Login from './components/Auth';
import SearchTransaction from './components/SearchTransactions/SearchTransaction';
import { Route, Routes ,Navigate} from 'react-router-dom';
import NewTransaction from './components/Transactions/NewTransaction';
function App() {
  return (
    <div className='container'>
      <Nav />
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/login" />} />
          <Route path='/login'element={<Login />} />
          <Route path='/Dashboard' element={<SearchTransaction /> } />
          <Route path='/NewTransaction' element={ <NewTransaction />} />
        </Routes>
    </div>
  );
}

export default App;
