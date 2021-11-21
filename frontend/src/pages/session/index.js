import { Button, ButtonGroup, MenuItem } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import BasicForm from "../../components/BasicForm";
import { Input } from "../../components/Input/Input";
import SessionService from "../../services/SessionService";
import queryString from "query-string";
import "./styles.css";
import {
  loginValidationSchema,
  registerValidationSchema,
} from "./validationSchema";

const INITIAL_VALUES = {
  username: "",
  password: "",
  roles: "",
};

function Session() {
  const [isRegister, setIsRegister] = useState(false);
  const [formValue, setFormValue] = useState(INITIAL_VALUES);
  const history = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    const { token } = queryString.parse(search);
    if (token) {
      SessionService.loginWithToken(token);
      history.push("/home");
    }
  }, [search]);

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  const onSubmit = async (values) => {
    if (isRegister) {
      try {
        await SessionService.register(values);
        toggleRegister();
        alert("Cadastrado com sucesso");
      } catch (error) {
        alert(error.response.data.erro);
      }
    } else {
      try {
        await SessionService.login(values);
        history.push("/home");
      } catch (error) {
        alert(error.response.data.erro);
      }
    }
  };

  return (
    <div className="fullscreen-container">
      <div className="login-container">
        <ButtonGroup
          className="button-group"
          disableElevation
          variant="contained"
          color="primary"
        >
          <Button
            className="button"
            disabled={isRegister}
            onClick={toggleRegister}
          >
            Registro
          </Button>
          <Button
            className="button"
            disabled={!isRegister}
            onClick={toggleRegister}
          >
            Login
          </Button>
        </ButtonGroup>
        <BasicForm
          title={isRegister ? "Cadastro" : "Login"}
          initialValues={formValue}
          onSubmit={onSubmit}
          sessionMode
          isEdit={isRegister}
          validationSchema={
            isRegister ? registerValidationSchema : loginValidationSchema
          }
        >
          <Input name="username" label="Usuário" />
          <Input name="password" label="Senha" />
          {isRegister && (
            <Input name="roles" label="Role" select>
              <MenuItem key={0} value="" />
              <MenuItem value="ADMIN">Admin</MenuItem>
              <MenuItem value="USER">Usuário</MenuItem>
            </Input>
          )}
        </BasicForm>
      </div>
    </div>
  );
}

export default Session;
