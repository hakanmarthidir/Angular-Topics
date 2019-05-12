import { MessageService } from "./message.service";

describe("Message Service", () => {

let service: MessageService;

beforeEach(() => {
    service = new MessageService();
})

it('should have no message to start', () => {

    let messageCount = service.messages.length;
    expect(messageCount).toEqual(0);

})

it('should add a message', () => {

    service.add('msg1');
    expect(service.messages.length).toEqual(1);

})

it('should clear all message', () => {

    service.add('msg2');

    service.clear();

    expect(service.messages.length).toEqual(0);
})

})