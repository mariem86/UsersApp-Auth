import React , { useState }from "react";
import {deleteUser} from "../../js/action/userAction"
import EditUser from "./EditUser";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import { useDispatch,useSelector } from "react-redux";
import {Link} from "react-router-dom"
const UserCard = ({
  user: { name, email, _id },
  isAuth,
  authuser,
 
}) => {
  const dispatch = useDispatch();
  const deleteuser= () => {
    dispatch(deleteUser(_id));
    
  };
  return (
    <Card className="p-2 h-100">
      <CardHeader className="text-center bg-white border-0">
        {isAuth && _id === authuser._id && (
          <span className="close" onClick={deleteuser}>
            &times;
          </span>
        )}
        <span className="avatar">{name[0].toUpperCase()}</span>
      </CardHeader>
      <CardBody>
        <CardTitle>Name : {name.toUpperCase()}</CardTitle>
        <CardText>Email : {email}</CardText>
        {isAuth && _id === authuser._id && <Button>
        <EditUser  names={name} emaile={email} idd={_id}/>
        </Button>}
        {isAuth && _id === authuser._id &&
        <Button className="btn "><Link to={`/userfiche/${_id}`}>view user</Link></Button>}
      </CardBody>
    </Card>
  );
};

export default UserCard;
