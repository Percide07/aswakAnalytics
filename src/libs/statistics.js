export const statisticsFunctions = {
  getTotal: function(array) {
      return array.reduce((acc,el)=>acc+el,0);
  },
  getMin: function(array) {
      return Math.min(...array);
  },
  getMax: function(array) {
      return Math.max(...array);
  },
  getMean: function(array) {
      return Math.floor(array.reduce((acc, el) => acc + el, 0) / array.length);
  },
  getMedian: function(array) {
      const sorted = array.slice().sort((a, b) => a - b);
      const median =
          array.length % 2 === 0
              ? this.getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
              : sorted[Math.floor(array.length / 2)];
      return median;
  },
  getMode: function(array) {
      const counts = {};
      array.forEach(el => {
          counts[el] = (counts[el] + 1) || 0;
      });
      if (new Set(Object.values(counts)).size === 1) {
          return null;
      }
      console.log(counts)
      const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
      const mode = Object.keys(counts).filter(
          (el) => counts[el] === counts[highest]
      );
      return mode.join(", ");
  },
  getVariation: function(array) {
      const mean = this.getMean(array);
      const variance = array.reduce((acc, el) => {
          const difference = el - mean;
          const squared = difference ** 2;
          return acc + squared;
      }, 0) / array.length;
      return (Math.floor(variance));
  },
  getStandardDeviation: function(array) {
      const variance = this.getVariation(array);
      const standardVariation = Math.sqrt(variance);
      return Math.floor(standardVariation);
  }
};
 