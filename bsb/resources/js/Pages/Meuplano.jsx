import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import 'chartkick/chart.js';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from '@/Components/Button';
// import CurrencyInput from 'react-currency-masked-input';
import Footer from '@/Components/Footer';

export default function Meusdados(props) {
    const paid = false //parse from backend
    const preco = 30 //parse from backend
    const [showWishMmr, setShowWishMmr] = useState(false)
    const [mmr,setMmr] = useState(0)
    const [wishedMmr, setWishedMmr] = useState(0)
    const [perMedalPrice, setMedalPrice] = useState(0)
    const [fullSteps, setFullSteps] = useState(false)

    const displayWishMmmrStep = (e) =>{
        if (e >= 0) {
            setShowWishMmr(true)
            setMmr(e)
        }if (e == ''){
            setShowWishMmr(false)
        }
    }

    const changeBoostPrice = (e) =>{
        if (mmr > 0) {
            if (e > 0) {
                setWishedMmr(e*10)
                let precoFinal = preco*(wishedMmr - mmr)/200
                setMedalPrice(precoFinal)
                setFullSteps(true)
                if (precoFinal < 0) {
                    setMedalPrice(0)
                    setFullSteps(false)
                }
            }
        }
    }

    const proximoPasso = (e) => {
        e.preventDefault(e)
        window.localStorage.setItem('userMmr', mmr)
        window.localStorage.setItem('wishedMmr', wishedMmr)
        window.localStorage.setItem('price', perMedalPrice)
        window.localStorage.setItem('steam', 'teste')
        window.location.href = '/checkout'
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            >
            <Head title="MeuPlano" />
            <div className="py-12">
                {paid ?
                <>
                    <Container>
                        <Row>
                            <Col>
                                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="py-4 px-6 font-bold	text-gray-700 text-center">Meu Plano</div>
                                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                        <div className="p-2 bg-white border-b border-gray-100">
                                            <div className="overflow-x-auto relative">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>MMR no momento da contratação</Form.Label>
                                                    <Form.Control type="number" placeholder={mmr}readOnly/>
                                                    <Form.Text className="text-muted">
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicName">
                                                    <Form.Label>MMR Desejado</Form.Label>
                                                    <Form.Control type="text" placeholder={wishedMmr} readOnly/>
                                                    <Form.Text className="text-muted">
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicSteam">
                                                    <Form.Label>Extenção</Form.Label>
                                                    <Form.Control type="text" placeholder="/razordiesnobagulho" readOnly/>
                                                    <Form.Text className="text-muted">
                                                    </Form.Text>
                                                </Form.Group>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <br/>
                            <Col>
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
                            </Col>
                        </Row>
                    </Container>
                </>
                :
                <>
                    <Container>
                        <Row>
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="py-4 px-6 font-bold	text-gray-700 text-center">Meu Plano</div>
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-2 bg-white border-b border-gray-100">
                                        <div className="overflow-x-auto relative">
                                            <form onSubmit={proximoPasso}>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Seu MMR</Form.Label>
                                                    <Form.Control type="number" placeholder="Seu MMR Atual" controlId="formBasicMMR" onChange={event => displayWishMmmrStep(event.target.value)} disabled={fullSteps === true ? true : false} required/>
                                                    <Form.Text className="text-muted">
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicWishedMMR" style={{display: showWishMmr ? 'block' : 'none'}} onChange={event => changeBoostPrice(event.target.value)} required>
                                                    <Form.Label>MMR Desejado</Form.Label>
                                                    <Form.Control type="text" placeholder="MMR A qual você deseja"/>
                                                    <Form.Text className="text-muted">
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Preço:</Form.Label>
                                                    <Form.Control type="number" placeholder="Você vai pagar:" controlId="formBasicPrice" value={perMedalPrice} required readOnly/>
                                                    <Form.Text className="text-muted">
                                                    </Form.Text>
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicSteam">
                                                    <Form.Label>Steam</Form.Label>
                                                    <Form.Control type="text" placeholder="/suaurldasteam" required/>
                                                    <Form.Text className="text-muted">                                            
                                                    </Form.Text>
                                                </Form.Group>
                                                <Button type='submit' className="mt-4">
                                                    Pagamento
                                                </Button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </>
                }

            </div>
        </Authenticated>
    );
}
