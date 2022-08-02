import styled from "styled-components";

import { ThemeContext } from "../context/actions/ThemeContext";
import { UserProvider } from "../context/actions/UserProvider";

import { TopArea } from "./container/TopArea";
import { UserData } from "./container/UserData";

function App() {
  return (
    <div className="app">
      <ThemeContext>
        <UserProvider>
          <Container>
            <TopArea />

            <UserData />
          </Container>
        </UserProvider>
      </ThemeContext>
    </div>
  );
}

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
  padding: 3.1rem 2.4rem;
  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`;

export default App;
