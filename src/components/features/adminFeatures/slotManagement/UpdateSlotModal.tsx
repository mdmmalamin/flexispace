import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import FSModal from "../../../FSModal";
import Title from "../../../ui/Title";
import FSSubmit from "../../../form/FSSubmit";
import LoadingAnimation from "../../../../assets/icons/LoadingAnimation";
import EditSolid from "../../../../assets/icons/EditSolid";
import FSDatePicker from "../../../form/FSDatePicker";
import FSTimePicker from "../../../form/FSTimePicker";
import { TSlot } from "../../../../types/slotManagement.type";
import { useUpdateSlotMutation } from "../../../../redux/features/admin/slotManagement.api";

const UpdateSlotModal = ({ _id, date, startTime, endTime }: TSlot) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { control, handleSubmit } = useForm<TSlot>();
  const [isSubmit, setIsSubmit] = useState(false);

  const [updateSlot] = useUpdateSlotMutation();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  const onSubmit: SubmitHandler<TSlot> = async (data) => {
    const toastId = toast.loading("Update Slot ...");
    setIsSubmit(true);

    const slotInfo = {
      date: data.date || date,
      startTime: data.startTime || startTime,
      endTime: data.endTime || endTime,
    };
    console.log(slotInfo);

    try {
      const res = await updateSlot({ data: slotInfo, id: _id });
      setIsSubmit(false);
      toast.success(res.data.message, { id: toastId, duration: 2000 });
      setIsModalOpen(false);
      console.log(res);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <FSSubmit onClick={() => setIsModalOpen(true)}>
        <EditSolid />
      </FSSubmit>

      <FSModal
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      >
        <Title>Update The Room</Title>

        <form
          className="space-y-6 my-6"
          onSubmit={handleSubmit(onSubmit)}
          onKeyDown={handleKeyDown}
        >
          <FSDatePicker
            name="date"
            control={control}
            label="Select Date"
            defaultValue={date}
          />

          <FSTimePicker
            name="startTime"
            control={control}
            label="Start Time"
            defaultValue={startTime}
          />

          <FSTimePicker
            name="endTime"
            control={control}
            label="End Time"
            defaultValue={endTime}
          />
          <div className="flex items-center justify-between">
            <FSSubmit submitType="success">Update Slot</FSSubmit>
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

export default UpdateSlotModal;
