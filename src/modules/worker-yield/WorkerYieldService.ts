import { worker } from 'vovk';

@worker()
export default class WorkerYieldService {
  /**
   * Calculate Pi using a series expansion with BigInt for high precision
   * @param scalePower - power of 10 to scale the calculations for precision
   * @param yieldEvery - how often to yield the result
   */
  static *approximatePi(scalePower: bigint, yieldEvery: number) {
    let i = 1n;
    let x = 3n * 10n ** scalePower;
    let pi = x;
    let count = 0;
    while (x > 0) {
      x = (x * i) / ((i + 1n) * 4n);
      pi += x / (i + 2n);
      i += 2n;
      if (count++ % yieldEvery === 0) {
        yield pi;
      }
    }
  }
}
