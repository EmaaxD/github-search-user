import { FC, useRef, useContext, useState } from "react";
import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

import { userContext } from "../../context/actions/UserProvider";

import { Loading } from "./Loading";

export const UserSearch: FC = () => {
  const [message, setMessage] = useState<string>("");

  const userName = useRef<HTMLInputElement>(null);

  const { loading, handleSearchUser } = useContext(userContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setMessage("");

    try {
      let userToSearch = userName.current?.value.toLocaleLowerCase();

      if (userToSearch?.trim() === "") {
        setMessage("Enter User");
        return;
      }

      if (/(<[a-z>(')/<]*)/.exec(`${userToSearch}`)) return;

      await handleSearchUser(userToSearch);
    } catch (error: any) {
      setMessage(error);
    }
  };

  return (
    <>
      <InputArea onSubmit={handleSubmit}>
        <InputLabel>
          <IoMdSearch color="white" size={30} />
        </InputLabel>

        <Input
          name="username"
          id="username"
          ref={userName}
          type="text"
          placeholder={loading ? "Buscando..." : "Busca un usuario"}
          disabled={loading}
        />
        {message !== "" && <Warn>{message}</Warn>}
        {loading && <Loading />}

        <SubmitBtn type="submit">Search</SubmitBtn>
      </InputArea>
    </>
  );
};

const Warn = styled.small`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: #f74646;
  margin-right: 2.4rem;
`;

const InputArea = styled.form`
  margin-top: 3.6rem;
  border-radius: 1.5rem;
  background: ${(props) => props.theme.colors.card};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0.7rem 0.7rem 1.6rem;
  transition: height 0.3s ease;
  position: relative;
  @media (min-width: 768px) {
    height: 6.9rem;
  }
`;

const InputLabel = styled.label`
  height: 2.4rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 192%;
  color: ${(props) => props.theme.colors.textNorm};
  background: none;
  border: none;
  margin: 0 0.8rem;
  outline: none;
  @media (min-width: 768px) {
    font-size: 1.7rem;
    margin: 0 2.4rem;
  }
`;

const SubmitBtn = styled.button`
  background: #0079ff;
  border: none;
  height: 100%;
  border-radius: 1rem;
  line-height: 2.1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  width: 8.4rem;
  transition: all 0.3s ease-out;
  &:hover {
    filter: brightness(1.05);
    box-shadow: 0px 0px 15px -3px #0079ff;
  }
  @media (min-width: 768px) {
    width: 10.6rem;
    font-size: 1.7rem;
  }
`;
