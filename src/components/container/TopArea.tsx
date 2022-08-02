import { FC } from "react";
import styled from "styled-components";

import { ChangeTheme } from "../UI/ChangeTheme";
import { UserSearch } from "../UI/UserSearch";

export const TopArea: FC = () => {
  return (
    <>
      <Container>
        <ChangeTheme />
        <UserSearch />
      </Container>
    </>
  );
};

const Container = styled.header`
  width: 100%;
  max-width: 73.3rem;
`;
