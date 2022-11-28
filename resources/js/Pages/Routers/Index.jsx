import React from 'react';
import App from "@/Layouts/App";
import {Head, Link} from '@inertiajs/inertia-react';
import Container from "@/Layouts/Container";
import Table from "@/Components/Table";

export default function Index(props) {
    const {data: routers,meta,links} = props.routers;
    return (
        <>
            <Head title="Daftar Router Server" />
            <Container>
                   <Table>
                    <Table.Thead>
                        <tr>
                            <Table.Th>Nama Server</Table.Th>
                            <Table.Th>Lokasi</Table.Th>
                            <Table.Th>Host</Table.Th>
                            <Table.Th>Port</Table.Th>
                            <Table.Th></Table.Th>
                        </tr>
                    </Table.Thead>
                       <Table.Tbody>
                           {routers.map(router => (
                               <tr key={router.id}>
                                   <Table.Td>
                                       {router.name}
                                   </Table.Td>
                                   <Table.Td>
                                       {router.location}
                                   </Table.Td>
                                   <Table.Td>
                                       {router.host}
                                   </Table.Td>
                                   <Table.Td>
                                       {router.port}
                                   </Table.Td>
                                   <Table.Td>
                                       <Link href={`router-view/${router.slug}`}>{router.name}</Link>
                                   </Table.Td>
                               </tr>
                           ))}
                       </Table.Tbody>
                   </Table>
            </Container>
        </>
    );
}
Index.layout = page => <App children={page}/>
