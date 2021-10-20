import useSWR from 'swr';
import { getPeople } from '../../utils/fetcher';
import Table from '../Table';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Birth_year',
        dataIndex: 'birth_year',
        key: 'birth_year',
    },
    {
        title: 'Films',
        dataIndex: 'films',
        key: 'films',
        render: (films: string[]) => films.length
    },
    {
        title: 'Height',
        dataIndex: 'height',
        key: 'height',
        render: (height: string) => parseInt(height),
    },
];

const People = () => {
    const { data, error } = useSWR('/people', getPeople);

    if (error) {
        return <div className="px-2">Oh oh!</div>;
    }
    if (!data) {
        return <div className="px-2">Loading...</div>;
    }

    return (
        <div>
            <Table columns={columns} data={data.results} />
        </div>
    );
};

export default People;
