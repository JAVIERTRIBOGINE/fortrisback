import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('accountdetail')
export class AccountDetail {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    account_id: number;

    @Column()
    order_id: string;

    @Column()
    order_code: string;

    @Column()
    transaction_type: string;

    @Column()
    debit: number;

    @Column()
    credit: number;

    @Column()
    balance: number;

    @Column()
    confirmation_date: Date;
}
