/**
 * This function takes an object with a single optional property "$aspect". If
 * "$aspect" is provided, it returns a string representing CSS styles for an
 * element that will set its aspect ratio, cover its content, and position it
 * at the center. If "$aspect" is not provided, it returns an empty string.
 *
 * @param {Object} options An object containing a single optional property
 * "$aspect". "$aspect" is a string representing the desired aspect ratio, in the
 * format "width / height". If "$aspect" is not provided, the function returns an
 * empty string.
 *
 * @returns {string} A string representing CSS styles for an element that will
 * set its aspect ratio, cover its content, and position it at the center. If
 * "$aspect" is not provided, the function returns an empty string.
 */
export const getAspect = ({ $aspect }: { $aspect?: string }) =>
  $aspect
    ? `
  aspect-ratio: ${$aspect};
  object-fit: cover;
  object-position: center;
`
    : ''
