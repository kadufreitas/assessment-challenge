import Cookies from 'js-cookie'

class TokenManager {
  private token: string | null = null

  // Get the token
  public getToken(): string | null {
    if (!this.token) {
      this.token = Cookies.get('token')
    }
    return this.token
  }

  // Set the token
  public setToken(token: string): void {
    this.token = token
  }

  // Clear the token
  public clearToken(): void {
    this.token = null
  }
}

const tokenManager = new TokenManager()

export { tokenManager }
