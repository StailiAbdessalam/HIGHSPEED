import { Checkbox, Col, Grid, Radio, Row, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import Akhanouch from '../components/akhanouch'
const Programme = () => {
    const data = {
        Categorie: ["rogramme", "Session piénière", "Visite technique"],
        Thematique: ["Rolling Stock", "conception and desing", "Functional and technical specificatio", "train architecture", "seat capacity"],
    };
    return (
        <Row css={{ width: "100%" }}>

            <Grid.Container>
                <Grid xs={12} md={3}>
                    <Spacer x={2} />
                    <Col >
                        <Spacer y={2} />
                        <Row>
                            <Text size={40} h3 >
                                Filtres
                            </Text>
                        </Row>
                        <Spacer y={2} />
                        <Grid.Container>
                            <Text h6 size={16}>Catégorie</Text>
                            <Spacer y={2} />
                            <Grid xs={6} md={12}>
                                <Spacer x={2} />
                                <Row css={{ width: "100%" }} >
                                    <Checkbox.Group
                                        label=""
                                        orientation="vertical"
                                        color="error"
                                        defaultValue={["buenos-aires"]}
                                    >
                                        {data.Categorie.map((item, index) => {
                                            return (
                                                <Checkbox key={index} value={item}>{item}</Checkbox>
                                            )
                                        })}
                                        <Spacer y={4} />
                                    </Checkbox.Group>
                                </Row>
                            </Grid>
                            <Text h6 size={16} >Thématique</Text>
                            <Spacer y={2} />
                            <Grid xs={6} md={12}>
                                <Spacer x={2} />
                                <Row>
                                    <Checkbox.Group
                                        label=""
                                        orientation="vertical"
                                        color="error"
                                        defaultValue={["buenos-aires"]}
                                    >
                                        {data.Thematique.map((item, index) => {

                                            return (
                                                <Checkbox value={item}>{item}</Checkbox>
                                            )

                                        })}

                                    </Checkbox.Group>
                                </Row>
                            </Grid>
                        </Grid.Container>
                    </Col>
                </Grid>
                <Grid xs={12} sm={9} >
                    <Col css={{ width: "100%" }}>
                        <Col css={{ width: "100%", backgroundColor: "#FAFAFA", padding: "20px" }}>
                            <Spacer y={2} />
                            <Text color='#5B3F3F' size={18} h3>8:00 AM - 9:00 AM EST (60mins)</Text>
                            <Spacer x={1} />
                            <Row >
                                <Text color='#422222' h1 size={34}>
                                    Opening Keynote : <br />
                                    Persisting in the Fight for change
                                </Text>
                            </Row>
                            <Spacer x={1} />
                            <Col>
                                <Text color='#AEADAD'> Session Pieniere</Text>
                                <Spacer x={1} />
                                <Row>
                                    <Text css={{ backgroundColor: "$red200", width: "250px", padding: "7px" }} >THE FILLMORE - MAIN STAGE</Text>
                                    <Spacer x={3} />
                                    <Row css={{ backgroundColor: "$red200", width: "250px", padding: "7px" }}>LEADERSHIP INSIGHTS</Row>
                                </Row>
                                <Spacer x={1} />
                                <Text color='#8C7979'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias molestias, eius, hic est similique ducimus itaque maiores, quos delectus maxime. Laboriosam ad ullam illum consectetur eos officia facilis numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore?
                                </Text>
                                <Spacer y={2} />
                                <Row css={{ paddingLeft: "70px" }}>
                                    <Text size={12}>
                                        En savoir plus
                                    </Text>
                                </Row>
                            </Col>
                        </Col>
                        <Row>
                        </Row>
                        <Spacer y={2} />


                        <Col css={{ backgroundColor: "#DA3840", padding: "20px" }}>
                            <Text color='#FAFAFA' size={18} h3>8:00 AM - 9:00 AM EST (60mins)</Text>

                            <Spacer x={1} />
                            <Row >
                                <Text color='#FAFAFA' h1 size={34}>
                                    Opening Keynote : <br />
                                    Persisting in the Fight for change
                                </Text>
                            </Row>
                            <Spacer x={1} />
                            <Col>
                                <Text color='#D99FA3'> Session Pieniere</Text>
                                <Spacer x={1} />
                                <Row>
                                    <Text color='#FAFAFA' css={{ backgroundColor: "#422222", width: "250px", padding: "7px" }} >THE FILLMORE - MAIN STAGE</Text>
                                    <Spacer x={3} />
                                    <Text color='#FAFAFA' css={{ backgroundColor: "#422222", width: "250px", padding: "7px" }}>LEADERSHIP INSIGHTS</Text>
                                </Row>
                                <Spacer x={1} />
                                <Text color='#FAFAFA'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias molestias, eius, hic est similique ducimus itaque maiores, quos delectus maxime. Laboriosam ad ullam illum consectetur eos officia facilis numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore?
                                </Text>
                            </Col>
                        </Col>
                        <Row css={{ backgroundColor: "#D9D9D9", padding: "40px 20px" }}>
                            <Col>
                                <Row >
                                    <Text color='#DA3F47' h3 size={20}>SPEACKERS</Text>
                                </Row>
                                <Row>
                                    <Akhanouch />
                                    <Akhanouch />
                                </Row>
                                <Row>
                                    <Akhanouch />
                                    <Akhanouch />
                                </Row>
                                <Spacer y={3} />
                                <Row css={{ paddingLeft: "70px" }}>
                                    <Text size={12}>
                                        Fermer
                                    </Text>
                                </Row>
                            </Col>
                            <Col>
                                <Row >
                                    <Text color='#DA3F47' h3 size={20}>MODERATEUR</Text>
                                </Row>
                                <Row>
                                    <Akhanouch />
                                </Row>
                            </Col>
                        </Row>
                        <Spacer y={2} />
                        <Col css={{ width: "100%", backgroundColor: "#FAFAFA", padding: "20px" }}>
                            <Spacer y={2} />
                            <Text color='#5B3F3F' size={18} h3>8:00 AM - 9:00 AM EST (60mins)</Text>
                            <Spacer x={1} />
                            <Row >
                                <Text color='#422222' h1 size={34}>
                                    Opening Keynote : <br />
                                    Persisting in the Fight for change
                                </Text>
                            </Row>
                            <Spacer x={1} />
                            <Col>
                                <Text color='#AEADAD'> Session Pieniere</Text>
                                <Spacer x={1} />
                                <Row>
                                    <Text css={{ backgroundColor: "$red200", width: "250px", padding: "7px" }} >THE FILLMORE - MAIN STAGE</Text>
                                    <Spacer x={3} />
                                    <Row css={{ backgroundColor: "$red200", width: "250px", padding: "7px" }}>LEADERSHIP INSIGHTS</Row>
                                </Row>
                                <Spacer x={1} />
                                <Text color='#8C7979'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias molestias, eius, hic est similique ducimus itaque maiores, quos delectus maxime. Laboriosam ad ullam illum consectetur eos officia facilis numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore?
                                </Text>
                                <Spacer y={2} />
                                <Row css={{ paddingLeft: "70px" }}>
                                    <Text size={12}>
                                        En savoir plus
                                    </Text>
                                </Row>
                            </Col>
                        </Col>

                        <Col>
                            <Col>
                                <Row></Row>
                                <Row></Row>
                                <Row></Row>
                            </Col>
                            <Row>

                            </Row>
                        </Col>



                    </Col>
                </Grid>
            </Grid.Container>


        </Row>
    )
}

export default Programme