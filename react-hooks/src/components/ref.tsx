import { useEffect, useRef, useState } from "react";

function RefComp() {
  const passswordRef = useRef<HTMLInputElement | null>(null);
  const [show, setShow] = useState<boolean>(false)

  const handleShow = () => {
    setShow(!show);
    if (passswordRef.current) {
        passswordRef.current.type = !show ? "text" : "password"
    }
  }

  useEffect(() => {
    passswordRef.current?.focus()
  }, [])
  return (
    <div>
      <input
        ref={passswordRef}
        type="password"
        placeholder="Enter your password"
      />
      <button onClick={handleShow}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default RefComp;
