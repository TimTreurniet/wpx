// import { useState, useEffect, useContext } from 'react'
import { ProfileStatusInterface } from "./ProfileStatus.interface";
import { ProfileIcon } from "../../atoms";

/// TODO: update interface/arguments for ProfileStatus
const ProfileStatus = ({
  testID,
  style,
  type,
  size,
  props,
}: ProfileStatusInterface) => {
  return (
    <div
      data-testid={testID}
      data-object-type={type ?? ""}
      className={`ProfileStatus`}
    >
      <ProfileIcon />
    </div>
  );
};

export default ProfileStatus;
