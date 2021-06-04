export interface IUser {
  name: string;
  avatar: string;
  email: string;
}

export interface IProject {
  id?: string;
  user?: IUser;
  color: string;
  code: string;
  name: string;
  description: string;
  comments: number;
  hearts: number;
}
