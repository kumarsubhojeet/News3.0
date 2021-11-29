import React, { useState, useEffect } from "react";
import "../CSS/Home.css";
import axios from "axios";
import moment from 'moment'
import { Row, Col, Image , Button , BackTop  } from "antd";
import {UpOutlined} from '@ant-design/icons';
import {useParams} from'react-router-dom'


export default function Home() {

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
  const [img , setimg] = useState([]) ;

  const Key = "0amjT1mFx6UYAAHwNaxEti1MF2asAWeN";

  const NewsApi = async () => {
    try {
      const res = await axios.get(
        `https://api.nytimes.com/svc/topstories/v2/${name}.json?api-key=${Key}`
      );
      setdata(res.data.results);
    } catch (error) {
      console.log(error);

    }
  };

  useEffect(() => {
    NewsApi();
  }, [name]);

  return (
    <div className="container">
    <div className="home_main">
        <div className="heading">
            <h2>{name} News </h2>
        </div>
      <Row gutter={16}>
        {data.map((news) => (
          <Col md={24} xs={24} sm={12} lg={32}>
            
<>
              <div className="home_news">
                <div className="news_details">
                  <h2>{news.title ? news.title : "Not Found"}</h2>
                  <p>{!news.byline ? "News Not Available" :news.byline }</p>
                  <p>Section: {!news.section ? "News Not Available" : news.section}</p>
                  <p>Published: {!news.published ? "Not Available" : moment(news.published).format("MMMM Do YYYY, h:mm:ss a") } </p>
                  <p>{!news.abstract ? "News Not Available" :news.abstract}</p> */}
                 <div className="More_btn">
                    <a href={!news.url ? "News Not Available" : news.url} target="_blank" rel="noopener noreferrer">
                    <Button>More</Button>
                    </a>
                    </div>
               
                </div>

                <div className="news_img">
                  {
                    news.multimedia ?
                    news.multimedia.map(immg=>(
                      <Image
                    className="news_img_home"
                    src={immg.url}
                  />
                    ))
                    :"Image Not Found"
                  }
                </div>
              </div> 

</>
        
          </Col>
        ))}
      </Row>

      <BackTop duration={2500}>
      <div style={style}><UpOutlined /></div>
    </BackTop>
    </div></div>
  );
}
