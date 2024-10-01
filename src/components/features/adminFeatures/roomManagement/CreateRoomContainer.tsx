import { useState } from "react";
import FSModal from "../../../FSModal";
import Title from "../../../ui/Title";
import Input from "../../../form/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import FSSelect, { TOption } from "../../../form/FSSelect";
import FSSubmit from "../../../form/FSSubmit";
import { useAddRoomMutation } from "../../../../redux/features/admin/roomManagement.api";
import LoadingAnimation from "../../../../assets/icons/LoadingAnimation";

type TRoomFormValues = {
  name: string;
  roomNo: number;
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities: string[];
};

const CreateRoomContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit } = useForm<TRoomFormValues>();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<TOption[]>([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const [createRoom] = useAddRoomMutation();

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

    const room = {
      name: data.name,
      roomNo: +data.roomNo,
      floorNo: +data.floorNo,
      capacity: +data.capacity,
      pricePerSlot: +data.pricePerSlot,
      amenities: [...options!.map((item) => item.value)],
    };
    console.log(room);

    try {
      const res = await createRoom(room);
      setIsSubmit(false);
      toast.success(res.data.message, { id: toastId, duration: 2000 });
      setIsModalOpen(false);

      console.log(res);
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
          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="name"
            >
              Room Name
            </label>
            <Input id="name" type="name" register={register("name")} />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="roomNo"
            >
              Room No
            </label>
            <Input id="roomNo" type="roomNo" register={register("roomNo")} />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="floorNo"
            >
              floor No
            </label>
            <Input id="floorNo" type="floorNo" register={register("floorNo")} />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="capacity"
            >
              Capacity
            </label>
            <Input
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
              options={options}
              selectedValues={selectedValues}
              onChange={handleSelectChange}
              onAddOption={handleAddOption} // Pass function to add new option
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>

          <div className="flex items-center justify-between">
            <FSSubmit submitType="success">Create Room</FSSubmit>
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

export default CreateRoomContainer;
