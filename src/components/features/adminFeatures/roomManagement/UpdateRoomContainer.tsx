import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import FSSelect, { TOption } from "../../../form/FSSelect";
import { toast } from "sonner";
import FSModal from "../../../FSModal";
import Title from "../../../ui/Title";
import Input from "../../../form/Input";
import FSSubmit from "../../../form/FSSubmit";
import LoadingAnimation from "../../../../assets/icons/LoadingAnimation";
import {
  useGetSingleRoomQuery,
  useUpdateRoomMutation,
} from "../../../../redux/features/admin/roomManagement.api";

type TRoomFormValues = {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
};

const UpdateRoomContainer = ({ id }: { id: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit } = useForm<TRoomFormValues>();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<TOption[]>([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const [roomId, setRoomId] = useState("");

  const { data } = useGetSingleRoomQuery(roomId);
  const room = data?.data;
  const roomAmenities = room?.amenities?.map((item: string) => ({
    label: item,
    value: item,
  }));
  const [updateRoom] = useUpdateRoomMutation();

  const handleSelectChange = (values: string[]) => {
    setSelectedValues(values);
  };

  // Add a new option to the list
  const handleAddOption = (newOption: TOption) => {
    setOptions((prevOptions) => [...prevOptions, newOption]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  const onSubmit: SubmitHandler<TRoomFormValues> = async (data) => {
    const toastId = toast.loading("Add New Room ...");
    setIsSubmit(true);

    const roomInfo = {
      name: data.name || room.name,
      roomNo: +data.roomNo || room.roomNo,
      floorNo: +data.floorNo || room.floorNo,
      capacity: +data.capacity || room.capacity,
      pricePerSlot: +data.pricePerSlot || room.pricePerSlot,
      amenities: [...options!.map((item) => item.value)] || room.amenities,
    };
    console.log(roomInfo);

    try {
      const res = await updateRoom({ data: roomInfo, id });
      setIsSubmit(false);
      toast.success(res.data.message, { id: toastId, duration: 2000 });
      setIsModalOpen(false);
      console.log(res);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const updateModal = async () => {
    setRoomId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="">
      <button
        onClick={updateModal}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 duration-300"
      >
        Update
      </button>

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
          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="name"
            >
              Room Name
            </label>
            <Input
              defaultValue={room?.name}
              id="name"
              type="name"
              register={register("name")}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="roomNo"
            >
              Room No
            </label>
            <Input
              defaultValue={room?.roomNo}
              id="roomNo"
              type="roomNo"
              register={register("roomNo")}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="floorNo"
            >
              floor No
            </label>
            <Input
              defaultValue={room?.floorNo}
              id="floorNo"
              type="floorNo"
              register={register("floorNo")}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="capacity"
            >
              Capacity
            </label>
            <Input
              defaultValue={room?.capacity}
              id="capacity"
              type="capacity"
              register={register("capacity")}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="pricePerSlot"
            >
              Price Per Slot
            </label>
            <Input
              defaultValue={room?.pricePerSlot}
              id="pricePerSlot"
              type="pricePerSlot"
              register={register("pricePerSlot")}
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="amenities"
            >
              Amenities
            </label>

            <FSSelect
              options={roomAmenities}
              selectedValues={selectedValues}
              onChange={handleSelectChange}
              onAddOption={handleAddOption} // Pass function to add new option
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>

          <div className="flex items-center justify-between">
            <FSSubmit submitType="success">Update Room</FSSubmit>
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

export default UpdateRoomContainer;
