import { TypeAnimation } from 'react-type-animation';

const TextMoving = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "I'm frontend developer.",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "And currently I'm learning about backend too.",
        1000,
        "You can contact me bellow.",
        1000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="p"
      speed={70}
      style={{ fontSize: '2em', display: 'inline-block', color: "white" }}
      repeat={Infinity}
    />
  );
};

export default TextMoving