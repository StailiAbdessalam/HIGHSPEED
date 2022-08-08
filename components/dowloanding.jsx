import { Col, Row, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'

const dowloanding = () => {
    return (
        <>
            <Row css={{ backgroundColor: "#A33237", width: "100%" }}>
                <Spacer x={2} />
                <Col>
                    <Spacer y={1} />
                    <Text size={18} h2 color='#ffff'> Programme détailler de l'événement</Text>
                    <Spacer y={2} />
                    <Row>
                        <Text color='#ffff' size={12}> 2mo | pdf</Text>
                        <Spacer x={14} />
                        <AiOutlineCloudDownload size={20} color='#ffff' />
                    </Row>
                    <Spacer y={1} />
                </Col>
            </Row>
        </>
    )
}

export default dowloanding