export interface IUser {
  name: string;
  avatar: string;
  email: string;
}

export interface IProject {
  id?: string;
  user?: IUser;
  created_at?: Date;
  color: string;
  code: string;
  name: string;
  description: string;
  comments: IUser[];
  hearts: IUser[];
}
