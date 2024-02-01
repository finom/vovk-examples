import { worker } from 'vovk';

@worker()
export default class WorkerService {
  /**
   * Factorizes a large number into its prime factors
   * @param number - the large number to factorize
   */
  static factorize(number: bigint): bigint[] {
    let factors: bigint[] = [];
    if (number < 2n) {
      return [number];
    }

    while (number % 2n === 0n) {
      factors.push(2n);
      number /= 2n;
    }

    for (let i = 3n; i * i <= number; i += 2n) {
      while (number % i === 0n) {
        factors.push(i);
        number /= i;
      }
    }

    if (number > 1n) {
      factors.push(number); // Remaining number is a prime factor
    }

    return factors;
  }
}
