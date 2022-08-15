import React from 'react'
import { Button, Col, Grid, Image, Row, Spacer, Text } from '@nextui-org/react'
import { transport } from '../dash/data'
const transfers = () => {

  return (
    <Row>
      <Grid.Container gap={2} justify="flex-start">
        {transport.map((item, index) => (
          <Grid xs={12} md={4} sm={6} key={index}>
            <Col css={{ backgroundColor: "#A33237", width: "100%", height: "100%",padding:"15px" }}>
              <Spacer y={2 / 3} />
              <Row css={{ display: "flex", justifyContent: "center" }}>
                <Text h1 size={20} >{item.title}</Text>
              </Row>
              <Spacer y={1} />
              <Row>
                <Spacer size="8px"></Spacer>
                <Text>from : </Text>
                <Spacer x={1 / 3} />
                <Text color='white' h3 size={17}> {item.from}</Text>
                <Spacer x={4} />
                <Text>to :  </Text>
                <Spacer x={1 / 3} />
                <Text color='white' h3 size={17}> {item.to}</Text>
              </Row>
              <Spacer y={1} />
              <Col css={{ justifyItems: "flex-center" }}>
                <Row wrap="wrap" justify="center" align="center">
                  <Text css={{ color: "black", fontWeight: "$semibold", fontSize: "$md" }}>
                    {item.price}
                  </Text>
                </Row>
              </Col>
              <Spacer x={1} />
              <Row css={{ backgroundColor: "Black", height: "1px", width: "100%" }}></Row>
              <Spacer y={1} />
              <Col>
                <Text color='black' css={{ padding: "10px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus expedita totam ad non sed possimus cumque sapiente iste explicabo? Dolorum iste vero dicta ipsa, sint perferendis reprehenderit quos cupiditate autem.

                </Text>
              </Col>
            </Col>
          </Grid>
        ))}
      </Grid.Container>
    </Row >
  )
}

export default transfers