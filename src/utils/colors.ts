export function transparent(color: string, opacity: number) {
  if (opacity == 1) return color;
  return color + (opacity * 256).toString(16).padStart(2, "0");
}
