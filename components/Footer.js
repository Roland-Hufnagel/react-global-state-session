export default function Footer({dragonCount}) {
  // const dragonCount = "???";
  return (
    <span>
      Counting since 1899 — Currently there are <strong>{dragonCount}</strong>{" "}
      dragons.
    </span>
  );
}
