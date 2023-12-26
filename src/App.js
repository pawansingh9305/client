
import './App.css';
import {useEffect,useState } from 'react';
import {jwtDecode} from 'jwt-decode';

function App() {

  const [user , setUser] = useState({});
  const [success , setSucces] = useState(false);

  function handleCallbackResponse(response){
    console.log("Encode JWT ID token:"+response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id:"726370301099-fu2ce4hb96rhgjmsie0l06o62bk296qq.apps.googleusercontent.com",
        callback:handleCallbackResponse
      });

      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme: "outline" ,size:"large"}
      )
    
  }, [])
  
  return (
    <div className="signIn">
        <div id="signInDiv"></div>
    </div>
  );
}

export default App;
