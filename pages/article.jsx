import { Col, Container, Grid, Image, Link, Row, Spacer, Text } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { HiMenu,HiOutlineMenuAlt1 } from 'react-icons/hi'

const article = () => {
    const data =
    {
        id: 1,
        title: 'The World Congress on High-speed rail is a Uic event ',
        date: 'Monday 30 May 2022',
        image: "https://www.iaea.org/sites/default/files/styles/original_image_size/public/517008559023bab78ffb05k.jpg?itok=yIlQ9POW",
        event: [
            { title: "3rd workshop on the strategy for railway sector devlopment in africa within the framework of agenda 2063", date: "Monday 30 May 2022" },
            { title: "UIC Refugee Task FOrce releases a guidance on measures to be taken for refugee crises", date: "Monday 30 May 2022" },
            { title: "UIC publishes new factsheet on the Flexible content Barcode (FCB)", date: "Monday 30 May 2022" },
        ]
    }
    const [ouvrir, setOuvrir] = useState(false)
    const [article, setArticle] = useState(data)
    const [left, setLeft] = useState("-100%")
    const toggle = () => {
        ouvrir ? setLeft("-100%") : setLeft("0")
        setOuvrir(!ouvrir)
    }

    return (
        // <div>
        //     <Row css={{ display: "flex", justifyContent: "center", gap: "$18" }}>
        //         {/* image  the article  */}
        //         <Col css={{width: "50%", position: 'absolute',shadow:"$xl", left: `${left}`,top:"0", backgroundColor: "White", zIndex: "100", padding: "30px", "@md": { marginLeft: '0', position: "static", width: "26%", marginTop: "32px" } }}>
        //             <Text css={{ color: "Red", margin: "13px 0" }}>{article.date}</Text>

        //             <Text css={{ margin: "$0", fontFamily: "sans-serif", fontSize: "x-large", "@md": { fontSize: "xxx-large", fontFamily: "sans-serif", fontWeight: "$bold", margin: "$0" } }}>{article.title}</Text>
        //             <Row css={{ gap: "$3", display: "flex", alignItems: "center", margin: "15px 0" }}>
        //                 <Row css={{ backgroundColor: "Red", width: "50px", height: "1px", margin: "$0" }} ></Row>
        //                 <Text css={{ display: "flex", margin: "$0", fontSize: "small" }}>Lire Plus</Text>
        //             </Row>
        //             {article.Event.map((event, index) => {
        //                 return (
        //                     <Col css={{ margin: "23px 0px" }}>
        //                         <Text css={{ color: "Red", fontSize: "small" }}>
        //                             {event.date} | press
        //                         </Text>
        //                         <Text css={{ fontSize: "x-large", fontWeight: "$bold" }}>
        //                             {event.title}
        //                         </Text>
        //                         <Row css={{ gap: "$3", display: "flex", alignItems: "center", margin: "15px 0" }}>
        //                             <Row css={{ backgroundColor: "Red", width: "50px", height: "1px" }} ></Row>
        //                             <Text css={{ display: "flex", margin: "$0", fontSize: "small" }}>Lire Plus</Text>
        //                         </Row>
        //                     </Col>
        //                 )
        //             })}

        //             <Col css={{ backgroundColor: "Red", marginTop: "30px", display: "flex",height:"80px", justifyContent: "center", alignItems: "center","@md":{height: "120px"} }}>
        //                 <Text css={{ margin: "auto", color: "White", textAlign: "center",fontSize: "large","@md":{fontSize: "x-large"} }}>
        //                     AFFICHER PLUS D'ACTUALITÉS
        //                 </Text>
        //             </Col>

        //         </Col>
        //         <Row onClick={() => toggle()} css={{ position: "fixed", zIndex: "$10", "@md": { display: "none" } }}>

        //             {ouvrir && <HiMenu size="40px" />}
        //            {!ouvrir && <HiOutlineMenuAlt1 size="40px" />}
        //         </Row>
        //         {/* the description for article */}
        //         <Col css={{ width: "90%", "@md": { width: "63%" } }} >
        //             <Image
        //                 width="100%"
        //                 height={500}
        //                 src={article.image}
        //                 alt="Default Image"
        //                 objectFit="cover"
        //             />
        //             <Text css={{ fontSize: "x-large", margin: "$13" }}>
        //                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quae neque corrupti totam numquam praesentium minima velit deserunt, illum itaque eum modi in tempore ea aspernatur nihil iusto adipisci a! Id fugiat alias earum nam qui, cumque consequuntur quos blanditiis dolores placeat, debitis excepturi voluptates! Dolorem commodi voluptatum, vitae numquam eius sapiente autem porro assumenda quidem aut ipsum natus nostrum mollitia, consectetur quos laboriosam. Quod iusto id non, quibusdam vero totam cum quaerat sunt cupiditate placeat fuga, illum fugiat nulla explicabo illo laudantium ad perspiciatis maxime ducimus alias quae adipisci asperiores odio. Fugiat debitis laborum, alias cupiditate eligendi labore consectetur?
        //             </Text>
        //             <Text css={{ fontSize: "large", margin: "$13" }}>
        //                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quae neque corrupti totam numquam praesentium minima velit deserunt, illum itaque eum modi in tempore ea aspernatur nihil iusto adipisci a! Id fugiat alias earum nam qui, cumque consequuntur quos blanditiis dolores placeat, debitis excepturi voluptates! Dolorem commodi voluptatum, vitae numquam eius sapiente autem porro assumenda quidem aut ipsum natus nostrum mollitia, consectetur quos laboriosam. Quod iusto id non, quibusdam vero totam cum quaerat sunt cupiditate placeat fuga, illum fugiat nulla explicabo illo laudantium ad perspiciatis maxime ducimus alias quae adipisci asperiores odio. Fugiat debitis laborum, alias cupiditate eligendi labore consectetur?
        //             </Text>
        //             <Text css={{ fontSize: "medium", margin: "$13" }}>
        //                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quae neque corrupti totam numquam praesentium minima velit deserunt, illum itaque eum modi in tempore ea aspernatur nihil iusto adipisci a! Id fugiat alias earum nam qui, cumque consequuntur quos blanditiis dolores placeat, debitis excepturi voluptates! Dolorem commodi voluptatum, vitae numquam eius sapiente autem porro assumenda quidem aut ipsum natus nostrum mollitia, consectetur quos laboriosam. Quod iusto id non, quibusdam vero totam cum quaerat sunt cupiditate placeat fuga, illum fugiat nulla explicabo illo laudantium ad perspiciatis maxime ducimus alias quae adipisci asperiores odio. Fugiat debitis laborum, alias cupiditate eligendi labore consectetur?
        //             </Text>
        //             <Text css={{ fontSize: "medium", margin: "$13" }}>
        //                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quae neque corrupti totam numquam praesentium minima velit deserunt, illum itaque eum modi in temtate eligendi labore consectetur?
        //             </Text>
        //             <Text css={{ fontSize: "medium", margin: "$13" }}>
        //                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quae neque corrupti totam numquam praesentium minima velit deserunt, illum itaque eum modi in tempore ea aspernatur nihil iusto adipisci a! Id fugiat alias earum nam qui, cumque consequuntur quos blanditiis dolores placeat, debitis t debitis laborum, alias cupiditate eligendi labore consectetur?
        //             </Text>

        //             <Col css={{ background: "rgb(6, 75, 6)", width: "100%", height: "300px", margin: "15px", display: 'flex', flexDirection: "column", justifyContent: "center" }}>

        //                 <Text css={{ fontSize: "large", color: "green", marginLeft: "15%", width: "65%" }}>
        //                     11TH UIC HIGH-SPEED CONGRESS
        //                 </Text>
        //                 <Text css={{ color: "White", fontSize: "$xl", width: "65%", marginLeft: "15%", "@md": { fontSize: "$xl5" } }}>
        //                     "HIGH-SPEED RAIL:THE RIGHT SPEED FOR OUR PLANET"
        //                 </Text>
        //             </Col>
        //         </Col>

        //     </Row>
        // </div>

        <div>
            {/* ACTUALITE SECTION */}
      <Row css={{ paddingRight: "58px", paddingLeft: "58px", paddingBottom: "300px" }}>
        <Grid.Container css={{ '@sm': {flexDirection: "row-reverse"} }}>

          {/* RIGHT SIDE - FLIPPED */}
          <Grid xs={12} sm={8}>
            <Col css={{ background: "$white", border: "1px solid $lightestGray", borderTop: "none", paddingBottom: "100px" }}>
              {/* IMAGE */}
              <Row css={{ height: "320px", '@md': { height: "500px" } }}>
                <Image
                  src={article.image}
                  alt="-"
                  layout="fill"
                  objectFit="cover"
                />
              </Row>
              <Spacer y={2.5}/>
              {/* TEXT */}
              <Row css={{ '@sm': { paddingLeft: "40px", paddingRight: "40px" } }}>
                <Col>
                  <Text size={20}>
                    The World Congress on High Speed Rail is a UIC event which is held every 2-3 years. The Congress has been successfully convened 
                    for ten times since its first edition in 1992, and now is renowned worldwide as the most prominent and a large-scale global 
                    event on high speed rail addressing both HSR operation and technology issues.
                  </Text>
                  <Spacer y={2}/>
                  <Text>
                    The Congress will be organised around 3 main blocks: round tables and parallel sessions, where participants may have in-depth 
                    discussions and exchanges on the latest technologies and achievements of HSR planning, construction, technology &amp; equipment, 
                    operation management and safety, etc. One entire day will be devoted to technical visits.
                    <br /><br />
                    Over 1,500 representatives will come from around the world.
                    <br /><br />
                    UIC HIGHSPEED 2022, the 11th UIC World Congress on High-Speed Rail (WCHSR), is being coordinated by the International Union 
                    of Railways (UIC) and ONCF (Moroccan National Railways Office), in collaboration with all parties involved in high-speed rail 
                    in the world. The congress will be held from 7 to 10 March 2023, at Marrakech, Morocco.
                    <br /><br />
                    The theme of the Congress "High-Speed Rail: the right speed for our planet" will emphasise rail&apos;s contribution to addressing 
                    climate change and its role in territorial development.
                    <br /><br />
                    During this congress, Parallel Sessions covering the main subjects relating to High-Speed Rail (HSR) will take place over 
                    one-and-a-half days. The Scientific Committee of the Congress is in charge of setting the programme of those Parallel Sessions 
                    as well as selecting the speakers and papers.
                  </Text>
                </Col>
              </Row>
              <Spacer y={3}/>
              {/* GREEN BANNER */}
              <Row css={{ background: "$secondaryDark", padding: "20px", '@sm': { padding: "80px", paddingTop: "60px" } }}>
                <Col>
                  <Text color="$secondaryLight" css={{ fontSize: "15px", '@sm': { fontSize: "18px" } }}>
                      11TH UIC HIGH-SPEED CONGRESS
                  </Text>
                  <Spacer y={1}/>
                  <Text color="$secondaryLightest" weight="bold" css={{ lineHeight: "26px", fontSize: "20px", '@sm': { lineHeight: "54px", fontSize: "40px" }  }}>
                      "HIGH-SPEED RAIL: 
                      <br />
                      THE RIGHT SPEED FOR OUR PLANET"
                  </Text>
                </Col>
              </Row>
              <Spacer y={4}/>
              {/* ABOUT EVENT */}
              <Row css={{ height: "360px" }}>
                <Image
                  src={"/assets/img/about-train.png"}
                  alt="-"
                  layout="fill"
                  objectFit="cover"
                />
              </Row>
              <Spacer y={2.5}/>
              {/* TEXT */}
              <Row css={{ '@sm': { paddingLeft: "40px", paddingRight: "40px" } }}>
                <Col>
                  <Text h3 size={50} weight="bold" css={{ lineHeight: "60px" }}>
                    The 10th WCHSR
                  </Text>
                  <Text size={24} css={{ fontStyle: "italic" }}>
                    May 2018, Ankara, Turkey
                  </Text>
                  <Spacer y={2}/>
                  <Text size={20}>
                    The UIC World Congress on High Speed-rail, organised by UIC and TCDD, Turkish State Railways, for its 10th edition 
                    in Ankara from 8 to 11 May 2018, brought together 1,000 participants from the rail and transport world, representing 
                    30 countries. Over the course of three days, all the actors concerned by the development of the high-speed rail system 
                    held fruitful discussions on the theme 'Sharing knowledge for Sustainable and Competitive Operations'.
                  </Text>
                </Col>
              </Row>
            </Col>
          </Grid>

          {/* LEFT SIDE - FLIPPED  */}
          <Grid xs={12} sm={4}>
            <Col css={{ background: "$white", paddingTop: "50px", '@sm': { paddingRight: "40px" }, '@md': { paddingRight: "100px" }  }}>
              {/* LATEST ARTICLES */}
              {article.event.map((event, index) => {
                let fontSize = 28;
                let lineHeight = 36;
                let dateFontSize = 13;
                if(index === 0){
                  fontSize = 50;
                  lineHeight= 62;
                  dateFontSize = 17;
                }
                return (
                  <>
                    <Row>
                      <Col>
                        <Row>
                          <Text color="$primaryLighter" size={dateFontSize} >
                            {article.date}
                          </Text>
                        </Row>
                        <Spacer y={0.5}/>
                        <Row>
                          <Text h3 weight="bold" css={{ lineHeight: (lineHeight - 10) + "px", fontSize: (fontSize - 10) + "px", 
                                                        '@lg': { lineHeight: lineHeight + "px", fontSize: fontSize + "px" } }}>
                            {article.title}
                          </Text>
                        </Row>
                        <Row>
                          <Col>
                            <Link href="#">
                              <Row>
                                <Container css={{ position: "relative", padding: "0", backgroundColor: "$primaryLighter", width: "50px", height: "2px", top: "10px" }}></Container>
                                <Spacer x={0.5}/>
                                <Text size={13}>Lire Plus</Text>
                              </Row>
                            </Link>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Spacer y={3}/>
                  </>
                )
              })}
              <Spacer y={2}/> 
              <Row>
                <Col css={{ background: "$primaryLight", padding: "20px", '@sm': { paddingTop: "30px", paddingBottom: "30px" } }}>
                  <Link href="#" css={{ width: "100%" }}>
                    <Text h3 color="$white" weight="medium" size={18} css={{ textTransform: "uppercase" }}>
                      AFFICHER PLUS D'ACTUALITÉS
                    </Text>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Grid>

          {/*<Row onClick={() => toggle()} css={{ position: "fixed", zIndex: "$10", "@md": { display: "none" } }}>
              {ouvrir && <HiMenu size="40px" />}
              {!ouvrir && <HiOutlineMenuAlt1 size="40px" />}
          </Row>*/}

        </Grid.Container>
      </Row>
        </div>
    )
}

export default article