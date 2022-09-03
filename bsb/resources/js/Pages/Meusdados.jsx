import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import 'chartkick/chart.js';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from '@/Components/Button';
import Footer from '@/Components/Footer';

export default function Meusdados(props) {
    const payed = false
    const booster = 'No momento nenhum booster selecionou seu pedido, aguarde!'
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            >
            <Head title="MeusDados" />
            <div className="py-12">
                <Container>
                    <Row>
                        <Col>
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="py-4 px-6 font-bold	text-gray-700 text-center">Meus Dados</div>
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-2 bg-white border-b border-gray-100">
                                        <div className="overflow-x-auto relative">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder={props.auth.user.email}readOnly/>
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicName">
                                                <Form.Label>Seu Nome</Form.Label>
                                                <Form.Control type="text" placeholder={props.auth.user.name} readOnly/>
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicSteam">
                                                <Form.Label>Steam</Form.Label>
                                                <Form.Control type="text" placeholder={props.auth.user.steam} readOnly/>
                                                <Form.Text className="text-muted">
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicBooster">
                                                <Form.Label>Seu Booster</Form.Label>
                                                {payed ?
                                                    <>
                                                        <Form.Control type="text" placeholder={booster} readOnly/>
                                                        <Form.Text className="text-muted">
                                                        </Form.Text>
                                                    </>
                                                    :
                                                    <>
                                                        <Form.Control type="text" placeholder="Nenhum Plano ativo, compre clicando abaixo" readOnly/>
                                                        <Form.Text className="text-muted">
                                                        </Form.Text>
                                                        <Link href="/meuplano" style={{ textDecoration: 'none' }}>
                                                            <Button className="mt-4">
                                                                Adquirir plano
                                                            </Button>
                                                        </Link>
                                                    </>
                                                }
                                            </Form.Group>                                  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <br/>
                        {/* <Col>
                            <div className="max-w-7xl mx-auto sm:px-8 lg:px-8">
                            <div className="py-4 px-6 font-bold	 text-gray-700 whitespace-nowrap text-center">Informações de pagamento</div>
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 bg-white border-b border-gray-200">
                                        <div className="overflow-x-auto relative">
                                            <div className="max-w-md mx-auto bg-blue-400 rounded-lg overflow-hidden md:max-w-sm">
                                                <div className="md:flex">
                                                    <div className="w-full p-4">
                                                        <div className="flex justify-between items-center text-white">
                                                            <span class="text-3xl font-bold">12,290 <small class="text-sm font-light">BRL</small></span>
                                                            <i class="fa fa-chevron-circle-up fa-2x text-gray-300"></i>
                                                        </div>
                                                        <div className="flex justify-between items-center mt-10">
                                                            <div className="flex flex-row">
                                                                <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"/>
                                                                <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"/>
                                                                <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"/>
                                                                <img class="w-4 h-4" src="https://i.imgur.com/FNef1H8.png"/>
                                                            </div>
                                                            <div className="flex flex-row">
                                                                <span class="text-white text-lg mr-1 font-bold">4</span>
                                                                <span class="text-white text-lg mr-1 font-bold">8</span>
                                                                <span class="text-white text-lg mr-1 font-bold">9</span>
                                                                <span class="text-white text-lg mr-1 font-bold">0</span>
                                                            </div>
                                                        </div>
                                                        <div className="mt-8 flex justify-between items-center text-white">
                                                            <div className="flex flex-col">
                                                                <span class="font-bold text-gray-300 text-sm">Metodo</span>
                                                                <span class="font-bold">Binance</span>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                <span class="font-bold text-gray-300 text-sm">Pago em</span>
                                                                <span class="font-bold">12/08</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </div>
            <Footer>
            </Footer>
        </Authenticated>
    );
}
