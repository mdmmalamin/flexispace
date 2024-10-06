// import { Link } from "react-router-dom";
import { useState } from "react";
import { TRoom } from "../../../../types";
import FSModal from "../../../FSModal";
import Button from "../../../ui/Button";
import Title from "../../../ui/Title";
import LoadingAnimation from "../../../../assets/icons/LoadingAnimation";
import FSSubmit from "../../../form/FSSubmit";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetAllAvailableSlotsQuery } from "../../../../redux/features/user/slotsUser.api";
import { toast } from "sonner";
import FSMultiSelect from "../../../form/FSMultiSelect";
import RoomInfoCard from "./RoomInfoCard";
import { TUserBooking } from "../../../../types/bookingManagement.type";
import { useGetMyProfileQuery } from "../../../../redux/features/user/myProfile.api";
import { useAddMyBookingMutation } from "../../../../redux/features/user/bookingUser.api";
import FSCalendar from "../../../form/FSCalender";
import UserPreFilledContainer from "../bookingProcess/UserPreFilledContainer";

const RoomInfoContainer = ({
  _id,
  name,
  roomNo,
  floorNo,
  capacity,
  pricePerSlot,
  amenities,
}: TRoom) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const { control, handleSubmit } = useForm<TUserBooking>();

  const { data: slotsDataD } = useGetAllAvailableSlotsQuery([
    { name: "roomId", value: _id },
  ]);
  // console.log("slotsData: ", slotsDataD);
  const dateOptions = slotsDataD?.data?.map((item) => item.date);
  // console.log(dateOptions);

  const { data: slotsData } = useGetAllAvailableSlotsQuery(
    [
      { name: "roomId", value: _id },
      { name: "date", value: selectedDate },
    ],
    { skip: !selectedDate }
  );
  const slotOptions = slotsData?.data?.map((item) => ({
    label: `${item.startTime} - ${item.endTime}`,
    value: item._id,
  }));

  const { data: myProfile } = useGetMyProfileQuery(undefined);

  const [createBooking] = useAddMyBookingMutation();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onSubmit: SubmitHandler<TUserBooking> = async (data) => {
    const toastId = toast.loading("Add New Room ...");
    setIsSubmit(true);

    const bookingsInfo = {
      date: data.date,
      slots: data.slots,
      room: _id,
      user: myProfile?.data?._id,
    };

    try {
      const res = await createBooking(bookingsInfo);
      setIsSubmit(false);
      toast.success(res.data.message, { id: toastId, duration: 2000 });
      setIsModalOpen(false);

      // console.log(res);
    } catch (error) {
      toast.error("No date available.", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="col-span-1 w-full p-6 border shadow-sm rounded-md space-y-2 place-self-start bg-primary/5">
      <RoomInfoCard
        name={name}
        roomNo={roomNo}
        capacity={capacity}
        floorNo={floorNo}
        pricePerSlot={pricePerSlot}
        amenities={amenities}
      />

      <Button
        className="w-full bg-primary text-white"
        onClick={() => setIsModalOpen(true)}
      >
        Book Now
      </Button>

      <FSModal
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      >
        <Title>Booking Confirmation</Title>

        <form
          className="space-y-6 mt-6"
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={handleKeyDown}
        >
          <FSCalendar
            name="date"
            control={control}
            label="Select Date"
            availableDates={dateOptions}
            setSelectedDate={setSelectedDate}
          />

          <FSMultiSelect
            name="slots"
            control={control}
            options={slotOptions}
            label="Select Slots"
          />

          <UserPreFilledContainer {...myProfile?.data} />

          <FSSubmit submitType="success">Approve</FSSubmit>
        </form>

        {isSubmit && (
          <div className="absolute top-0 left-0 w-full h-full bg-dark/10">
            <div className="w-full h-full flex items-center justify-center scale-110 backdrop-blur-[1px]">
              <LoadingAnimation />
            </div>
          </div>
        )}
      </FSModal>
    </div>
  );
};

export default RoomInfoContainer;
