import React from 'react'
import { Button, Col, Grid, Image, Row, Spacer, Text } from '@nextui-org/react'
import { activates } from '../dash/data'
const activate = () => {
  return (
  <Row>
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

  </Row>
  )
}

export default activate