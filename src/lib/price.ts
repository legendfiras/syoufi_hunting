import type { CategoryId } from "@/content/products";

const bands: Record<CategoryId, { min: number; max: number; step: number }> = {
  rifles: { min: 480, max: 1290, step: 10 },
  cartridges: { min: 16, max: 48, step: 1 },
  optics: { min: 79, max: 329, step: 5 },
  clothing: { min: 24, max: 165, step: 5 },
  camping: { min: 19, max: 449, step: 5 },
  lighting: { min: 29, max: 119, step: 1 },
};

function hash(value: string) {
  let h = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Stable sample price in USD. The same product always gets the same figure. */
export function demoPrice(id: string, category: CategoryId) {
  const band = bands[category];
  const steps = Math.floor((band.max - band.min) / band.step);
  return band.min + (hash(id) % (steps + 1)) * band.step;
}

export function formatPrice(amount: number) {
  const digits = Math.round(amount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `$${digits}`;
}
