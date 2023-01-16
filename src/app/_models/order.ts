export interface Quib_User {
  id: string | number
  displayName: string,
  firstName: string,
  lastName: string,
  email: string,
  status: string,
  joinDate: string,
  bmp: string | number,
  fng: string | number,
  frs: string | number,
  unp: string | number
}

export interface Quib {
  id:number | any
  user: string | number,
  movies: string,
  quib: string,
  time: string,
  createdDate: string,
  postedDate: string,
  isEnabled: string,
  isBumped: string,
  quibType: string | number,
}