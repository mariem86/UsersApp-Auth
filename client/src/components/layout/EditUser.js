import React, { useState } from 'react';

import Modal from 'react-modal';
import {editeUser} from "../../js/action/userAction"

import { useDispatch, useSelector } from "react-redux";

Modal.setAppElement('#root');

const EditUser = ({idd,names,emaile}) => {
  
  const [modalIsOpen, setIsOpen] = useState(false);
 
  const [name, setName] = useState(names);
  const [email, setEmail] = useState(emaile);
  
 
 const [id, setId] = useState(0)
  
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);

  }

  function closeModal() {
    setIsOpen(false);
    setName("");
    setEmail("");
  
  }

 
 
    
 const editUsers = ( ) => {
    
    dispatch( editeUser(idd,{id, name, email }));
   
    setIsOpen(false);
    setName("");
    setEmail("");
    setId(0)
};

  return (
    <div className="edit-btn-container">
    <div className="watch-btn" onClick={openModal}>
       edit
      </div>
    
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        
        <form>
          <label>User Name</label>
          <input
            value={name}
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          {<input
            value={email}
            type="text"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />}
          

          
          
          
        </form>
        <button className="Modal-btn" onClick={ editUsers }>
         edit
        </button>
        
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default EditUser ;
