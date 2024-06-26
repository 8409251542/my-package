module.exports = {
    sumArray: function (arr) {
      return arr.reduce((sum, num) => sum + num, 0);
    },
  
    clearDuplicates: function (arr) {
      return [...new Set(arr)];
    },
  
    average: function (arr) {
        return this.sumArray(arr) / arr.length;
      },
    
      max: function (arr) {
        return Math.max(...arr);
      },
    
      min: function (arr) {
        return Math.min(...arr);
      },
    
      sortAsc: function (arr) {
        return arr.sort((a, b) => a - b);
      },
    
      sortDesc: function (arr) {
        return arr.sort((a, b) => b - a);
      },
    
      median: function (arr) {
        const sorted = this.sortAsc(arr);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
      },
    
      mode: function (arr) {
        const freqMap = {};
        arr.forEach(num => freqMap[num] = (freqMap[num] || 0) + 1);
        let mode = null;
        let maxCount = 0;
        for (let num in freqMap) {
          if (freqMap[num] > maxCount) {
            maxCount = freqMap[num];
            mode = Number(num);
          }
        }
        return mode;
      },
    
      range: function (arr) {
        return this.max(arr) - this.min(arr);
      },
    
      variance: function (arr) {
        const avg = this.average(arr);
        return arr.reduce((sum, num) => sum + Math.pow(num - avg, 2), 0) / arr.length;
      },
    
      standardDeviation: function (arr) {
        return Math.sqrt(this.variance(arr));
      }
  };