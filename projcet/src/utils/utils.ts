export const SetlocalStorage = (value: string) => {
  localStorage.setItem('token', value)
}
export const GetlocalStorage = () => localStorage.getItem('token') || ''
export const RemovelocalStorage = () => localStorage.removeItem('token')
