import { Button, Col, Grid, Image, Row, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import {accomdition} from '../dash/data'
const Accommodation = () => {
  return (
    <Row>
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
    </Row>
  )
}

export default Accommodation