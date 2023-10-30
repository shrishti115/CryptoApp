import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import "../../src/App.css";
import { useState } from "react";
import { useGetNewsQuery } from "../services/newsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Text, Title } = Typography;
const { Option } = Select;

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory,
    count: simplified ? 6 : 30,
  });
  const { data: cryptosList } = useGetCryptosQuery(100);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  if (!cryptoNews?.value) return "Loading...";

  return (
    <>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {cryptos?.map((currency) => (
              <Option key={currency.id} value={currency.name}>
                {currency.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}

      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    style={{ maxWidth: "200px", maxHeight: "100px" }}
                    src={
                      news?.image?.thumbnail?.contentUrl ||
                      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ffree%2520wallpaper%2F&psig=AOvVaw3Qbq5e7qQ5w8JbW9yKm4Z0&ust=1629685203928000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjCp8zRy_ICFQAAAAAdAAAAABAD"
                    }
                    alt="news"
                  />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Ffree%2520wallpaper%2F&psig=AOvVaw3Qbq5e7qQ5w8JbW9yKm4Z0&ust=1629685203928000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjCp8zRy_ICFQAAAAAdAAAAABAD"
                      }
                      alt="news"
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default News;
