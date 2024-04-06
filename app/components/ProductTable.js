import * as React from 'react';
import { DataTable, PaperProvider } from 'react-native-paper';

export default function ProductTable() {

    const [page, setPage] = React.useState(0);

    const [numberOfItemsPerPageList] = React.useState([5, 10]);

    const [itemsPerPage, onItemsPerPageChange] = React.useState(
        numberOfItemsPerPageList[0]
    );

    const [items] = React.useState([
        {
            key: 1,
            name: 'Cupcake',
            calories: 356,
            fat: 16,
        },
        {
            key: 2,
            name: 'Eclair',
            calories: 262,
            fat: 16,
        },
        {
            key: 3,
            name: 'Frozen yogurt',
            calories: 159,
            fat: 6,
        },
        {
            key: 4,
            name: 'Gingerbread',
            calories: 305,
            fat: 3.7,
        },
        {
            key: 5,
            name: 'Gingerbread',
            calories: 305,
            fat: 3.7,
        },
        {
            key: 6,
            name: 'Gingerbread',
            calories: 305,
            fat: 3.7,
        },
    ]);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <>
            <PaperProvider>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Ürün Adı</DataTable.Title>
                        <DataTable.Title numeric>Kalori</DataTable.Title>
                        <DataTable.Title numeric>Yağ</DataTable.Title>
                    </DataTable.Header>

                    {items.slice(from, to).map((item) => (
                        <DataTable.Row key={item.key}>
                            <DataTable.Cell>{item.name}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
                        </DataTable.Row>
                    ))}

                    <DataTable.Pagination
                        page={page}
                        numberOfPages={Math.ceil(items.length / itemsPerPage)}
                        onPageChange={(page) => setPage(page)}
                        label={`${from + 1}-${to} of ${items.length}`}
                        numberOfItemsPerPageList={numberOfItemsPerPageList}
                        numberOfItemsPerPage={itemsPerPage}
                        onItemsPerPageChange={onItemsPerPageChange}
                        showFastPaginationControls
                        selectPageDropdownLabel={'Rows per page'}
                    />
                </DataTable>
            </PaperProvider>
        </>
    )
}