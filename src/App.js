import React, {useState, useEffect} from 'react';
import Sitebar from './home/Navbar';
import Auth from './auth/Auth';
import WorkoutIndex from './workouts/WorkoutIndex';


function App() {
  // Using the useState hook to create a new state variable, sessionToken.  Use the second argument of useState, which allows us to change our sessionToken state variable (empty to start, added when logged in, cleared when logout).
  const [sessionToken, setSessionToken] = useState('');

  // An effect runs once (only) upon initial component load Since, an empty array is passed, no change is tracked.
  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  // Takes in a token and saves it to localStorage and in the state variable, sessionToken.
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }
// logout function
  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
  }

  const protectedViews = () => {
    // checks to see if  sessionToken state variable matches the token property in localStorage.
    // If true, display the workout Index, otherwise return to Auth component.
    return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  };

  return (
    <div>
      <Sitebar 
      clickLogout={clearToken}/>
    {/* calling the protectedView function */}
      {protectedViews()}
    </div>
  );
}

export default App;
