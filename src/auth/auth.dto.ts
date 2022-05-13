export class LoginPayload {
  username: string;
  password: string;
}

export interface Token {
  access_token: string;
  refresh_token: string;
  user_id: string;
}

export interface JwtDto {
  userId: string;
  /**
   * Issued at
   */
  iat: number;
  /**
   * Expiration time
   */
  exp: number;
}

export class UserCreatePayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  region_id: number;
}
