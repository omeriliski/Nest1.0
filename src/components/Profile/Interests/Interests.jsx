import React, { useState, useRef, useContext, useEffect } from 'react';
import { profileContext } from '../../../Context/ProfileContext';
import { loginContext } from '../../../Context/LoginContext';
import "./Interests.scss"
import env from "@beam-australia/react-env";

export default function Interests() {
  const { interestModal, setInterestModal } = useContext(profileContext)
  const { activeUser, setActiveUser } = useContext(loginContext)
  const [interests, setInterests] = useState("")
  
  const temporaryUser = {...activeUser}
  temporaryUser.interests = interests

  console.log(interests)
  
  const clickHandler = (e) => {
    const payload = {
        interests:interests
    }
    const url = `${env.REACT_APP_URL}/api/user/` + activeUser._id
          const config ={
              method: 'PATCH',
              headers: {
                  'Content-Type':'application/json',
                  'Authorization': 'bearer ' + activeUser.token
              },
              body: JSON.stringify(payload)
          }
          fetch(url, config)
              .then(response => response.json())
              .then(data => setActiveUser(temporaryUser))
            
          setInterestModal(false)
  }


  return(
    
    <div className="Interests">
      <div className="modalBodey" >
          <div className="topContaine">
            <div className="topElements">
              <h5>Interests</h5>
              <button onClick={ e => setInterestModal(false)}>Cancel</button>
            </div>
            <p> 
                Tell us something about yourself to help 
                others get a more personal connection to you
            </p>
          </div>
            <textarea  
                rows="8" 
                cols="50"
                className="textAreaInterests" 
                value={interests}
                onChange={e => setInterests(e.target.value)}
            />
            <button className="buttonInterests" onClick={clickHandler}>Save</button>
      </div>
    </div>
  )

}