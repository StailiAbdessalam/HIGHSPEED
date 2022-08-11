import { Button, Col, Container, Grid, Image, Link, Modal, Row, Spacer, Text } from '@nextui-org/react'
import React from 'react'
const Dashbord = () => {
    const [image, setImage] = React.useState(null)
    const [visible, setVisible] = React.useState(false);
    const handler = (e) => {
        setVisible(true);
        setImage(e.target.src);
    }
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <>
            <Row>
                <Grid.Container >
                    <Grid css={{ backgroundColor: "#A33237", height: "270px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} xs={12}>
                        <Text size={30} color="#ffff">
                            BIENVENUE MR NIDAL
                        </Text>
                    </Grid>
                    <Row>
                        <Spacer y={2} />
                    </Row>

                    <Spacer x={2} />
                    <Grid xs={12} sm={7 / 2}>
                        <Col>
                            <Text size={23} h4>Le congrés</Text>
                            <Spacer y={1} />
                            <Col >

                                <Grid.Container>
                                    <Spacer y={3} />
                                    <Grid xs={5 / 2} sm={12}>
                                        <Spacer x={2} />
                                        <Row css={{ cursor: "pointer" }}>
                                            <Row css={{ height: "2px", width: "30px", backgroundColor: "red", marginTop: "8px" }}></Row>
                                            <Spacer x={1 / 3} />
                                            <Text>dashboard</Text>
                                        </Row>
                                        <Spacer y={2} />
                                    </Grid>
                                    <Grid xs={5 / 2} sm={12}>
                                        <Spacer x={2} />
                                        <Row css={{ cursor: "pointer" }}>
                                            <Row css={{ height: "2px", width: "30px", backgroundColor: "gray", marginTop: "8px" }}></Row>
                                            <Spacer x={1 / 3} />
                                            <Text color='gray'>Accommodation</Text>
                                        </Row >
                                        <Spacer y={2} />

                                    </Grid>
                                    <Grid xs={5 / 2} sm={12}>
                                        <Spacer x={2} />
                                        <Row css={{ cursor: "pointer" }}>
                                            <Row css={{ height: "2px", width: "30px", backgroundColor: "gray", marginTop: "8px" }}></Row>
                                            <Spacer x={1 / 3} />
                                            <Text color='gray'>activates</Text>
                                        </Row >
                                        <Spacer y={2} />

                                    </Grid>
                                    <Grid xs={5 / 2} sm={12}>
                                        <Spacer x={2} />
                                        <Row css={{ cursor: "pointer" }}>
                                            <Row css={{ height: "2px", width: "30px", backgroundColor: "gray", marginTop: "8px" }}></Row>
                                            <Spacer x={1 / 3} />
                                            <Text color='gray'>transfers</Text>
                                        </Row>
                                        <Spacer y={2} />
                                    </Grid>
                                    <Grid xs={5 / 2} sm={12}>
                                        <Spacer x={2} />
                                        <Row css={{ cursor: "pointer" }}>
                                            <Row css={{ height: "2px", width: "30px", backgroundColor: "gray", marginTop: "8px" }}></Row>
                                            <Spacer x={1 / 3} />
                                            <Text color='gray'>payment</Text>
                                        </Row>
                                        <Spacer y={2} />
                                    </Grid>


                                </Grid.Container>
                            </Col>
                        </Col>
                    </Grid>

                    <Grid xs={12} sm={15 / 2}>
                        {/* <Col>
                            <Col css={{ padding: "0 20px" }}>
                                <Text size={18} >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit perferendis voluptatum est quia impedit officiis culpa adipisci mollitia, consequatur aliquam corporis voluptate, laudantium reprehenderit eveniet facilis, esse sapiente optio? Facere, consequatur quisquam quae sequi delectus natus harum sint eum, reprehenderit expedita non autem? Soluta tenetur ipsum aut nihil excepturi esse nam eveniet, quam nisi dolorum tempore consequuntur, nostrum amet, vitae architecto expedita. Accusamus velit aut sint, minus commodi ipsa saepe quibusdam, iure ipsam amet inventore temporibus? Provident harum iusto recusandae impedit veritatis voluptates earum. Quis eius consequatur officiis odit corporis, quos amet dolores rerum nostrum saepe. Aliquam, numquam inventore!
                                </Text>
                                <Spacer y={2} />
                            </Col>
                          
                            <Col>
                                <ReactPlayer height={400} width="100%" url='https://www.youtube.com/watch?v=udHq9Mg14Os&list=RDudHq9Mg14Os&start_radio=1' />
                            </Col>
                          
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
                            
                            <Dowloanding />
                            <Spacer y={3 / 2} />

                           
                            <Col>
                                <Row>
                                    <Image
                                        css={{ height: "622px", cursor: 'pointer' }}
                                        width={"100%"}
                                        onClick={e => handler(e)}
                                        src="https://vivremadrid.com/wp-content/webpc-passthru.php?src=https://vivremadrid.com/wp-content/uploads/2021/01/voyager-en-train-en-espagne.png&nocache=1"
                                        alt="Default Image"
                                        objectFit="cover"
                                    />
                                    <Spacer x={1 / 3} />
                                    <Col>
                                        <Image
                                            onClick={e => handler(e)}
                                            css={{ height: "308px", cursor: 'pointer' }}
                                            src="https://static.lpnt.fr/images/2021/09/07/22151000lpw-22151048-article-jpg_8212426_1250x625.jpg"
                                            alt="Default Image"
                                            objectFit="cover"
                                        />
                                        <Spacer y={1 / 3} />
                                        <Row>
                                            <Image
                                                onClick={e => handler(e)}
                                                css={{ height: "308px", cursor: 'pointer' }}
                                                width={"100%"}
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvtqFb_m68zSYmLsKdIV8LP4kCs0IA2zSPMdJjuIrr7xA948ccTxVY062nTNuP5peeXPw&usqp=CAU   "
                                                alt="Default Image"
                                                objectFit="cover"
                                            />
                                            <Spacer x={1 / 3} />
                                            <Row css={{ cursor: 'pointer' }} onClick={(e) => handler(e = { target: { src: "https://vivremadrid.com/wp-content/webpc-passthru.php?src=https://vivremadrid.com/wp-content/uploads/2021/01/voyager-en-train-en-espagne.png&nocache=1" } })}>
                                                <Image
                                                    css={{ height: "308px", position: "relative", cursor: 'pointer' }}
                                                    width={"100%"}
                                                    src="https://vivremadrid.com/wp-content/webpc-passthru.php?src=https://vivremadrid.com/wp-content/uploads/2021/01/voyager-en-train-en-espagne.png&nocache=1"
                                                    alt="Default Image"
                                                    objectFit="cover"
                                                />
                                               
                                                <Row css={{ backgroundColor: "rgba(134, 22, 26, 0.725)", width: "100%", height: "100%", position: "absolute", top: "0" }}>
                                                    <Text zIndex="90">
                                                    </Text>
                                                </Row>
                                                <Container zIndex="100" css={{ position: "absolute", top: "5%", width: "100%", maxWidth: "100%", height: "100%" }}>
                                                    <Row css={{ height: "100%" }} justify="center" align="center">
                                                        <Text h1 size={60} color="$white">
                                                            +15
                                                        </Text>
                                                    </Row>
                                                </Container>
                                            </Row>
                                        </Row>
                                    </Col>
                                </Row>
                                <Spacer y={3 / 2} />
                            </Col>
                          
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


                        </Col> */}


                    </Grid>

                </Grid.Container>

                <div>
                    <Modal noPadding open={visible} onClose={closeHandler}>
                        <Modal.Header
                            css={{ position: "absolute", zIndex: "$1", top: 5, right: 8, }}
                        >
                        </Modal.Header>
                        <Modal.Body css={{ width: "100%", height: "500px" }}>
                            <Image
                                showSkeleton
                                src={image}
                                width={400}
                                height={490}
                            />
                        </Modal.Body>
                    </Modal>
                </div>


            </Row>
        </>
    )
}

export default Dashbord