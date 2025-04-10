// import { useState, useEffect, useContext } from 'react'
import { ConnectionStatusInterface } from "./ConnectionStatus.interface";
import { StatusIcon } from "../../atoms";
/// TODO: update interface/arguments for ConnectionStatus
const ConnectionStatus = ({
  testID,
  style,
  type,
  size,
  props,
}: ConnectionStatusInterface) => {
  return (
    <div
      data-testid={testID}
      data-object-type={type ?? ""}
      className={`ConnectionStatus`}
    >
      <StatusIcon />
    </div>
  );
};

export default ConnectionStatus;
