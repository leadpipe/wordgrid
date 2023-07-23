/**
 * The symmetry group of the square, the dihedral group D4.  These are the 8
 * different transformations that you can achieve via the "rotate" and "flip"
 * operations in the puzzle.
 *
 * We encode the group elements in 3 bits, with the lower 2 bits encoding the
 * rotation and the 3rd bit encoding the flip.  We apply the rotation first.
 */
export enum D4 {
  /** The identity. */
  E = 0,
  /** Quarter-turn clockwise. */
  R = 1,
  /** Half-turn. */
  R2 = 2,
  /** Quarter-turn counterclockwise. */
  R3 = 3,
  /** Vertical mirror. */
  F = 4,
  /** Main diagonal mirror. */
  RF = 5,
  /** Horizontal mirror. */
  R2F = 6,
  /** Antidiagonal mirror. */
  R3F = 7,
}

/**
 * Returns the number of clockwise quarter turns in a D4 element.
 * @param d4 The group element
 * @returns The number of clockwise quarter turns in the element
 */
export function d4Rotation(d4: D4): number {
  return d4 & 3;
}

/**
 * Tells whether a D4 element contains a flip or reflection.
 * @param d4 The group element
 * @returns Whether the element contains a reflection
 */
export function d4Flipped(d4: D4): boolean {
  return Boolean(d4 & 4);
}

/**
 * Finds the D4 group element with the given number of clockwise quarter turns
 * and flip or reflection.
 * @param rotation The number of clockwise quarter turns in the element
 * @param flip Whether the element contains a flip
 * @returns The group element with the given rotation and flip
 */
export function d4Find(rotation: number, flip: boolean): D4 {
  return (rotation & 3) | (flip ? 4 : 0);
}

/**
 * Returns the inverse of a given D4 element, meaning the one that combines with
 * this one to produce the identity.
 * @param d4 The group element
 * @returns The inverse element
 */
export function d4Inverse(d4: D4): D4 {
  // R and R3 are each others' inverses.
  if ((d4 & 5) === 1) return d4 ^ 2;
  // Everything else is its own inverse.
  return d4;
}

/**
 * Combines two D4 elements, producing the D4 element that results from applying
 * the first element followed by the second element.
 * @param d4 The starting group element
 * @param other The group element to combine with it
 * @returns The combined group element
 */
export function d4Combine(d4: D4, other: D4): D4 {
  const rotation = 3 & (d4 & 4 ? d4 - other : d4 + other);
  return rotation | ((d4 & 4) ^ (other & 4));
}
