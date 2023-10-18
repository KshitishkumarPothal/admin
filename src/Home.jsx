import React from 'react';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart, Pie } from 'recharts';

import {RiExchangeDollarLine} from 'react-icons/ri'
import {FaRupeeSign} from 'react-icons/fa'
import {BiUpArrowAlt, BiDownArrowAlt} from 'react-icons/bi'

import {GiNotebook, GiWallet} from 'react-icons/gi'
import { BsFillHandbagFill} from 'react-icons/bs'



const Home = () => {

  const data = [
    {
      name: 'Jan',
      sell: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      sell: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      sell: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      sell: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      sell: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Jun',
      sell: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Jul',
      sell: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data2 = [
    { name: 'Buy', value: 400 },
    { name: 'Sub', value: 300 },
    { name: 'Back', value: 300 },
    
  ];
   
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


  return (
    <main className='main-container'>
      <div className='main-tittle'>
        <h3>
            DASHBOARD
        </h3>
      </div>

      <div className="main-cards">
        <div className="card">
            <div className="card-inner">
                <RiExchangeDollarLine className='card-icon'/>
            </div>
            <div className='card-detail'>  
                <h3>Earning</h3>
                <span className='amound'><FaRupeeSign />195K</span>
                <p className='grouth-up'> <BiUpArrowAlt /> <span className='growth1'>27.8%</span> In this month</p>

            </div>
            
          </div>
          <div className="card">
            <div className="card-inner">
                <GiNotebook className='card-icon'/>
            </div>
            <div className='card-detail'>  
                <h3>Order</h3>
                <span className='amound'><FaRupeeSign/>2.5K</span>
                <p className='grouth-down'><BiDownArrowAlt /> <span className='growth1'>2%</span> In this month</p>

            </div>
            
          </div>
          <div className="card">
            <div className="card-inner">
                <GiWallet className='card-icon'/>
            </div>
            <div className='card-detail'>  
                <h3>Balance</h3>
                <span className='amound'><FaRupeeSign/>2.5K</span>
                <p className='grouth-down'><BiDownArrowAlt /> <span className='growth1'>2%</span> In this month</p>

            </div>
            
          </div>
          <div className="card">
            <div className="card-inner">
                <BsFillHandbagFill className='card-icon'/>
            </div>
            <div className='card-detail'>  
                <h3>Total Sales</h3>
                <span className='amound'><FaRupeeSign />89K</span>
                <p className='grouth-up'><BiUpArrowAlt /> <span className='growth1'>11%</span> In this month</p>

            </div>
            
          </div>

      </div>


      <div className='chart'>

        <div className='bar'>
          <div className='bar-tittle'>
            <div className='head-left'>
              <h1>Overview</h1>
              <p>monthly target</p>

            </div>
            <div className='head-right'>
              <h4>Quantity <BiDownArrowAlt/></h4>

            </div>

          </div>
          <div className='bar-data'>
             
            <BarChart width={600} height={400} data={data}>
               <XAxis dataKey="name" />
               <Bar dataKey="sell" fill="#8884d8" />
               
               <Tooltip cursor={{fill: "#f0f3f8"}}/>
           </BarChart>

          </div>
       

        </div>

       <div className='pie'>
        <div className='heading'>
          <h1>customers</h1>
          <p>Customer that buy Product</p>
        </div>

        <div className='pic-data'>
        <PieChart width={400} height={400}>
          <Pie
            data={data2}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            
             >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          
        </PieChart>
        </div>

        </div>

      </div>

      
   
    
     {/* <ResponsiveContainer width="60%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <XAxis dataKey="name" />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>

        
      </ResponsiveContainer>

      

      <ResponsiveContainer width="20%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data2}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
             >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
       */}
    
    
    </main>
  )
}

export default Home

