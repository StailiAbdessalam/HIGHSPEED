import React from 'react'
import { Button, Col, Grid, Image, Row, Spacer, Text } from '@nextui-org/react'
import { transport } from '../dash/data'
const transfers = () => {

  return (
    <Row>
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
    </Row>
  )
}

export default transfers