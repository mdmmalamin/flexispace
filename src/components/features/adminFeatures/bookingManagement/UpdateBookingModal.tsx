import { useState } from "react";
import { toast } from "sonner";
import FSModal from "../../../FSModal";
import Title from "../../../ui/Title";
import FSSubmit from "../../../form/FSSubmit";
import LoadingAnimation from "../../../../assets/icons/LoadingAnimation";
import { TBooking } from "../../../../types/bookingManagement.type";
import { useUpdateBookingMutation } from "../../../../redux/features/admin/bookingManagement.api";
import AlertSolid from "../../../../assets/icons/AlertSolid";

const UpdateBookingModal = ({ _id, isConfirmed }: TBooking) => {
  console.log(isConfirmed);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [updateBooking] = useUpdateBookingMutation();

  const onSubmitApprove = async () => {
    const toastId = toast.loading("Processing ...");
    setIsSubmit(true);

    try {
      const res = await updateBooking({
        data: { isConfirmed: "confirmed" },
        id: _id,
      });
      setIsSubmit(false);
      toast.success("Booking confirmed successfully.", {
        id: toastId,
        duration: 2000,
      });
      setIsModalOpen(false);
      console.log(res);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const onSubmitReject = async () => {
    const toastId = toast.loading("Processing ...");
    setIsSubmit(true);

    try {
      const res = await updateBooking({
        data: { isConfirmed: "canceled" },
        id: _id,
      });
      setIsSubmit(false);
      toast.success("This Booking Rejected.", {
        id: toastId,
        duration: 2000,
      });
      setIsModalOpen(false);
      console.log(res);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <FSSubmit onClick={() => setIsModalOpen(true)}>
        <AlertSolid />
      </FSSubmit>

      <FSModal
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      >
        <Title>Booking Confirmation</Title>

        <div className="flex items-center justify-between space-y-6">
          <FSSubmit submitType="success" onClick={onSubmitApprove}>
            Approve
          </FSSubmit>

          <FSSubmit submitType="danger" onClick={onSubmitReject}>
            Reject
          </FSSubmit>
        </div>

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

export default UpdateBookingModal;
