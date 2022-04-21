import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import {Link} from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { toContainHTML } from '@testing-library/jest-dom/dist/matchers'
import {Cryptocurrencies, News, Loader} from '../components'

const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    
    if(isFetching) return <Loader />;


  return (
    <>
        <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
        <Row>
            <Col span={12}><Statistic title="Total Ctyptocurrencies" value={globalStats.total} /></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.exchanges)} /></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
            <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24Volume)} /></Col>
            <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
        </Row>
        <div className='home-heading-container'>
            <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
            <Typography.Title level={3} className='show-more'>
                <Link to="/cryptocurrencies">Show More</Link>
            </Typography.Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className='home-heading-container'>
            <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>
            <Typography.Title level={3} className='show-more'>
                <Link to="/cryptocurrencies">Show More</Link>
            </Typography.Title>
        </div>
        <Cryptocurrencies simplified/>
    </>
  )
}

export default Homepage