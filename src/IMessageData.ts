export default interface IMessageData {
    read(language: string): Promise<string>;
}