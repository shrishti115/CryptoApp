
import {Button, Menu, Typography, Avatar} from 'antd'; 
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';


function Navbar(){
    return(
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src="" size="large"/>
                <Typography.Title level={2} className="logo">
                    <Link to="/">CryptoTracker</Link>
                </Typography.Title>
            </div>
            {/* <Button className="menu-control-container">
                </Button> */}
                 <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to="/cryptocurrencies">CryptoCurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
            
            </Menu>
        </div>
       
    )
}

export default Navbar;