import { createContext, FC, ReactNode, useReducer, useEffect } from "react";
import axios from "axios";

import { LOADING_USER, SET_USER, ERROR_USER } from "../types";
import { GithubResponse, UserContextProps, UserProps } from "../../interfaces";

import { initialState, userReducer } from "../reducers/userReducer";
import { joinedDate } from "../../utils/dateFormta";

interface Props {
  children: ReactNode;
}

export const userContext = createContext({} as UserContextProps);

export const UserProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    (async function () {
      if (!state.user) {
        await handleSearchUser();
      }
    })();
  }, []);

  const handleSearchUser = async (userName: string = "octocat") => {
    dispatch({
      type: LOADING_USER,
    });

    try {
      const { data } = await axios.get<GithubResponse>(
        `https://api.github.com/users/${userName}`
      );
      console.log("response api", data);

      const user: UserProps = {
        pfp: data.avatar_url,
        name: data.name,
        joinedAt: joinedDate(`${data.created_at}`),
        username: data.login,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        repos: data.public_repos,
        links: {
          blog: data.blog,
          company: data.company,
          location: data.location,
          twitter: data.twitter_username,
        },
      };

      dispatch({
        type: SET_USER,
        payload: user,
      });
    } catch (error: any) {
      const message = error?.response.data.message;

      dispatch({
        type: ERROR_USER,
        payload: message,
      });

      return Promise.reject(message);
    }
  };

  return (
    <userContext.Provider
      value={{
        loading: state.loading,
        user: state.user,
        error: state.error,
        handleSearchUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
