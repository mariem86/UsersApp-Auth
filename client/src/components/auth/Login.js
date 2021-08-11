import React, { useState,useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from "reactstrap";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { login ,clearErrors} from "../../js/action/authAction"

const LoginModal = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const{ errors} = useSelector((state) => state.authReducer.errors);

  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) =>{
    e.preventDefault();
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    const handleConfim = () => {
    
      dispatch(login(formData));
     }
     /*redirect to dashboard
     useEffect(() => {
   
      if (isAuth){
        history.push("/dashboard")
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your Details has been registered successfully',
        showConfirmButton: false,
        timer: 2000
      })
    }
    })*/
  
     

  const toggle = () =>{
      //clear Errors
dispatch(clearErrors())
     setModal(!modal);
  }
 
  return (
    <div>
      <NavLink href="#"onClick={toggle}>
          Login
        </NavLink>
        <Modal isOpen={modal} toggle={toggle}>
          
          {errors &&
            Array.isArray(errors) &&
            errors.map(el => <Alert color="danger"> {el} </Alert>)}

          <ModalHeader>Login</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={handleFormChange}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Email..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">password</Label>
              <Input
                onChange={handleFormChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleConfim}>
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoginModal;
