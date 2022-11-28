import React from 'react';
import App from "@/Layouts/App";
import {Head} from "@inertiajs/inertia-react";
import Container from "@/Layouts/Container";

export default function Home() {
    return (
        <div>
            <Head title="Aplikasi Tagihan Internet Untuk RT/RW Net"/>
          <Container>  Home</Container>
        </div>
    );
}
Home.layout = page => <App children={page}/>
