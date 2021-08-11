import React ,{ useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
//import {deleteUser} from "../../js/action/userAction"
import UserCard from "../layout/UserCard";
import { Container, Row, Col } from "reactstrap";
import { getUsers } from "../../js/action/userAction";

export default function UserList() {
  const usersList= useSelector(state => state.userReducer.usersList)
    const isLoading = useSelector((state) => state.userReducer.isLoading)
    const isAuth = useSelector((state) => state.authReducer. isAuth)
    const authuser = useSelector((state) => state.authReducer. user)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUsers());
     
    }, []);
    
    return (
        <Container>
        {!isLoading && usersList ? (
          <Row>
            { usersList.map(el => (
              <Col key={el.id} xs="12" md="6" lg="4" className="mb-3 justify-content-stretch">
                <UserCard user={el} isAuth={isAuth} authuser={ authuser}  />
              </Col>
            ))}
          </Row>
        ) : <h1>Spinner ................</h1>   }
      </Container>
    )
}
