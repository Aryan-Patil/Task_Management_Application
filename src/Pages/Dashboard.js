import React from 'react'
import { auth } from '../Firebase/Connection';
import { signOut } from 'firebase/auth';

function Dashboard(props) {
  return (
    <div>{props.name}
      <button onClick={() => {
        signOut(auth).then(() => {
          props.setX('');
        }).catch((error) => {
          alert(error.meaasge);
        });
      }}>logout</button>
    </div>
  )
}

export default Dashboard