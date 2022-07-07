import data from 'components/Statistics/data.json';
import { Statistics } from 'components/Statistics/Statistics';

export const StatsBlock = () => {
    return (
        <Statistics title="Upload stats" stats={data} />
    )
}