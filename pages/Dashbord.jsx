import { Col, Grid, Image, Row, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import ReactPlayer from 'react-player'
import Dowloanding from '../components/dowloanding'
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
                                    <Text color='#422222' size={22} h2>11° édition</Text>
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
                                <Spacer y={3 / 2} />
                                <Image
                                    height="290px"
                                    width="100%"
                                    src="https://www.fertilizantesyabonos.com/francais/wp-content/uploads/biostimulants-world-congress-2.jpg"
                                    alt="Default Image"
                                    objectFit="cover" />
                            </Col>

                            <Col>
                                {/* the world congress text  */}
                                <Spacer y={3 / 2} />
                                <Row>

                                    <Spacer x={1} />
                                    <Text color='#422222' size={22} h2>The World Congress <br /> on High-Speed Rail </Text>
                                </Row>
                                <Spacer y={3 / 2} />
                                <Row>
                                    <Spacer x={1} />
                                    <Text>
                                        Lorem UIC  dolor, sit amet consectetur adipisicing elit. Nobis error eligendi, sit ipsa quis architecto autem at ipsam, enim a nostrum aliquam voluptatum . <br /><br />
                                        vel veritatis? Veritatis earum sapiente cum ullam, non quas perspiciatis porro neque quidem dicta, facilis obcaecati nihil quia praesentium? Nihil temporibus cum quos beatae amet, doloribus optio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ullam ex blanditiis explicabo optio animi eaque inventore totam nihil iste.
                                    </Text>
                                </Row>
                                <Spacer y={3 / 2} />
                            </Col>
                            {/* button the dowloading */}
                            <Dowloanding />
                            <Spacer y={3 / 2} />

                            {/* grid des images */}
                            <Col>
                                <Row>
                                    <Image
                                        width={"100%"}
                                        src="https://vivremadrid.com/wp-content/webpc-passthru.php?src=https://vivremadrid.com/wp-content/uploads/2021/01/voyager-en-train-en-espagne.png&nocache=1"
                                        alt="Default Image"
                                        objectFit="cover"
                                    />
                                    <Col>
                                        <Image
                                            width={"100%"}
                                            src="https://vivremadrid.com/wp-content/webpc-passthru.php?src=https://vivremadrid.com/wp-content/uploads/2021/01/voyager-en-train-en-espagne.png&nocache=1"
                                            alt="Default Image"
                                            objectFit="cover"
                                        />
                                        <Image
                                            width={"100%"}
                                            src="https://vivremadrid.com/wp-content/webpc-passthru.php?src=https://vivremadrid.com/wp-content/uploads/2021/01/voyager-en-train-en-espagne.png&nocache=1"
                                            alt="Default Image"
                                            objectFit="cover"
                                        />
                                    </Col>
                                </Row>
                                <Spacer y={3 / 2} />
                            </Col>
                            {/* partie green */}
                            <Row css={{ background: "#064030", padding: "20px", '@sm': { padding: "80px", paddingTop: "60px" } }}>
                                <Col>
                                    <Text color="#659E4D" css={{ fontSize: "15px", '@sm': { fontSize: "18px" } }}>
                                        11TH UIC HIGH-SPEED CONGRESS
                                    </Text>
                                    <Spacer y={1} />
                                    <Text color="#EEFAE5" weight="bold" css={{ lineHeight: "26px", fontSize: "20px", '@sm': { lineHeight: "54px", fontSize: "40px" } }}>
                                        "HIGH-SPEED RAIL:
                                        <br />
                                        THE RIGHT SPEED FOR OUR PLANET"
                                    </Text>
                                </Col>
                            </Row>

                            <Spacer y={3 / 2} />
                            <Col css={{ backgroundColor: "#EEFAE5", padding: "60px" }}>
                                <Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque nesciunt iure laboriosam placeat temporibus nisi, quo consequatur reiciendis modi laudantium. Excepturi molestias quod error saepe atque repellendus hic ullam in maiores sequi rem architecto eveniet veritatis fuga laudantium alias nulla, iure modi veniam accusantium vero officiis deserunt possimus culpa nostrum odio. Corporis perspiciatis magnam impedit!
                                </Text>
                                <Spacer y={2} />
                                <Text h2 color='#83BD56'>
                                    AZIZ AKHANNOUCH
                                </Text >
                                <Text color='#348C79'>
                                    Chef du gouvernement du Maroc
                                </Text>
                            </Col>


                        </Col>
                    </Grid>

                </Grid.Container>
            </Row>
        </>

    )
}

export default Dashbord