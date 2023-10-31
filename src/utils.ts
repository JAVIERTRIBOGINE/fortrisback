export function randomExchageRate() {
    const base = 3400;
    const random = Number((Math.random() * 5 + 10).toFixed(2));

    const amount = (base * random) / 100;

    const computed = Math.random() * 100 > 50 ? base + amount : base - amount;
    return computed;
}

export const executeUpdateBalance = async (account_id, entityManager) => {
    try {
        await entityManager.query('set @balance := 0;');

        console.log('SQL script 1 executed successfully');
    } catch (error) {
        console.error('Error executing SQL scripts:', error);
    }
    try {
        await entityManager.query(
            'update accountdetail set balance = 0 where account_id = ' +
            account_id +
            ' order by confirmation_date',
        );

        console.log('SQL script 2 executed successfully');
    } catch (error) {
        console.error('Error executing SQL scripts:', error);
    }
    try {
        await entityManager.query(
            'update accountdetail set balance = (@balance := @balance + debit - credit) where account_id = ' +
            account_id +
            ' order by confirmation_date asc;',
        );
        console.log('SQL script 3 executed successfully');
    } catch (error) {
        console.error('Error executing SQL scripts:', error);
    }
};
