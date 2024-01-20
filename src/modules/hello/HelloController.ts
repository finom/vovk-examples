import { get, prefix } from "vovk";
import HelloService from "./HelloService"

@prefix('hello')
export default class HelloController {
    static controllerName = 'HelloController';
    
    private static helloService = HelloService;

    /**
     * Return a greeting from the HelloService
     */
    @get('greeting')
    static async getHello() {
        return this.helloService.getHello();
    }

    /**
     * Iterate over a stream of greetings from the HelloService
     */
    @get('streaming')
    static async *getStreamingHello() {
        yield* this.helloService.getStreamingHello();
    }
}