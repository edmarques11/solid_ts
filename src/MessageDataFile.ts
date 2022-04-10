import IMessageData from "./IMessageData";
import fs from "fs/promises";

export default class MessageDataFile implements IMessageData {
    public async read(language: string): Promise<string> {
        return fs.readFile(`./message/${language}.txt`, "utf8");
    }
}
