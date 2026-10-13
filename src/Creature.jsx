import { useState } from "react";

function Creature({
  name,
  age,
  sleepImageUrl,
  awakeImageUrl,
  x,
  y,
}) {
  const [isAwake, setIsAwake] = useState(false);

  const [position, setPosition] = useState({
    x: x,
    y: y,
  });

  function handleClick() {
    const wakingUp = !isAwake;

    setIsAwake(wakingUp);

    if (wakingUp) {
      setPosition({
        x: Math.random() * 80,
        y: Math.random() * 80,
      });
    }
  }

  return (
    <div
      style={{
        position: "absolute",
        left: `${position.x}%`,
        top: `${position.y}%`,
        textAlign: "center",
      }}
    >
      <img
        src={isAwake ? awakeImageUrl : sleepImageUrl}
        alt={name}
        width="100"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />

      <p>
        {name}, age {age}
      </p>
    </div>
  );
}

export default Creature;