import CreateSlotModal from "../../components/features/adminFeatures/slotManagement/CreateSlotModal";
import SlotTableContainer from "../../components/features/adminFeatures/slotManagement/SlotTableContainer";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";

const SlotsManagement = () => {
  return (
    <Container className="space-y-6">
      <div className="flex items-center justify-between gap-5">
        <Title className="!text-left my-2">Slot Table</Title>

        <CreateSlotModal />
      </div>

      <SlotTableContainer />
    </Container>
  );
};

export default SlotsManagement;
