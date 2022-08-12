import React from 'react'
import { Card, Col, Row, Button, Text, Grid, Spacer } from "@nextui-org/react";
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
      {/* the is acomdition */}
      {activates.map((item, index) => {
        return (
          <Grid xs={12} sm={6}>
            <Card css={{ w: "100%", h: "400px", margin: "15px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text size={12} weight="bold" transform="uppercase" color="white">
                    Your day your way
                  </Text>
                  <Text h3 color="white">
                    {item.name}
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.image}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  alt="Relaxing app background"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid $gray800",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
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
              </Card.Footer>
            </Card>

          </Grid>
        )
      })}

      <Row css={{ marginLeft: "8px" }}>
        <Text size={20}>Accomdition</Text>
      </Row>
      <Row css={{ backgroundColor: "gray", height: "1px", width: "100%", margin: "8px" }}></Row>
      <Spacer size="8px"></Spacer>
      <Col></Col>
      {/* the is activites */}
      {!accomdition.length && <PageVide children="kkknoivdniovs" />}
      {accomdition.map((item, index) => {
        return (
          <Grid xs={12} sm={6} md={4}>
            <Spacer y={2} />
            <Card css={{ w: "100%", h: "400px", marginBottom: "15px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col >
                  <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    Hotel
                  </Text>
                  <Text h3 color="black">
                    {item.name}
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.image}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt="Card example background"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Text color="#000" size={12}>
                      {item.location}
                    </Text>
                    <Text color="#000" size={12}>
                      rating : {item.rating} / 5
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
              </Card.Footer>
            </Card>
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
            <Card isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.img}
                  objectFit="cover"
                  width="100%"
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
              <Card.Footer css={{ justifyItems: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b>{item.title}</Text>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    {item.price}
                  </Text>
                </Row>
              </Card.Footer>
              <Row>
                <Spacer size="8px"></Spacer>
                <Text h3 size={12}>from : {item.from}</Text>
                <Spacer size="8px"></Spacer>
                <Text size={12}>to : {item.to}</Text>
              </Row>
            </Card>
          </Grid>
        ))}
      </Grid.Container>




    </Grid.Container>
  )
}

export default Accommodation