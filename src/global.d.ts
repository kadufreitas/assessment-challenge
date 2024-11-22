type AccessTokenResponse = {
  access_token: string
  token_type: string
  scope: string
}

declare module '@uphold/uphold-sdk-javascript' {
  export default class SDK {
    constructor(options: { baseUrl: string; clientId: string; clientSecret: string })
    oauthClient: {
      clientId: string
    }
    authorize(code: string): Promise<AccessTokenResponse>
    getMe(options?: Record<string, unknown>): Promise<any>
  }
}

declare module 'js-cookie' {
  export function remove(key: string): void
  export function get(key: string): string
  export function set(key: string, value: string): void
}
