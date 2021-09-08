export function getPosition(event) {
  console.log("event: ", event);
  const e = event.target;
  const dim = e.getBoundingClientRect();
  const x = event.clientX - dim.left;
  const y = event.clientY - dim.top;

  return { x, y };
}
