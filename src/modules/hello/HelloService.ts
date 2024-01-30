/**
 * Perform DB requests or call 3rd party APIs
 */
export default class HelloService {
  /**
   * Return a greeting
   */
  static async getHello() {
    return { greeting: 'Hello world!' };
  }

  /**
   * Iterate over a stream of greetings
   */
  static async *getStreamingHello() {
    const string =
      'Hello world! This message demonstrates the sleek and efficient real-time data handling capabilities of the Vovk.ts framework.';
    for (const message of string.split(' ')) {
      yield { message: message + ' ' };
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
}
