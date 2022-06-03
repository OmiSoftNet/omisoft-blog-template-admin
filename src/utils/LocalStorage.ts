/**
 * @description Class containing methods to work with localStorage
 */
export class LocalStorage {
  static getToken() {
    return localStorage.getItem("accessToken");
  }
  static setToken(token: string) {
    localStorage.setItem("accessToken", token);
  }
  static setRefreshToken(token: string) {
    localStorage.setItem("refreshToken", token);
  }
  static clearToken() {
    localStorage.removeItem("accessToken");
  }
}
