import { useId } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const UseIdHook = () => {
  //   const userEmailId = useId();
  //   const userPassword = useId();

  //   return (
  //     <Form>
  //       <Form.Group className="mb-3" controlId="formBasicEmail">
  //         <Form.Label htmlFor={userEmailId}>Email address</Form.Label>
  //         <Form.Control type="email" id={userEmailId} placeholder="Enter email" />
  //         <Form.Text className="text-muted">
  //           We'll never share your email with anyone else.
  //         </Form.Text>
  //       </Form.Group>

  //       <Form.Group className="mb-3" controlId="formBasicPassword">
  //         <Form.Label htmlFor={userPassword}>Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           id={userPassword}
  //           placeholder="Password"
  //         />
  //       </Form.Group>
  //       <Button variant="primary" type="submit">
  //         Submit
  //       </Button>
  //     </Form>
  //   );

  const id = useId();

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor={id + "userEmailId"}>Email address</Form.Label>
        <Form.Control
          type="email"
          id={id + "userEmailId"}
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor={id + "userPassword"}>Password</Form.Label>
        <Form.Control
          type="password"
          id={id + "userPassword"}
          placeholder="Password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UseIdHook;
