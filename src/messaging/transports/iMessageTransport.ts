export interface IMessageTransport {
  /**
   * Sets a handler to EXCLUSIVELY listen to a topic
   *
   * This method will remove any other handler listening to this topic.
   * It's meant to be used for cases such as command handling where only
   * one handler should be called for each message.
   */
  listen(topic: string, handler: (msg: any) => void): void;

  /**
   * Sends a message that will be acknoledged and handle by a single handler
   *
   * This is meant to be used for cases such as command handling
   */
  send(topic: string, message: any): void;

  /**
   * Subscribes to a topic and receive all messages on that topic
   */
  subscribe(topic: string, handler: (type: string, msg: any) => void): void;

  /**
   * Publishes a message to all subscribers
   */
  publish(topic: string, message: any): void;
}
