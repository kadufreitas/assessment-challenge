declare module '@uphold/uphold-sdk-javascript' {
  export default class SDK {
    constructor(options: { baseUrl: string; clientId: string; clientSecret: string })
    authorize(code: string): Promise<void>
    getMe(): Promise<any>
  }
}
