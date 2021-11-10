import { Collection, ObjectId } from 'mongodb';

export interface Viewer {
  _id?: string,
  token?: string,
  avatar?: string,
  walletId?: string,
  didRequest: boolean
}

export enum ListingType {
  Apartment = 'APARTMENT',
  House = 'HOUSE'
}

export interface BookingIndexMonth {
  [key: string]: boolean
}

export interface BookingIndexYear {
  [key: string]: BookingIndexMonth
}

export interface BookingsIndex {
  [key: string]: BookingIndexYear
}

export interface Booking {
  _id: ObjectId,
  listing: ObjectId,
  tenant: string,
  checkIn: string,
  checkOut: string
}

export interface Listing {
  _id: ObjectId,
  title: string,
  description: string,
  image: string,
  host: string,
  address: string,
  country: string,
  city: string,
  admin: string,
  bookings: ObjectId[],
  price: number,
  numOfGuests: number
  type: ListingType,
  bookingsIndex: BookingsIndex

}

export interface User {
  _id: string,
  token: string,
  name: string,
  avatar: string,
  contact: string,
  walletId?: string,
  income: number,
  bookings: ObjectId[],
  listings: ObjectId[]
}

export interface Database {
  bookings: Collection<Booking>;
  listings: Collection<Listing>;
  users: Collection<User>;
}
