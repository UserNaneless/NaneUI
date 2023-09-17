import { FaFile, FaXmark } from 'react-icons/fa6';
import Alert from './elements/Alert/Alert';
import Button from './elements/Button/Button';
import InputButton from './elements/Input/InputButton'
import InputWrapper from './elements/Input/InputWrapper'
import Input from './elements/Input/input'
import ModalRow from './elements/Modal/ModalRow';
import Modal from './elements/Modal/Modal';
import Option from './elements/Select/Option';
import Select from './elements/Select/Select';
import Slider from './elements/Slider/Slider';
import Offcanvas from './elements/Offcanvas/Offcanvas';
import OffcanvasHeader from './elements/Offcanvas/OffcanvasHeader';
import OffcanvasContent from './elements/Offcanvas/OffcanvasContent';
import { useState } from "react";

import './App.sass'
import Accordion from './elements/Accordion/Accordion';
import AccordionItem from './elements/Accordion/AccordionItem';
import AccordionHeader from './elements/Accordion/AccordionHeader';
import AccordionContent from './elements/Accordion/AccordionContent';
import Carousel from './elements/Carousel/Carousel';
import CarouselItem from './elements/Carousel/CarouselItem';
import Card from './elements/Card/Card';
import CardHeader from './elements/Card/CardHeader';
import CardContent from './elements/Card/CardContent';
import CardImage from './elements/Card/CardImage';
import CardBody from './elements/Card/CardBody';
import Progress from './elements/Progress/Progress';
import Tabs from './elements/Tabs/Tabs';
import TabItem from './elements/Tabs/TabItem';
import TabHeader from './elements/Tabs/TabHeader';
import TabContent from './elements/Tabs/TabContent';
import Form from './elements/Form/Form';
import FormItem from './elements/Form/FormItem';
import FormTitle from './elements/Form/FormTitle';
import FormError from './elements/Form/FormError';
import Radio from './elements/Radio/Radio';
import RadioGroup from './elements/Radio/RadioGroup';
import Checkbox from './elements/Checkbox/Checkbox';
import Tooltip from './elements/Tooltip/Tooltip';
import Uploader from './elements/Uploader/Uploader';

