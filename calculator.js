/**
 * Florida Roof Replacement Cost Calculator
 * Based on 1,200+ completed projects by Goliath Roofing of Florida
 * https://goliathroofingofflorida.com
 */

const COST_DATA = {
  'miami-dade': {
    shingle: { min: 6.25, max: 9.50, label: 'Architectural Shingle' },
    tile: { min: 9.00, max: 18.00, label: 'Concrete/Clay Tile' },
    metal: { min: 11.00, max: 19.00, label: 'Standing Seam Metal' },
    tpo: { min: 6.00, max: 10.00, label: 'TPO Membrane' },
    hvhzMultiplier: 1.12,
    permitFee: { min: 300, max: 800 },
  },
  'broward': {
    shingle: { min: 5.25, max: 8.50, label: 'Architectural Shingle' },
    tile: { min: 7.50, max: 16.00, label: 'Concrete/Clay Tile' },
    metal: { min: 9.50, max: 17.50, label: 'Standing Seam Metal' },
    tpo: { min: 5.25, max: 9.00, label: 'TPO Membrane' },
    hvhzMultiplier: 1.0,
    permitFee: { min: 200, max: 500 },
  },
  'palm-beach': {
    shingle: { min: 5.50, max: 9.00, label: 'Architectural Shingle' },
    tile: { min: 8.00, max: 17.00, label: 'Concrete/Clay Tile' },
    metal: { min: 10.00, max: 18.00, label: 'Standing Seam Metal' },
    tpo: { min: 5.50, max: 9.50, label: 'TPO Membrane' },
    hvhzMultiplier: 1.0,
    permitFee: { min: 200, max: 500 },
  },
};

const PITCH_MULTIPLIER = { low: 0.95, standard: 1.0, steep: 1.15 };
const STORY_MULTIPLIER = { 1: 1.0, 2: 1.10, 3: 1.20 };

function calculateRoofCost({ squareFeet = 2000, material = 'shingle', county = 'broward', stories = 1, pitch = 'standard' }) {
  const countyData = COST_DATA[county];
  if (!countyData) throw new Error('Invalid county. Use: miami-dade, broward, palm-beach');

  const materialData = countyData[material];
  if (!materialData) throw new Error('Invalid material. Use: shingle, tile, metal, tpo');

  const pitchMult = PITCH_MULTIPLIER[pitch] || 1.0;
  const storyMult = STORY_MULTIPLIER[stories] || 1.0;

  const min = Math.round(squareFeet * materialData.min * pitchMult * storyMult);
  const max = Math.round(squareFeet * materialData.max * pitchMult * storyMult);

  return {
    min,
    max,
    formatted: '$' + min.toLocaleString() + ' - $' + max.toLocaleString(),
    material: materialData.label,
    county: county.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    squareFeet,
    permitFee: countyData.permitFee,
    hvhzZone: county === 'miami-dade',
    note: county === 'miami-dade'
      ? 'Includes 10-15% HVHZ premium for NOA-approved materials'
      : 'Standard Florida Building Code pricing',
    source: 'Goliath Roofing of Florida - goliathroofingofflorida.com',
  };
}

module.exports = { calculateRoofCost, COST_DATA };
