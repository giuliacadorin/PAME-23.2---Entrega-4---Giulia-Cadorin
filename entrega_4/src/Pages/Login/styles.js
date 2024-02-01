import styled from "styled-components";

// preto : #1B1B1B
// marrom: #692403
// roxo:   #650E83
// branco: #F4F7F8

// Conteiner da Página
export const PageContainer = styled.div`
  background: linear-gradient(to bottom, #1b1b1b 40%, #650e83);
  //background-color: #7ea5b4;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ajusta a altura para ocupar toda a altura da viewport */
`;

// Conteiner centralizado
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #650e83;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  height: 460px;

  p {
    color: #fff;
  }
  label {
    color: #fff;
  }
  a {
    color: #fff;
  }
`;
export const LoginTitle = styled.h2`
  color: #F4F7F8;
  // margin-bottom: auto;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 12px;
  border: none;
  vertical-align: text-bottom;
`;

export const InputWithIcon = styled.div`
  position: relative;

  .icon {
    position: absolute;
    top: 42%;
    left: 10px;
    transform: translateY(-50%);
  }

  .lockIcon {
    position: absolute;
    top: 42%;
    left: 10px; 
    transform: translateY(-50%);
  }

  input {
    width: calc(100% - 150px);   
    padding-left: 40px; /* Espaço para o ícone */
    border: none
    border-radius: 12px;
    padding: 10px 100px 10px 52px;
  }
`;

export const LoginButton = styled.button`
  width: 320px;
  background-color:#692403; //#4caf50;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 12px;
  border-radius: 12px;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 16px;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: normal;
  user-select: none;
`;

export const CheckboxInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid #adb5bd;
  border-radius: 4px;
  margin-right: 8px;
  cursor: pointer;
  outline: none;

  &:checked {
    background-color: #1b236c;
    border-color: #00e3ff;
  }
`;

export const CheckboxLabel = styled.span`
  color: #fff;
`;

// estilizando o botão switch 'lembre-se de mim'
// export const CustomSwitchContainer = styled.div`
//   display: inline-block;
//   position: relative;
//   cursor: pointer;
//   padding-left: 0px !important;
// `;

// export const CustomSwitchInput = styled.input`
//   display: none;
// `;

// export const CustomSwitchLabel = styled.label`
//   position: relative;
//   padding: 10px 19px;
//   line-height: 16px;
//   display: inline-block;
//   vertical-align: top;
//   background-color: dimgrey;
//   transition: background-color 0.3s ease;
//   border-radius: 20px;
// `;

// export const CustomSwitchSlider = styled.div`
//   position: absolute;
//   top: 2px;
//   left: 4px;
//   right: 0;
//   border-radius: 20px;
//   transition: background-color 0.3s ease;
// `;

// export const CustomSwitchSliderBefore = styled.div`
//   position: absolute;
//   content: "";
//   width: 16px;
//   height: 16px;
//   border-radius: 50%;
//   background-color: #fff;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
//   transition: transform 0.3s ease;
// `;

// export const CustomSwitchChecked = styled(CustomSwitchLabel)`
//   background-color: #0eed0e;
// `;

// export const CustomSwitchCheckedSlider = styled(CustomSwitchSlider)`
//   background-color: #0eed0e;
// `;

// export const CustomSwitchCheckedSliderBefore = styled(CustomSwitchSliderBefore)`
//   transform: translateX(15px);
// `;