function App() {

    const [show, setShow] = useState(false);

    const [showcase, setShowcase] = useState(false);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            padding: "32px 0",
            width: "100%"
        }}>

            <Button onClick={() => setShowcase(!showcase)}>
                {
                    showcase ?
                        "Показать форму" :
                        "Показать компоненты"
                }
            </Button>
            {
                showcase && <>
                    <InputWrapper>
                        <Input />
                        <InputButton />
                    </InputWrapper>

                    <Select>
                        <Option>Option 1</Option>
                        <Option>Option 2</Option>
                        <Option>Option 3</Option>
                    </Select>

                    <Slider />

                    <Button>
                        Отправить
                    </Button>

                    <Button contrast>
                        Отправить
                    </Button>

                    <Button disabled>
                        Отправить
                    </Button>

                    <Alert type="info" showcase />

                    <Alert type="error" showcase />

                    <Alert type="success" showcase />

                    <Modal showcase>
                        <ModalRow title>
                            <h3>React Modal title</h3>
                            <FaXmark />
                        </ModalRow>

                        <ModalRow content>
                            React Modal body text goes here.
                        </ModalRow>

                        <ModalRow controls>
                            <Button contrast>
                                Отмена
                            </Button>

                            <Button>
                                Подтвердить
                            </Button>
                        </ModalRow>
                    </Modal>

                    <Offcanvas show={show}>
                        <OffcanvasHeader>
                            <h2>Header</h2>
                        </OffcanvasHeader>

                        <OffcanvasContent>
                            123123
                        </OffcanvasContent>
                    </Offcanvas>


                    <Button onClick={() => {
                        setShow(!show);
                    }}>
                        Offcanvas show (!show)
                    </Button>

                    <Accordion>
                        <AccordionItem>
                            <AccordionHeader>
                                Header #1
                            </AccordionHeader>

                            <AccordionContent>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, odit!
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader>
                                Header #2
                            </AccordionHeader>

                            <AccordionContent>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, recusandae!
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader>
                                Header #3
                            </AccordionHeader>

                            <AccordionContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, itaque!
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <Carousel>
                        <CarouselItem color='red'>
                        </CarouselItem>

                        <CarouselItem color='blue'>
                        </CarouselItem>

                        <CarouselItem color='green'>
                        </CarouselItem>
                    </Carousel>

                    <Card>

                        <CardImage />

                        <CardBody>
                            <CardHeader>
                                <h3>Card Header</h3>
                            </CardHeader>

                            <CardContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, qui? Saepe dolor vero incidunt minima eius. Similique qui vel fugit.
                            </CardContent>

                            <CardContent>
                                <Button>
                                    Close
                                </Button>
                            </CardContent>
                        </CardBody>

                    </Card>

                    <Progress />

                    <Progress success />

                    <Progress error />

                    <Tabs>
                        <TabItem>
                            <TabHeader>
                                Tab #1
                            </TabHeader>

                            <TabContent>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem ex ducimus ut labore molestias quas sit iste praesentium nulla?
                            </TabContent>
                        </TabItem>

                        <TabItem>
                            <TabHeader>
                                Tab #2
                            </TabHeader>

                            <TabContent>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, itaque vel. Nihil in repellat quidem amet. Odit deserunt a placeat!
                            </TabContent>
                        </TabItem>

                        <TabItem>
                            <TabHeader>
                                Tab #3
                            </TabHeader>

                            <TabContent>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error nesciunt id culpa eius modi a numquam! Similique accusamus eveniet aspernatur.
                            </TabContent>
                        </TabItem>
                    </Tabs>

                    <RadioGroup>
                        <Radio>
                            Option #1
                        </Radio>

                        <Radio>
                            Option #2
                        </Radio>

                        <Radio>
                            Option #3
                        </Radio>

                        <Radio>
                            Option #4
                        </Radio>
                    </RadioGroup>

                    <Checkbox>
                        Option #1
                    </Checkbox>

                    <Tooltip tooltipText='Hello wrodl!' tooltipPos='top'>
                        <span>
                            Hover me to show tooltip
                        </span>
                    </Tooltip>

                    <Uploader>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            gap: "8px"
                        }}>
                            <FaFile /> Click to upload files
                        </div>
                    </Uploader>

                    <Uploader drag>
                    </Uploader>
                </>
            }

            {
                !showcase && <>
                    <Form onDataSubmit={(data) => {
                        console.log(data);
                    }}>
                        <FormItem name="test" rules={[
                            {
                                required: true,
                                message: "Hello wrold!"
                            }
                        ]}>
                            <FormTitle>
                                <h4>Input:</h4>
                            </FormTitle>
                            <Input type="text" />
                            <FormError />
                        </FormItem>

                        <FormItem name="test2" rules={[
                            {
                                required: true,
                                message: "Hello wrold!"
                            }
                        ]}>
                            <FormTitle>
                                <h4>Select:</h4>
                            </FormTitle>
                            <Select>
                                <Option>Option 1</Option>
                                <Option>Option 2</Option>
                                <Option>Option 3</Option>
                            </Select>
                            <FormError />
                        </FormItem>

                        <FormItem name="test3">
                            <FormTitle>
                                <h4>Radio:</h4>
                            </FormTitle>
                            <RadioGroup>
                                <Radio>
                                    Option #1
                                </Radio>

                                <Radio>
                                    Option #2
                                </Radio>

                                <Radio>
                                    Option #3
                                </Radio>

                                <Radio>
                                    Option #4
                                </Radio>
                            </RadioGroup>
                            <FormError />
                        </FormItem>

                        <FormItem name="test4">
                            <FormTitle>
                                <h4>Uploader:</h4>
                            </FormTitle>
                            <Uploader>
                                <div style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    gap: "8px"
                                }}>
                                    <FaFile /> Click to upload files
                                </div>
                            </Uploader>
                            <FormError />
                        </FormItem>



                        <Button>Отправить</Button>
                    </Form>

                </>
            }



        </div >
    )
}

export default App
