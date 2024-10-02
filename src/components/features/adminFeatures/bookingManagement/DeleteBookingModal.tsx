import { useState } from "react";
import FSModal from "../../../FSModal";
import FSSubmit from "../../../form/FSSubmit";
import { toast } from "sonner";
import LoadingAnimation from "../../../../assets/icons/LoadingAnimation";
import DeleteSolid from "../../../../assets/icons/DeleteSolid";
import Subtitle from "../../../ui/Subtitle";
import { useDeleteBookingMutation } from "../../../../redux/features/admin/bookingManagement.api";

const DeleteBookingModal = ({ id }: { id: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [deleteBooking] = useDeleteBookingMutation();

  const handleDelete = async () => {
    const toastId = toast.loading("Deleting Booking ...");

    try {
      const res = await deleteBooking(id);
      setIsSubmit(false);
      toast.success(res.data.message, { id: toastId, duration: 2000 });
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div>
      <FSSubmit onClick={() => setIsModalOpen(true)}>
        <DeleteSolid />
      </FSSubmit>

      <FSModal
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      >
        <Subtitle>Are you sure you want to delete this booking?</Subtitle>

        <div className="flex items-center justify-between py-6">
          <FSSubmit submitType="danger" onClick={handleDelete}>
            Delete
          </FSSubmit>

          <FSSubmit submitType="success" onClick={() => setIsModalOpen(false)}>
            Cancel
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

export default DeleteBookingModal;
