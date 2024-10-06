import { TRoom } from "./roomManagement.type";
import { TSlot } from "./slotManagement.type";
import { TUser } from "./user.type";

export type TBooking = {
  _id: string;
  date: string;
  slots: TSlot[];
  room: TRoom;
  user: TUser;
  totalAmount: number;
  isConfirmed: string;
  isDeleted: boolean;
};

export type TUserBooking = {
  date: string;
  slots: string[];
  room: string;
  user: string;
};
