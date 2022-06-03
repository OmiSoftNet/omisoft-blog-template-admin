export interface IUsersListQueryData {
  limit?: number;
  page?: number;
  id?: string;
}

export type User = {
  _id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  role?: string;
};

export type UserLogged = User & { accessToken: string; refreshToken: string };
