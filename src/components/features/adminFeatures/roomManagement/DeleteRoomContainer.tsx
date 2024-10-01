import { useState } from "react";
import FSModal from "../../../FSModal";
import Title from "../../../ui/Title";
import FSSubmit from "../../../form/FSSubmit";
import { useDeleteRoomMutation } from "../../../../redux/features/admin/roomManagement.api";
import { toast } from "sonner";
import LoadingAnimation from "../../../../assets/icons/LoadingAnimation";

const DeleteRoomContainer = ({ id }: { id: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [deleteRoom] = useDeleteRoomMutation();

  const handleDelete = async () => {
    const toastId = toast.loading("Add New Room ...");
    console.log(id);

    try {
      const res = await deleteRoom(id);
      setIsSubmit(false);
      toast.success(res.data.message, { id: toastId, duration: 2000 });
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const updateModal = async () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      <button
        onClick={updateModal}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 duration-300"
      >
        Delete
      </button>

      <FSModal
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      >
        <Title>Do You Delete This Room</Title>

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

export default DeleteRoomContainer;
