import {
  AuthPageContainer,
  Button,
  Form,
  FormContainer,
  GradientButton,
  Input,
  TitleContainer,
} from "../../components/AuthComponents";
import Header from "../../components/Header";
import { BsArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api.js";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth.js"


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, userData } = useAuth();

  useEffect(() => {
   (localStorage.getItem("auth") !== null) && navigate("/")
},[navigate])



  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      email,
      password,
    };
    const promise = api.login(data);
    promise.then((response) => {
       login(response.data.token)
       userData({name: response.data.name, userId: response.data.userId})
       navigate("/");

    });
    promise.catch((error) => {
       console.log(error)
    })
  }

  return (
    <>
      <Header page="auth" />
      <AuthPageContainer>
        <TitleContainer>
          <h1>Login to Your Account</h1>
          <p>Share your favourite dishes with the world!</p>
        </TitleContainer>
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="Email"
              value={email}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
             />
            <Button onClick={handleSubmit} type="submit">
              Login to your account <BsArrowRight size="2em" />
            </Button>
          </Form>
        </FormContainer>
        <span>/</span>
        <FormContainer>
          <Form>
            <GradientButton>
              <Link to="/signup"> Register a new account</Link>
            </GradientButton>
            <GradientButton>Sign in with google</GradientButton>
            <GradientButton>Sign in with google</GradientButton>
          </Form>
        </FormContainer>
      </AuthPageContainer>
    </>
  );
}
