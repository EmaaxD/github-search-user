import { FC, useContext } from "react";
import styled from "styled-components";

import { userContext } from "../../context/actions/UserProvider";

import { UserContent } from "../UI/UserContent";
import { UserLinks } from "../UI/UserLinks";
import { UserTop } from "../UI/UserTop";

export const UserData: FC = () => {
  const { user } = useContext(userContext);

  return (
    <>
      <Container>
        {user && (
          <>
            <Pfp src={user.pfp} alt={user.username} />

            <SideArea>
              <UserTop
                username={user.username}
                bio={user.bio}
                name={user.name}
                joinedAt={user.joinedAt}
                pfp={user.pfp}
              />

              <UserContent
                repos={user.repos}
                followers={user.followers}
                following={user.following}
              />

              <UserLinks links={user.links} />
            </SideArea>
          </>
        )}
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};
  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;
  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }
  @media (min-width: 900px) {
    padding: 4.8rem;
  }
  a {
    all: unset;
    cursor: pointer;
  }
`;

const Pfp = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 3.7rem;
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
`;

const SideArea = styled.div`
  width: 100%;
`;
