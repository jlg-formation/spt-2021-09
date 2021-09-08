export function getPosition(event: MouseEvent) {
  const e = event.target as SVGElement;
  const dim = e.getBoundingClientRect();
  const x = event.clientX - dim.left;
  const y = event.clientY - dim.top;

  return { x, y };
}
