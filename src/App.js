
import "./App.css";
import styled from "styled-components";


// Route 연결
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <AppMain>
      <MainCard>
        <Routes>
          <Route>
          </Route>
        </Routes>
      </MainCard>
    </AppMain>

  );
}

const AppMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MainCard = styled.div`
  background-color: #fff;
  border-radius: 40px;
  width: 400px;
  height: 568.89px;
  @media (max-width: 500px) {
    & {
      width: 300px;
      height: 426.67px;
    }
  }
`;

export default App;
