import { useState, useEffect } from 'react';
import { DataTable, PaperProvider } from 'react-native-paper';
import { WarehouseTableFiller } from '../services/DBFunctions';

function WarehouseTable() {

    const [page, setPage] = useState(0);

    const [numberOfItemsPerPageList] = useState([5, 10]);

    const [itemsPerPage, onItemsPerPageChange] = useState(
        numberOfItemsPerPageList[0]
    );

    const [items, setItems] = useState({});

    useEffect(() => {
        WarehouseTableFiller().then((asd) => {
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
                        <DataTable.Title>Depo Adı</DataTable.Title>
                    </DataTable.Header>

                    {Object.keys(items).slice(from, to).map(key => (
                        <DataTable.Row key={items[key].warehouseName}>
                            <DataTable.Cell>{items[key].warehouseName}</DataTable.Cell>
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

function WarehouseTableEditable(props) {

    const [page, setPage] = useState(0);

    const [numberOfItemsPerPageList] = useState([5, 10]);

    const [itemsPerPage, onItemsPerPageChange] = useState(
        numberOfItemsPerPageList[0]
    );

    const [items, setItems] = useState({});

    useEffect(() => {
        ProductTableFiller().then((asd) => {
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
                        <DataTable.Title>Depo Adı</DataTable.Title>
                    </DataTable.Header>

                    {console.log(items)}

                    {Object.keys(items).slice(from, to).map(key => (
                        <DataTable.Row onPress={() => props.setClick(items[key].warehouseName)} key={items[key].warehouseName}>
                            <DataTable.Cell>{items[key].warehouseName}</DataTable.Cell>
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

export { WarehouseTable, WarehouseTableEditable }