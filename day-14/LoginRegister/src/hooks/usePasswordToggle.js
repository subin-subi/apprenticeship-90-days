import { useState } from "react";

function usePasswordToggle() {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible((v) => !v);

  return {
    type: visible ? "text" : "password",
    visible,
    toggle
  };
}

export default usePasswordToggle;
