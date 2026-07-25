"use client"
import { useState } from "react";
export default function Home() {

  const [number, setNumber] = useState(1)
  const [name, setName] = useState("สมชาย")

  function incrementNumber() {
    setNumber(number + 1);
  }
  function decrementNumber() {
    if (number > 0) {
      setNumber(number - 1)
    }
  }
  function changeName(e: any) {
    e.preventDefault();
    alert(name);
  }

  function handleChangeName(e: any) {
    e.preventDefault();
    setName(e.target.value);
  }


  return (
    <div>
      จำนวนคลิก {number} <br />
      <button onClick={incrementNumber}>กดเพื่อเพิ่มค่า</button> | <button onClick={decrementNumber}>กดเพื่อลดค่า</button>
      <hr />

      <form onSubmit={changeName}>
        ชื่อ {name} <br />
        <input value={name} type="text" name="name" onChange={handleChangeName} >
          <button onClick={changeName}>เปลี่ยนชื่อ</button>
      </form>
    </div>
  );
}
