import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import axios from "axios";
import moment from 'moment'
import { Row, Col, Image , Button , BackTop  } from "antd";
import {UpOutlined} from '@ant-design/icons';

export default function Home() {

    const style = {
height: 40,
 width: 40,
 lineHeight: '40px',
 borderRadius: 50,
 backgroundColor: '#2e4053 ',
 color: '#fff',
 textAlign: 'center',
 fontSize: 14,
      };


  const [data, setdata] = useState([]);
  const Key = process.env.REACT_APP_KEY

  const NewsApi = async () => {
    try {
      const res = await axios.get(
 `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${Key}`
      );
      setdata(res.data.results);
    } catch (error) {
      console.log(error);
      alert("error pls review your code");
    }
  };

  useEffect(() => {
    NewsApi();
  }, []);

  return (
      <div className="container">
    <div className="home_main">
 <div className="heading">
     <h2>Top Stories </h2>
 </div>
      <Row gutter={16}>
 {data.map((news) => (
   <Col md={24} xs={24} sm={12} lg={32}>
     {news.multimedia.map((img) => (
<>
<div className="home_news">
  <div className="news_details">
    <h2>{news.title}</h2>
    <p>{news.byline}</p>
    <p>Section: {news.section}</p>
    <p>Published: {moment(news.published).format("MMMM Do YYYY, h:mm:ss a") }</p>
    <p>{news.abstract}</p>
    <div className="More_btn">
      <a href={news.url} target="_blank" rel="noopener noreferrer">
      <Button>More</Button>
      </a>
      </div>
 
  </div>

  <div className="news_img">
    <Image
      className="news_img_home"
      src={img.url}
    />
  </div>
</div>

</>
     ))}
   </Col>
 ))}
      </Row>

      <BackTop duration={2500}>
      <div style={style}><UpOutlined /></div>
    </BackTop>
    </div></div>
  );
}
