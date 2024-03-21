export const SetlocalStorage = (value: string) => {
  localStorage.setItem('user_cookie', value)
}
export const GetlocalStorage = () => localStorage.getItem('user_cookie') || ''
export const RemovelocalStorage = () => localStorage.removeItem('user_cookie')
