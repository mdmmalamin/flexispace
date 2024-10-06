import { TUser } from "../../../../types/user.type";
import Input from "../../../form/Input";
import Title from "../../../ui/Title";

const UserPreFilledContainer = ({
  name,
  email,
  phone,
  address,
}: Partial<TUser>) => {
  return (
    <div>
      <Title>Your Information</Title>

      <Input disabled={true} defaultValue={name} name="name" />
      <Input disabled={true} defaultValue={email} name="name" />
      <Input disabled={true} defaultValue={phone} name="name" />
      <Input disabled={true} defaultValue={address} name="name" />
    </div>
  );
};

export default UserPreFilledContainer;
