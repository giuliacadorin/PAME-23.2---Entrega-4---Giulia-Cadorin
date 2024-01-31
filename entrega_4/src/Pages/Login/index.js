import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VscAccount, VscLock } from "react-icons/vsc";

import {
  PageContainer,
  Container,
  LoginTitle,
  Input,
  LoginButton,
  InputWithIcon,
  CheckboxWrapper,
  CheckboxInput,
  CheckboxLabel,
  // CustomSwitchContainer,
  // CustomSwitchInput,
  // CustomSwitchLabel,
  // CustomSwitchSlider,
  // CustomSwitchSliderBefore,
  // CustomSwitchChecked,
  // CustomSwitchCheckedSlider,
  // CustomSwitchCheckedSliderBefore,
} from "./styles";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberUser, setRememberUser] = useState(false);
  const navigate = useNavigate();

  // Efeito para preencher automaticamente os campos ao carregar a página
  useEffect(() => {
    const storedUser = localStorage.getItem("lastLoggedInUser");

    if (storedUser) {
      const { username, password } = JSON.parse(storedUser);
      setUsername(username);
      setPassword(password);
      setRememberUser(true);
    }
  }, []);

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const user = existingUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      // Usuário autenticado, redirecione para a página /home
      navigate("/home");

      // Salvar último usuário logado se "Lembrar usuário" estiver marcado
      if (rememberUser) {
        localStorage.setItem(
          "lastLoggedInUser",
          JSON.stringify({ username, password })
        );
      } else {
        // Limpar as informações do último usuário se "Lembrar usuário" não estiver marcado
        localStorage.removeItem("lastLoggedInUser");
      }
    } else {
      // Credenciais inválidas, exiba um alerta
      alert("Usuário ou senha incorretos");
    }
  };
  const MyCheckbox = ({ label, checked, onChange }) => {
    return (
      <CheckboxWrapper>
        <CheckboxInput type="checkbox" checked={checked} onChange={onChange} />
        <CheckboxLabel>{label}</CheckboxLabel>
      </CheckboxWrapper>
    );
  };

  const [isChecked, setChecked] = React.useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <PageContainer>
      <Container>
        <LoginTitle>Faça seu login!</LoginTitle>

        <InputWithIcon>
          <VscAccount className="icon" />
          <Input
            type="text"
            placeholder="Nome de Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputWithIcon>
        <InputWithIcon>
          <VscLock className="lockIcon" />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWithIcon>
        <MyCheckbox
          label="Lembrar usuário"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        <label>
          <input
            type="checkbox"
            checked={rememberUser}
            onChange={() => setRememberUser(!rememberUser)}
          />{" "}
          Lembrar usuário
        </label>
        <LoginButton onClick={handleLogin}>Login</LoginButton>

        <p>
          Ainda não é cadastrado? <a href="/cadastro">Cadastre-se</a>
        </p>
      </Container>
    </PageContainer>
  );
}

export default Login;
