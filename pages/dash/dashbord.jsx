import React from 'react'
import { Card, Col, Row, Button, Text, Grid, Spacer, Image } from "@nextui-org/react";
import { accomdition, activates, transport } from "../dash/data"
import PageVide from '../../components/PageVide';

console.log(accomdition.length);

const Accommodation = () => {

  return (
    <Grid.Container>
      <Text css={{ marginLeft: "8px" }} size={20}>Activates</Text>
      <Row css={{ backgroundColor: "gray", height: "1px", width: "100%", margin: "8px" }}></Row>
      <Spacer size="8px"></Spacer>
      <Col></Col>
      {/* the is activates */}
      {activates.map((item, index) => {
        return (
          <Grid xs={12} sm={6}>
            <Col css={{ w: "100%", height: "400px", margin: "30px", position: "relative" }}>
              <Col css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col css={{ margin: "8px" }}>
                  <Text size={12} weight="bold" transform="uppercase" color="white">
                    {item.location}
                  </Text>
                  <Text h3 color="white">
                    {item.name}
                  </Text>
                </Col>
              </Col>
              <Col css={{ p: 0 }}>
                <Image css={{ width: "100%", height: "400px" }}
                  src={item.image}
                  objectFit="cover"
                  alt="Relaxing app background"
                />
              </Col>
              <Col
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid $gray800",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Spacer y={2 / 3} />
                <Row css={{ height: "50px" }}>
                  <Spacer x={1} />
                  <Col>
                    <Row>
                      <Col>
                        <Text color="#d1d1d1" h2 size={17}>
                          start : {item.start}
                        </Text>

                        <Text color="#d1d1d1" size={12}>
                          end : {item.end}
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button
                        flat
                        auto
                        rounded
                        css={{ color: "#94f9f0", bg: "#94f9f026" }}
                      >
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          make a reservation
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Col>

          </Grid>
        )
      })}



      <Row css={{ marginLeft: "8px" }}>
        <Text size={20}>Accomdition</Text>
      </Row>
      <Row css={{ backgroundColor: "gray", height: "1px", width: "100%", margin: "8px" }}></Row>
      <Spacer size="8px"></Spacer>
      <Col></Col>
      {/* the is Accomdition */}







      {!accomdition.length && <PageVide children="kkknoivdniovs" />}
      {accomdition.map((item, index) => {
        return (
          <Grid xs={12} sm={6} md={4}>
            <Spacer y={2} />
            <Col css={{ w: "100%", h: "400px", marginBottom: "30px", position: "relative" }}>
              <Col css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col css={{ margin: "8px" }} >
                  <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    {item.location}
                  </Text>
                  <Text h3 color="black">
                    Hotel :  {item.name}
                  </Text>
                </Col>
              </Col>
              <Col css={{ p: 0 }}>
                <Image
                  css={{ width: "100%", height: "400px" }}
                  src={item.image}
                  objectFit="cover"
                  alt="Card example background"
                />
              </Col>
              <Col
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Spacer y={2 / 3} />
                <Row css={{ height: "50px" }}>
                  <Spacer x={1} />
                  <Col>
                    <Text h2 color="#000" size={13}>
                      check in : {item.checkin}
                    </Text>
                    <Text color="#000" size={12}>
                      check out : {item.checkout}
                    </Text>
                    <Text color="#000" size={12}>
                      stars : {item.stars} ⭐
                    </Text>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button flat auto rounded color="secondary">
                        <Text
                          css={{ color: "inherit" }}
                          size={12}
                          weight="bold"
                          transform="uppercase"
                        >
                          make a reservation
                        </Text>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Col>
          </Grid>
        )
      })}




      <Row css={{ marginLeft: "8px" }}>
        <Text size={20}>transfers</Text>
      </Row>
      <Row css={{ backgroundColor: "gray", height: "1px", width: "100%", margin: "8px" }}></Row>
      <Spacer size="8px"></Spacer>
      <Col></Col>

      <Grid.Container gap={2} justify="flex-start">
        {transport.map((item, index) => (
          <Grid xs={6} sm={3} key={index}>
            <Col css={{ backgroundColor: "#A33237", width: "100%", height: "120px" }}>
              <Spacer y={2 / 3} />
              <Row css={{ display: "flex", justifyContent: "center" }}>
                <Text h1 size={20} >{item.title}</Text>
              </Row>
              <Spacer y={1} />
              <Row>
                <Spacer size="8px"></Spacer>
                <Text color='white' h3 size={12}>from : {item.from}</Text>
                <Spacer size="8px"></Spacer>
                <Text color='white' size={12}>to : {item.to}</Text>
              </Row>
              <Col css={{ justifyItems: "flex-center" }}>
                <Row wrap="wrap" justify="center" align="center">
                  <Text css={{ color: "black", fontWeight: "$semibold", fontSize: "$md" }}>
                    {item.price}
                  </Text>
                </Row>
              </Col>
            </Col>
          </Grid>
        ))}
      </Grid.Container>




    </Grid.Container>
  )
}

export default Accommodation