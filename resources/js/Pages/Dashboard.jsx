import React from 'react';
import App from "@/Layouts/App";
import { Head } from '@inertiajs/inertia-react';
import Container from "@/Layouts/Container";

export default function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />
            <Container>
                <div className='bg-white shadow-lg text-gray-600'>

                </div>
            </Container>
        </>
    );
}
Dashboard.layout = page => <App children={page}/>
