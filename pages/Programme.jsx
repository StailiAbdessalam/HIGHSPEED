import { Checkbox, Col, Grid, Radio, Row, Spacer, Text } from '@nextui-org/react'
import React from 'react'

const Programme = () => {
    const data = [{
        Categorie: ["rogramme", "Session piénière", "Visite technique"],
        Thematique: ["Rolling Stock", "conception and desing", "Functional and technical specificatio", "train architecture", "seat capacity"],
    }];
    return (
        <Row css={{ width: "100%" }}>

            <Grid.Container>
                <Grid xs={12} sm={3}>
                    <Spacer y={2} />
                    <Col >
                        <Row>
                            <Text size={20} h2 >
                                Filtres
                            </Text>
                        </Row>
                        <Spacer y={1} />
                        <Grid.Container>
                            <Grid xs={6} sm={12}>

                                <Row css={{ width: "100%" }} >
                                    <Checkbox.Group
                                        label="Categorie"
                                        orientation="vertical"
                                        color="error"
                                        defaultValue={["buenos-aires"]}
                                    >
                                        <Checkbox value="buenos-aires"> Aires</Checkbox>
                                        <Checkbox value="sydney">Sydney</Checkbox>
                                        <Checkbox value="london">London</Checkbox>
                                        <Checkbox value="tokyo">Tokyo</Checkbox>
                                    </Checkbox.Group>
                                </Row>
                            </Grid>
                            <Spacer y={3} />
                            <Grid xs={5} sm={12}>
                                <Row>
                                    <Checkbox.Group
                                        label="Thematique"
                                        orientation="vertical"
                                        color="error"
                                        defaultValue={["buenos-aires"]}
                                    >
                                        <Checkbox value="aires"> Aires</Checkbox>
                                        <Checkbox value="sydney">Sydney</Checkbox>
                                        <Checkbox value="london">London</Checkbox>
                                        <Checkbox value="tokyo">Tokyo</Checkbox>
                                    </Checkbox.Group>
                                </Row>
                            </Grid>
                        </Grid.Container>
                    </Col>
                </Grid>
                <Grid xs={12} sm={9}>
                    <Col css={{ width: "100%" }}>
                        <Col css={{ width: "100%", backgroundColor: "#FAFAFA", padding: "15px" }}>
                            <Text size={18} h3>8:00 AM - 9:00 AM EST (60mins)</Text>

                            <Spacer x={1} />
                            <Row >
                                <Text h1 size={27}>
                                    Opening Keynote : <br />
                                    Persisting in the Fight for change
                                </Text>
                            </Row>
                            <Spacer x={1} />
                            <Col>
                                <Text> Session Pieniere</Text>
                                <Spacer x={1} />
                                <Row>
                                    <Text css={{ backgroundColor: "$red200", width: "250px" }} >THE FILLMORE - MAIN STAGE</Text>
                                    <Spacer x={3} />
                                    <Row css={{ backgroundColor: "$red200", width: "250px" }}>LEADERSHIP INSIGHTS</Row>
                                </Row>
                                <Spacer x={1} />
                                <Text>
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
                        <Spacer />
                        <Col css={{ backgroundColor: "#DA3840", padding: "15px" }}>
                            <Text color='white' size={18} h3>8:00 AM - 9:00 AM EST (60mins)</Text>

                            <Spacer x={1} />
                            <Row >
                                <Text color='white' h1 size={27}>
                                    Opening Keynote : <br />
                                    Persisting in the Fight for change
                                </Text>
                            </Row>
                            <Spacer x={1} />
                            <Col>
                                <Text color='white'> Session Pieniere</Text>
                                <Spacer x={1} />
                                <Row>
                                    <Text color='white' css={{ backgroundColor: "#422222", width: "250px", padding: "5px" }} >THE FILLMORE - MAIN STAGE</Text>
                                    <Spacer x={3} />
                                    <Text color='white' css={{ backgroundColor: "#422222", width: "250px", padding: "5px" }}>LEADERSHIP INSIGHTS</Text>
                                </Row>
                                <Spacer x={1} />
                                <Text color='white'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias molestias, eius, hic est similique ducimus itaque maiores, quos delectus maxime. Laboriosam ad ullam illum consectetur eos officia facilis numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, inventore?
                                </Text>

                                <Row css={{ backgroundColor: "#D9D9D9" }}>
                                    <Col>
                                    </Col>
                                    <Col></Col>

                                </Row>


                                <Spacer y={2} />
                                <Row css={{ paddingLeft: "70px" }}>
                                    <Text size={12}>
                                        Fermer
                                    </Text>
                                </Row>
                            </Col>
                        </Col>
                    </Col>

                </Grid>
            </Grid.Container>


        </Row>
    )
}

export default Programme