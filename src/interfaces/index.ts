export interface GithubResponse {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: null;
  email: null;
  hireable: null;
  bio: null;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

export interface UserProps {
  pfp: string;
  name: string;
  joinedAt: string | Date;
  username: string;
  bio: string | null;
  repos: number | null;
  followers: number | null;
  following: number | null;
  links: {
    location: string | null;
    twitter: string | null;
    blog: string | null;
    company: string | null;
  };
}

export interface UserDataProps {
  user: UserProps;
}

export interface UserReducerAction {
  type: string;
  payload?: any;
}

export interface UserContextProps {
  loading: boolean;
  user: any;
  error: any;
  handleSearchUser: Function;
}

export interface UserTopProps {
  username: string;
  bio: string;
  name: string;
  joinedAt: string;
  pfp: string;
}

export interface UserContentProps {
  repos: string;
  followers: string;
  following: string;
}

export interface UserLiksProps {
  links: {
    location: string;
    blog: string;
    twitter: string;
    company: string;
  };
}
