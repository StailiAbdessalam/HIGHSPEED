import { Col, Container, Grid, Image, Modal, red, Row, Spacer, Text } from "@nextui-org/react"
import { useEffect, useState } from "react";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
const Hotel = () => {
    const data = {
        name: "Menara Palace",
        address: "",
        city: "",
        etoiles: 3,
        services: [
            "Wi-Fi",
            "Parking",
            "Restaurant",
            "Bar",
            "Spa",
            "Pool",
            "Gym",
            "Laundry"
        ],
        url: {
            photo1: "https://smartbooking.ma/smart/web/uploads/24/IDOU-ANFA-HOTEL-&-SPA-24-xo.jpg",
            photo2: "https://content.r9cdn.net/himg/d2/af/97/hotelsdotcom-255339-16b44f8b_w-334339.jpg",
            photo3: "https://nypost.com/wp-content/uploads/sites/2/2022/02/Hotel-feature.jpg?quality=75&strip=all",
            photo4: "https://static11.com-hotel.com/uploads/hotel/317641/photo/hotel-relax-marrakech_15970825071.jpg",
        },
        email: "",
        description: "",
        price: "",
        datadepart: "07/03/2023",
        dataDarivee: "10/03/2023",
        chambreType: [
            { Type: "chambre Single", Prix: "1400", device: "MAD" },
            { Type: "chambre Double", Prix: "1800", device: "MAD" },
            { Type: "chambre junio", Prix: "2000", device: "MAD" },
        ]
    };
    const [next, setNext] = useState(true);
    const [prev, setPrev] = useState(true);
    const [visible, setVisible] = React.useState(false);
    const [hotel, setHotel] = useState({ data });
    const [numbre, setNumbre] = useState(1);
    const [model, setModel] = useState(null);
    const affechModel = (imagSRC, e) => {
        setNumbre(e.target.alt);
        setVisible(true);
        setModel(imagSRC);
    }
    useEffect(() => {
        setModel(hotel.data.url[`photo${numbre}`]);
        setNext(numbre >= Object.keys(hotel.data.url).length ? false : true);
        setPrev(numbre <= 1 ? false : true);
    }, [numbre]);

    const suiverImage = async (type) => {
        if (type === "next") {
            setNumbre(numbre => numbre + 1);
        } else {
            setNumbre(numbre - 1);
        }
    }
    const closeHandler = () => {
        setVisible(false);
    };
    var count = (Object.keys(hotel.data.url).length) - 3;
    var forheight = Object.keys(hotel.data.chambreType).length;

    return (
        <Container
            css={{
                width: "100%",
                margin: "0",
                maxWidth: "100% !important",
                '@sm': { padding: "60px", }
            }}
        >
            {/* 6-Line Background Decoration */}
            <div className="bgLines">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>


            {/* MAIN */}
            <Row>
                {/* Partie Daroite*/}
                <Grid.Container>
                    <Grid xs={12} sm={6}>
                        <Col gap={14}>
                            <Col>
                                <h1>Hotel {hotel.data.name}</h1>
                                <Text color="Red" h3>{hotel.data.etoiles} étoiles</Text>
                            </Col>
                            {/* image global */}
                            <Col css={{
                                cursor: "pointer"
                            }}
                            >
                                <Image
                                    src={hotel.data.url.photo1}
                                    alt="1"
                                    height="340px"
                                    width="100%"
                                    objectFit="cover"
                                    onClick={(e) => affechModel(hotel.data.url.photo1, e)}
                                />
                                <Spacer y={1 / 3} />
                            </Col>
                            {/* images */}
                            <Row>
                                <Grid.Container >
                                    <Grid xs={12} md={6} css={{ cursor: "pointer" }} >
                                        <Image
                                            src={hotel.data.url.photo2}
                                            alt="2"
                                            height="340px"
                                            width="100%"
                                            objectFit="cover"
                                            onClick={(e) => { affechModel(hotel.data.url.photo2, e) }}
                                        />
                                        {/* <Spacer x={1 / 3} /> */}
                                    </Grid>
                                    <Grid xs={12} md={6} css={{ cursor: "pointer" }} onClick={(e) => { affechModel(hotel.data.url.photo3, e = { target: { alt: "3" } }) }}>
                                        <Col css={{ position: "relative", }}>
                                            <Image
                                                src={hotel.data.url["photo3"]}
                                                alt="3"
                                                height="340px"
                                                width="100%"
                                                objectFit="cover"
                                            />

                                            <Row css={{ backgroundColor: "rgba(172, 77, 77, 0.425)", width: "100%", height: "100%", position: "absolute", top: "0" }}>
                                                <Text zIndex="90">
                                                </Text>
                                            </Row>
                                            <Container zIndex="100" css={{ position: "absolute", top: "5%", width: "100%", maxWidth: "100%", height: "100%" }}>
                                                <Row css={{ height: "100%" }} justify="center" align="center">
                                                    <Text h1 size={60} color="$white">
                                                        +{count}
                                                    </Text>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Grid>
                                </Grid.Container>
                            </Row>
                            {/* description */}
                            <Spacer y={2} />
                            <Col>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, animi natus eius maxime, voluptatem impedit ipsam accusantium aspernatur voluptates obcaecati quos possimus autem qui fugiat provident eaque repellendus praesentium ea ut? Totam doloremque eius sint.
                                    <br />
                                    <br />
                                    id est soluta necessitatibus reiciendis explicabo ipsum? Odit libero placeat reiciendis ut? Eveniet itaque iure, veniam minus deleniti fugiat ducimus sed rerum expedita suscipit ipsam laboriosam consectetur. Minima ipsum quidem numquam iusto! Repellendus, aspernatur pariatur? Quia nesciunt natus ut doloribus nulla iure magni eum optio consequ reiciendis explicabo ipsum? Odit libero placeat reiciendis ut? Eveniet itaque iure, veniam minus deleniti fugiat ducimus ssuscipit ipsam laboriosam consectetur. Minima ipsum quidem numquam iusto! Repellendus, aspernatur pariatur? Quia nesciunt natus ut doloribus nulla iure magni eum optioed rerum expedita suscipit ipsam .
                                    <br />
                                    <br />
                                    laboriosam consectetur. Minima ipsum quidem numquam iusto! Repellendus, aspernatur pariatur? Quia nesciunt natus ut doloribus nulla iure magni eum optio consequ reiciendis explicabo ipsum? Odit libero placeat reiciendis ut? Eveniet itaque iure, veniam minus deleniti fugiat ducimus sed rerum expedita  consequatur eos ducimus suscipit distinctio iusto rem nam quidem, minima, dolores enim, illum dolorem? Sapiente recusandae iusto voluptatibus eius magni.
                                </Text>
                                <Spacer y={2} />
                            </Col>
                            {/* services */}
                            <Col css={{
                                background: "rgb(179, 48, 48)",
                                width: "60%",
                                padding: "20px 16px",
                                color: "rgb(243, 243, 243)"
                            }}>
                                <h2 >services</h2>
                                <ul>
                                    {hotel.data.services.map((service, index) => (
                                        <li key={index}>{service}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Col>
                        <Spacer x={2 / 3} />
                    </Grid>
                    {/* partie Gauche */}
                    {/* <Spacer y={2} /> */}
                    <Grid xs={12} sm={6}>
                        <Col css={{
                            marginTop: "20px",
                            border: "2px solid gray",
                            height: "600px"
                            , '@sm': {
                                marginTop: "140px",
                                width: "100%",
                            }
                        }}>
                            {/* header de table */}
                            <Row css={{
                                borderBottom: "2px solid gray",
                                height: "20%"
                            }} >
                                {/* date d'arivee */}
                                <Col css={{
                                    height: "100%",
                                    borderRight: "solid 2px gray"
                                }}>
                                    <Grid.Container>
                                        <Spacer x={2} />
                                        <Grid xs={12}>
                                            <Spacer y={2} />
                                            <Text h4 >
                                                Date d'araiver
                                            </Text>
                                            <Spacer y={2} />
                                        </Grid>
                                        <Spacer y={2} />
                                        <Grid xs={4}>
                                            <Text>
                                                {hotel.data.dataDarivee}
                                            </Text>
                                        </Grid>
                                    </Grid.Container>
                                </Col>
                                {/* date de depart  */}
                                <Col css={{
                                    height: "100%",

                                }}>
                                    <Grid.Container>
                                        <Spacer x={2} />
                                        <Grid xs={12}>
                                            <Spacer y={2} />
                                            <Text h4 >
                                                Date de depart
                                            </Text>
                                            <Spacer y={2} />
                                        </Grid>
                                        <Grid xs={4}>
                                            <Spacer y={2} />
                                            <Text>
                                                {hotel.data.dataDarivee}
                                            </Text>
                                        </Grid>
                                    </Grid.Container>
                                </Col>
                            </Row>
                            {/* affichage les information des chambres de hotel */}
                            <Col css={{ borderBottom: "gray solid 2px", height: "60%" }}>
                                {hotel.data.chambreType.map((chambre, index) => (
                                    <Row css={{ height: `${100 / forheight + "%"}` }}>
                                        <Spacer y={2} />
                                        <Grid.Container>
                                            <Spacer x={2} />
                                            <Row>
                                                <Grid xs={12}>
                                                    <Text>{chambre.Type}
                                                        <br />
                                                        <br />
                                                        <Text color="red" >
                                                            Prix {chambre.Prix} {chambre.device}
                                                        </Text>
                                                    </Text>
                                                    <Spacer y={2} />
                                                </Grid>
                                                <Grid>
                                                    <Row>
                                                        <Text color="red">2</Text>
                                                        <Spacer x={1} />
                                                        <FaChevronDown />
                                                        <Spacer x={1} />
                                                    </Row>
                                                </Grid>
                                            </Row>
                                        </Grid.Container>
                                    </Row>
                                ))}
                            </Col>
                            {/* calcule total de prix de 3 joour */}

                            <Row css={{ backgroundColor: "rgb(152, 202, 152)", height: "20%" }}>
                                <Col>
                                    <Grid.Container>
                                        <Grid xs="6">
                                            <Spacer x={1} />
                                            <Col>
                                                <Spacer x={2} />
                                                <Text size={20} h4 >Total pour 3 nuits</Text>
                                                <Spacer y={1 / 2} />
                                                <Text size={17} >Taxes de sejour</Text>
                                                <Spacer y={1 / 2} />
                                                <Text h3>Total</Text>
                                            </Col>
                                        </Grid>
                                        <Grid >
                                            <Col>
                                                <Spacer x={2} />
                                                <Text size={20} h4 >17 100 MAD</Text>
                                                <Spacer y={1 / 2} />
                                                <Text size={17} >289 MAD</Text>
                                                <Spacer y={1 / 2} />
                                                <Text color="red" h3>20 900 MAD</Text>
                                            </Col>
                                        </Grid>
                                        <Spacer x={1} />

                                    </Grid.Container>

                                </Col>
                            </Row>


                            {/* button de DISPONIBILITÉ */}
                            <Spacer y={1} />
                            <Row css={{ background: "rgb(179, 48, 48)" }}>
                                <Spacer x={2} />
                                <Text color="white" size={20} css={{ width: "100%" }}>
                                    <Spacer y={2} />
                                    VÉRIFIER LA DISPONIBILITÉ
                                    <Spacer y={2} />
                                </Text>

                            </Row>

                        </Col>
                    </Grid>


                </Grid.Container>


            </Row>

            <div>
                <Modal noPadding open={visible} onClose={closeHandler} width="60%" height="100%" >
                    <Modal.Header
                        css={{ position: "absolute", zIndex: "$1", top: 5, right: 8 }}
                    >
                    </Modal.Header>
                    <Row >


                        {prev && <Row onClick={() => { suiverImage("prev") }} css={{ position: "absolute", zIndex: "1", top: "45%", left: "0%", cursor: "pointer" }} >
                            <BiChevronLeft size="100px" color="white" />
                        </Row>}
                        <Modal.Body height="100%" width="100%" css={{ position: "relative" }}>
                            <Image
                                showSkeleton
                                src={model}
                                width="100%"
                                height="100%"
                            />
                            {/* <Row css={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}> */}

                            {/* </Row> */}
                        </Modal.Body>
                        {next && <Row onClick={() => { suiverImage("next") }} css={{ position: "absolute", zIndex: "3", top: "45%", right: "-89%", cursor: "pointer" }} >
                            <BiChevronRight color="white" size="100px" />
                        </Row>}
                    </Row>
                </Modal>
            </div>


        </Container >
    )
}

export default Hotel