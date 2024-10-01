import { TRoom } from "./roomManagement.type";

export type TSlot = {
  _id: string;
  date: string;
  startTime: number;
  endTime: number;
  room: TRoom;
  isBooked: boolean;
};
