function knapsack(weights, values, capacity) {
  let weight = 0,
    i = 0,
    j = 0,
    k = 0;
  let result = 0,
    answer = 0;
  while (weight < capacity && i < weights.length) {
    weight += weights[i];
    result += values[i];
  }
  while (k < weights.length) {
    answer = Math.max(result, answer);
    result = 0;
    while (j < weights.length && weight < capacity) {
      if (j === k) {
        continue;
      }
      weight += weights[j];
      result += values[j];
    }
    k++;
  }
}
