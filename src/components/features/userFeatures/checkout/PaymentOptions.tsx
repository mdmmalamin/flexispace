/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import FSOptions from "../../../form/FSOptions";
import FSSubmit from "../../../form/FSSubmit";
import { useState } from "react";
import FSModal from "../../../FSModal";
import Title from "../../../ui/Title";
import { toast } from "sonner";
import ThankYouMessage from "./ThankYouMessage";

const PaymentOptions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const { control, handleSubmit } = useForm<any>();

  const onSubmitPayment = (data: any) => {
    data.paymentOption === "stripe"
      ? setIsModalOpen(true)
      : toast.warning("Please select payment option.");
    console.log(data);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    setIsSubmit(true);
  };
  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit(onSubmitPayment)}>
        <FSOptions
          name="paymentOption"
          control={control}
          options={[
            // { value: "COD", label: "COD" },
            { value: "stripe", label: "Stripe" },
          ]}
          label="Payment Options"
        />

        <FSSubmit className="w-full" submitType="success">
          Confirm Payment
        </FSSubmit>
      </form>

      <FSModal
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      >
        <Title>Stripe Payment</Title>

        <form className="space-y-6 mt-6" onSubmit={handleSubmit(onSubmit)}>
          <FSSubmit submitType="success">Payment Process</FSSubmit>
        </form>

        {isSubmit && (
          <div className="absolute top-0 left-0 w-full h-full bg-dark/10">
            <div className="w-full h-full flex items-center justify-center scale-110 backdrop-blur-[1px]">
              <ThankYouMessage thanks={true} />
            </div>
          </div>
        )}
      </FSModal>
    </div>
  );
};

export default PaymentOptions;
