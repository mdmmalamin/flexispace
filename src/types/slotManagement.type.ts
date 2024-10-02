import { TRoom } from "./roomManagement.type";

export type TSlot = {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  room: TRoom;
  isBooked: boolean;
};
