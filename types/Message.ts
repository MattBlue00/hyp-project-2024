/**
 * This class is used to store and access chatbot messages more easily.
 */

export class Message{

    public role: string;
    public content: string;

    constructor(role: string, content: string){
        this.role = role;
        this.content = content;
    }

}