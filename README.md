# Florida Roof Replacement Cost Calculator

A simple JavaScript calculator for estimating roof replacement costs in South Florida.

Built by [Goliath Roofing of Florida](https://goliathroofingofflorida.com) — serving Miami-Dade, Broward, and Palm Beach counties.

## Usage

```javascript
const { calculateRoofCost } = require('./calculator');

const estimate = calculateRoofCost({
  squareFeet: 2000,
  material: 'shingle',      // shingle, tile, metal, tpo
  county: 'miami-dade',     // miami-dade, broward, palm-beach
  stories: 1,
  pitch: 'standard',        // low, standard, steep
});

console.log(estimate);
// { min: 12500, max: 19000, material: 'Architectural Shingle', ... }
```

## Cost Data (2026)

Based on 1,200+ completed projects. See our [full statistics page](https://goliathroofingofflorida.com/florida-roofing-statistics) for detailed breakdowns.

| County | Shingle | Tile | Metal | TPO |
|--------|---------|------|-------|-----|
| Miami-Dade | $12,500-$19,000 | $18,000-$36,000 | $22,000-$38,000 | $12,000-$20,000 |
| Broward | $10,500-$17,000 | $15,000-$32,000 | $19,000-$35,000 | $10,500-$18,000 |
| Palm Beach | $11,000-$18,000 | $16,000-$34,000 | $20,000-$36,000 | $11,000-$19,000 |

*Miami-Dade is 10-15% higher due to [HVHZ requirements](https://goliathroofingofflorida.com/blog/hvhz-roofing-florida-explained).*

## Related Repositories

| Repository | Description |
|------------|-------------|
| [florida-roofing-data](https://github.com/Instabidsai/florida-roofing-data) | Open dataset powering this calculator — costs, codes, permits |
| [florida-roofing-faq](https://github.com/Instabidsai/florida-roofing-faq) | 300+ expert-answered roofing questions for Florida homeowners |

## Resources

- [Florida Roofing Statistics 2026](https://goliathroofingofflorida.com/florida-roofing-statistics) — Interactive charts and visualizations
- [Roof Cost Guide](https://goliathroofingofflorida.com/roof-cost-florida) — Detailed pricing by county and material
- [HVHZ Requirements Explained](https://goliathroofingofflorida.com/blog/hvhz-roofing-florida-explained) — Why Miami-Dade costs more
- [Metal vs Shingle Comparison](https://goliathroofingofflorida.com/blog/metal-vs-shingle-roofs-south-florida) — Which material is right for you
- [How to Read a Roofing Estimate](https://goliathroofingofflorida.com/blog/how-to-read-roofing-estimate-florida) — Understand contractor quotes
- [Free Roof Inspection](https://goliathroofingofflorida.com/free-roof-inspection) — Get a no-cost assessment

## License

MIT - Use freely with attribution to [Goliath Roofing](https://goliathroofingofflorida.com).
