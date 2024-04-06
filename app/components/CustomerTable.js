import { useState, useEffect } from 'react';
import { DataTable, PaperProvider } from 'react-native-paper';
import { CustomerTableFiller } from '../services/DBFunctions';

function CustomerTable() {

    const [page, setPage] = useState(0);

    const [numberOfItemsPerPageList] = useState([5, 10]);

    const [itemsPerPage, onItemsPerPageChange] = useState(
        numberOfItemsPerPageList[0]
    );

    const [items, setItems] = useState({});

    useEffect(() => {
        CustomerTableFiller().then((asd) => {
            setItems(asd);
        })
    },[])

    const from = page * itemsPerPage;
    const to = from + 5

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <>
            <PaperProvider>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>İsim</DataTable.Title>
                        <DataTable.Title>Soyisim</DataTable.Title>
                        <DataTable.Title numeric>Tel.</DataTable.Title>
                        <DataTable.Title numeric>TC</DataTable.Title>
                    </DataTable.Header>

                    {console.log(items)}

                    {Object.keys(items).slice(from, to).map(key => (
                        <DataTable.Row key={items[key].name}>
                            <DataTable.Cell>{items[key].name}</DataTable.Cell>
                            <DataTable.Cell>{items[key].surname}</DataTable.Cell>
                            <DataTable.Cell numeric>{items[key].tel}</DataTable.Cell>
                            <DataTable.Cell numeric>{items[key].tc}</DataTable.Cell>
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

function CustomerTableEditable() {

    const [page, setPage] = useState(0);

    const [numberOfItemsPerPageList] = useState([5, 10]);

    const [itemsPerPage, onItemsPerPageChange] = useState(
        numberOfItemsPerPageList[0]
    );

    const [items, setItems] = useState({});

    useEffect(() => {
        CustomerTableFiller().then((asd) => {
            setItems(asd);
        })
    },[])

    const from = page * itemsPerPage;
    const to = from + 5

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <>
            <PaperProvider>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>İsim</DataTable.Title>
                        <DataTable.Title>Soyisim</DataTable.Title>
                        <DataTable.Title numeric>Tel.</DataTable.Title>
                        <DataTable.Title numeric>TC</DataTable.Title>
                    </DataTable.Header>

                    {console.log(items)}

                    {Object.keys(items).slice(from, to).map(key => (
                        <DataTable.Row onPress={() => console.log(items[key])} key={items[key].name}>
                            <DataTable.Cell>{items[key].name}</DataTable.Cell>
                            <DataTable.Cell>{items[key].surname}</DataTable.Cell>
                            <DataTable.Cell numeric>{items[key].tel}</DataTable.Cell>
                            <DataTable.Cell numeric>{items[key].tc}</DataTable.Cell>
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

export { CustomerTable, CustomerTableEditable }