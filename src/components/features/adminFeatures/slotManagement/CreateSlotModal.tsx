import { useState } from "react";
import FSModal from "../../../FSModal";
import Title from "../../../ui/Title";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import FSSubmit from "../../../form/FSSubmit";
import LoadingAnimation from "../../../../assets/icons/LoadingAnimation";
import { useAddSlotMutation } from "../../../../redux/features/admin/slotManagement.api";
import FSDatePicker from "../../../form/FSDatePicker";
import FSTimePicker from "../../../form/FSTimePicker";
import { TSlot } from "../../../../types/slotManagement.type";
import FSOptions from "../../../form/FSOptions";
import { useGetAllRoomsQuery } from "../../../../redux/features/admin/roomManagement.api";

const CreateSlotModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { control, handleSubmit } = useForm<TSlot>();
  const [isSubmit, setIsSubmit] = useState(false);

  const { data: roomData } = useGetAllRoomsQuery(undefined);
  // console.log(roomData?.data);
  const options = roomData?.data?.map((item) => ({
    label: item.name,
    value: item._id,
  }));

  const [createSlot] = useAddSlotMutation();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  const onSubmit: SubmitHandler<TSlot> = async (data) => {
    const toastId = toast.loading("Add New Room ...");
    setIsSubmit(true);

    // console.log(data);

    try {
      const res = await createSlot(data);
      setIsSubmit(false);
      toast.success(res.data.message, { id: toastId, duration: 2000 });
      setIsModalOpen(false);

      // console.log(res);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 duration-300"
      >
        Add A New Room
      </button>

      <FSModal
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      >
        <Title>Add A New Room</Title>

        <form
          className="space-y-6 mt-6"
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={handleKeyDown}
        >
          <FSOptions
            name="room"
            control={control}
            options={options}
            label="Select Room"
          />

          <FSDatePicker name="date" control={control} label="Select Date" />

          <FSTimePicker name="startTime" control={control} label="Start Time" />

          <FSTimePicker name="endTime" control={control} label="End Time" />

          <div className="flex items-center justify-between">
            <FSSubmit submitType="success">Create Slot</FSSubmit>
            <FSSubmit submitType="danger" onClick={() => setIsModalOpen(false)}>
              Close
            </FSSubmit>
          </div>
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

export default CreateSlotModal;
