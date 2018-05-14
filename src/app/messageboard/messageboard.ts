export interface IMessageboard {
    id: number, 
    create_date: Date,
    update_date: Date,
    message_to: number,
    message_from: number,
    subject: string,
    message: string
}