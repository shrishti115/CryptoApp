import millify from "millify";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Card, Row, Col, Input } from "antd";

function Cryptocurrencies(props) {
  const count = props.simplified ? 10 : 100;
  console.log(count);
  console.log(props.simplified);
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);

  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  return (
    <>
      {!props.simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => {
              const filteredData = cryptosList?.data?.coins.filter((coin) =>
                coin.name.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setCryptos(filteredData);
            }}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Cryptocurrencies;
