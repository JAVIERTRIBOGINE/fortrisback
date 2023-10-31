export class CreateAccountDetailDto {
    id?: number;
    account_id: number;
    order_id: string;
    order_code: string;
    transaction_type: string;
    debit: number;
    credit: number;
    balance: number;
    confirmation_date: Date;
}
