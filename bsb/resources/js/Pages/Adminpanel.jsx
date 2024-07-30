import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { LineChart, PieChart } from 'react-chartkick';
import 'chartkick/chart.js';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '@/Components/Footer';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            >
            <Head title="Dashboard" />
            <div className="py-12">
                <Container>
                    <Row>
                        <Col>
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="py-4 px-6 font-bold	 text-gray-700 whitespace-nowrap text-center">Boost ativo</div>
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 bg-white border-b border-gray-200">
                                        <div class="overflow-x-auto relative">
                                            <table class="w-full text-sm text-left text-indigo-600">
                                                <thead class="text-xs text-gray-700 uppercase">
                                                    <tr>
                                                        <th scope="col" class="py-3 px-6">
                                                            Conta/Steam-ID
                                                        </th>
                                                        <th scope="col" class="py-3 px-6">
                                                            MMR Atual
                                                        </th>
                                                        <th scope="col" class="py-3 px-6">
                                                            Objetivo
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="bg-white border-b dark:bg-gray-100">
                                                        <td class="py-4 px-6 font-medium text-gray-700 whitespace-nowrap">
                                                            69696699 - Duduzika
                                                        </td>
                                                        <td class="py-4 px-6 font-medium text-gray-700 whitespace-nowrap">
                                                            2000
                                                        </td>
                                                        <td class="py-4 px-6 font-medium text-gray-700 whitespace-nowrap">
                                                            6000
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Authenticated>

    );
}
