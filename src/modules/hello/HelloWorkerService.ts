import { worker } from 'vovk/worker';

@worker()
export default class HelloWorkerService {
  /**
   * Calculate Pi using Leibniz formula
   * @param preciseness - number of iterations
   * @param iterationsToYield - number of iterations to yield
   */
  static *calculatePi(preciseness: number, iterationsToYield: number) {
    let pi = 0;
    let multiplier = 1;

    for (let i = 0; i < preciseness; i++) {
      pi += multiplier / (2 * i + 1);
      multiplier *= -1;
      if (i % iterationsToYield === 0) {
        yield pi * 4;
      }
    }
  }
}
