import { Col, Grid, Image, Row, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import ReactPlayer from 'react-player'
const Dashbord = () => {
    return (
        <>
            <Spacer y={2} />
            <Row>
                <Grid.Container >
                    <Spacer x={2} />
                    <Grid xs={12} sm={7 / 2}>
                        <Col>
                            <Text size={23} h4>Le congrés</Text>
                            <Col >
                                <Spacer x={10} />
                                <Row css={{ cursor: "pointer" }}>
                                    <Row css={{ height: "2px", width: "30px", backgroundColor: "red", marginTop: "8px" }}></Row>
                                    <Spacer x={1 / 3} />
                                    <Text>11° édition</Text>
                                </Row>
                                <Spacer x={2} />
                                <Row css={{ cursor: "pointer" }}>
                                    <Row css={{ height: "2px", width: "30px", backgroundColor: "gray", marginTop: "8px" }}></Row>
                                    <Spacer x={1 / 3} />
                                    <Text color='gray'>Organisateurs</Text>
                                </Row >
                                <Spacer x={2} />
                                <Row css={{ cursor: "pointer" }}>
                                    <Row css={{ height: "2px", width: "30px", backgroundColor: "gray", marginTop: "8px" }}></Row>
                                    <Spacer x={1 / 3} />
                                    <Text color='gray'>Programme</Text>
                                </Row >
                                <Spacer x={2} />
                                <Row css={{ cursor: "pointer" }}>
                                    <Row css={{ height: "2px", width: "30px", backgroundColor: "gray", marginTop: "8px" }}></Row>
                                    <Spacer x={1 / 3} />
                                    <Text color='gray'>intervenants</Text>
                                </Row>
                            </Col>
                        </Col>
                    </Grid>

                    <Grid xs={12} sm={15 / 2}>
                        <Col>
                            <Col css={{ padding: "0 20px" }}>
                                <Text size={18} >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit perferendis voluptatum est quia impedit officiis culpa adipisci mollitia, consequatur aliquam corporis voluptate, laudantium reprehenderit eveniet facilis, esse sapiente optio? Facere, consequatur quisquam quae sequi delectus natus harum sint eum, reprehenderit expedita non autem? Soluta tenetur ipsum aut nihil excepturi esse nam eveniet, quam nisi dolorum tempore consequuntur, nostrum amet, vitae architecto expedita. Accusamus velit aut sint, minus commodi ipsa saepe quibusdam, iure ipsam amet inventore temporibus? Provident harum iusto recusandae impedit veritatis voluptates earum. Quis eius consequatur officiis odit corporis, quos amet dolores rerum nostrum saepe. Aliquam, numquam inventore!
                                </Text>
                                <Spacer y={2} />
                            </Col>
                            {/* vidiou  */}
                            <Col>
                                <ReactPlayer height={400} width="100%" url='https://www.youtube.com/watch?v=udHq9Mg14Os&list=RDudHq9Mg14Os&start_radio=1' />
                            </Col>
                            {/* edition 11  */}
                            <Col>
                                <Spacer y={3 / 2} />
                                <Row>

                                    <Spacer x={1} />
                                    <Text size={22} h2>11° édition</Text>
                                </Row>
                                <Spacer y={3 / 2} />
                                <Row>
                                    <Spacer x={1} />
                                    <Text>
                                        Lorem UIC  dolor, sit amet consectetur adipisicing elit. Nobis error eligendi, sit ipsa quis architecto autem at ipsam, enim a nostrum aliquam voluptatum . <br /><br />
                                        vel veritatis? Veritatis earum sapiente cum ullam, non quas perspiciatis porro neque quidem dicta, facilis obcaecati nihil quia praesentium? Nihil temporibus cum quos beatae amet, doloribus optio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ullam ex blanditiis explicabo optio animi eaque inventore totam nihil iste.
                                    </Text>
                                </Row>
                            </Col>
                            {/* image the world congress */}
                            <Col>
                                <Image
                                    height={400}
                                    width="100%"
                                    src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                                    alt="Default Image"
                                    objectFit="cover" />
                            </Col>
                        </Col>
                    </Grid>

                </Grid.Container>
            </Row>
        </>

    )
}

export default Dashbord