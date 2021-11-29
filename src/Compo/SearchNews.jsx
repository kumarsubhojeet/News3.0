import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import axios from "axios";
import moment from 'moment'
import { Row, Col, Image , Button , BackTop  } from "antd";
import {UpOutlined} from '@ant-design/icons';
import {useParams } from'react-router-dom'

export default function SearchNews() {

    let {name} = useParams()

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
  const Key = "0amjT1mFx6UYAAHwNaxEti1MF2asAWeN";

  const NewsApi = async () => {
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${name}&api-key=${Key}`
      );
      setdata(res.data.response.docs);
    } catch (error) {
      console.log(error);
      alert("error pls review your code");
    }
  };

  useEffect(() => {
    NewsApi();
  }, [name]);

  return (
      <div className="container">
    <div className="home_main">
        <div className="heading">
            <h2>Search {name} News </h2>
        </div>
      <Row >
        {data.map((news) => (
          <Col md={24} xs={24} sm={12} lg={32}>
           
<>
              <div className="home_news">
                <div className="news_details_search">
                  <h2>{news.headline.main}</h2>
                  <p>Section: {news.section_name}</p>
                  <p>Published: {moment(news.pub_date).format("MMMM Do YYYY, h:mm:ss a") }</p>
                  <p>{news.lead_paragraph}</p>
                  <div className="More_btn">
                    <a href={news.web_url} target="_blank" rel="noopener noreferrer">
                    <Button>More</Button>
                    </a>
                    </div>
               
                </div>

                <div className="news_img">
                {/* {
                   
                    news.multimedia.map(immg=>(
                      <Image
                    className="news_img_home"
                    src={immg.legacy.xlarge}
                  />
                    ))
                   
                  } */}
                </div>
              </div>

</>

          </Col>
        ))}
      </Row>

      <BackTop duration={2500}>
      <div style={style}><UpOutlined /></div>
    </BackTop>
    </div>
    </div>
  );
}
