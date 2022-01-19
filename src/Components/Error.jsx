import styled from "@emotion/styled";

const Alerta = styled.div`
  background-color: #B7322C;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  margin-bottom: 30px;
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  
  @media (min-width: 720px) {
    font-size: 18px;
    
  }
`

const Error = ({children}) => {
  return (
    <Alerta>
      {children}
    </Alerta>
  );
};

export default Error
