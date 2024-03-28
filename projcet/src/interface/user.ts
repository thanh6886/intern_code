export interface User {
  countOfLoginAttempts: number
  dateOfLoginAttempt: number
  firstName: string
  forceChangePassword: number
  lastName: string
  login: string
  profile_id: number
}

export interface ILocation {
  id: number
  name: string
}
