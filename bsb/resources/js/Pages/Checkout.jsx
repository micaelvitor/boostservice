import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import 'chartkick/chart.js';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../Components/Footer';

export default function Meusdados(props) {
    const [payWithCripto, setPayWithCripto] = useState(false);
    const [payPix, setPayWithPix] = useState(false);
    const [payWithCard, setPayWithCard] = useState(false);

    const gerenciarClick = () => {
        const divPagamento = document.getElementById("divPagamento");
        divPagamento.scrollIntoView({ behavior: "smooth" });
        setPayWithCard(false);
    };

    const descerParaDivCartao = () => {
        const divCartao = document.getElementById("pagamentoCartao");
        divCartao.scrollIntoView({ behavior: "smooth" });
    };

    const openPaymentMethod = (value) => {
        switch (value) {
            case 'cripto':
                setPayWithCripto(true);
                break;
            case 'pix':
                setPayWithPix(true);
                break;
            case 'cartao':
                if (!payWithCard) {
                    setPayWithCard(true);
                    setTimeout(descerParaDivCartao, 0);
                } else {
                    descerParaDivCartao();
                }
                break;
            default:
                break;
        }
    };

    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="MeusDados" />
            <div className="py-12">
                <Container>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="py-4 px-6 font-bold text-gray-700 text-center" id='divPagamento'>
                            Pagamento
                        </div>
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-2 bg-white border-b border-gray-100">
                                <Row className="justify-content-center">
                                    <Col md={4} className="d-flex justify-content-center">
                                        <Card style={{ width: '18rem' }} className="m-3">
                                            <Card.Body>
                                                <div className='shadow-lg sm:rounded-lg'>
                                                    <Card.Img variant="top" src="../../../assets/cripto.png" />
                                                </div>
                                                <Card.Title className='mt-3'>Cripto</Card.Title>
                                                <Card.Text>
                                                    Muito bom para você que gosta de lavar dinheiro e evadir do governo, assim como o dono desse site.
                                                </Card.Text>
                                                <input
                                                    type="button"
                                                    className="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150"
                                                    onClick={() => openPaymentMethod('cripto')}
                                                    value="Ir para o pagamento"
                                                />
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={4} className="d-flex justify-content-center">
                                        <Card style={{ width: '18rem' }} className="m-3">
                                            <Card.Body>
                                                <div className='shadow-lg sm:rounded-lg'>
                                                    <Card.Img variant="top" src="../../../assets/pixlogo.png" />
                                                </div>
                                                <Card.Title className='mt-3'>PIX</Card.Title>
                                                <Card.Text>
                                                    Bom para você que tem dinheiro na conta de maneira honesta e não liga para o governo.
                                                </Card.Text>
                                                <input
                                                    type="button"
                                                    className="inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150"
                                                    onClick={() => openPaymentMethod('pix')}
                                                    value="Ir para o pagamento"
                                                />
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer />
        </Authenticated>
    );
}