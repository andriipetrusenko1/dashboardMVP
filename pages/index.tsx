import { useState } from 'react';
import Head from 'next/head';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend, AreaChart, Area
} from 'recharts';

// Mock data for the dashboard
const weeklyContactsData = [
  { name: 'Mon', contacts: 12 },
  { name: 'Tue', contacts: 19 },
  { name: 'Wed', contacts: 15 },
  { name: 'Thu', contacts: 22 },
  { name: 'Fri', contacts: 28 },
  { name: 'Sat', contacts: 10 },
  { name: 'Sun', contacts: 8 },
];

const monthlyContactsData = [
  { name: 'Jan', contacts: 65 },
  { name: 'Feb', contacts: 59 },
  { name: 'Mar', contacts: 80 },
  { name: 'Apr', contacts: 81 },
  { name: 'May', contacts: 90 },
  { name: 'Jun', contacts: 125 },
  { name: 'Jul', contacts: 110 },
  { name: 'Aug', contacts: 95 },
  { name: 'Sep', contacts: 105 },
  { name: 'Oct', contacts: 115 },
  { name: 'Nov', contacts: 130 },
  { name: 'Dec', contacts: 140 },
];

const weeklyDealsData = [
  { name: 'Mon', deals: 5 },
  { name: 'Tue', deals: 8 },
  { name: 'Wed', deals: 6 },
  { name: 'Thu', deals: 9 },
  { name: 'Fri', deals: 12 },
  { name: 'Sat', deals: 4 },
  { name: 'Sun', deals: 3 },
];

const monthlyDealsData = [
  { name: 'Jan', deals: 25 },
  { name: 'Feb', deals: 28 },
  { name: 'Mar', deals: 35 },
  { name: 'Apr', deals: 40 },
  { name: 'May', deals: 45 },
  { name: 'Jun', deals: 55 },
  { name: 'Jul', deals: 50 },
  { name: 'Aug', deals: 48 },
  { name: 'Sep', deals: 52 },
  { name: 'Oct', deals: 58 },
  { name: 'Nov', deals: 62 },
  { name: 'Dec', deals: 70 },
];

const dealStagesData = [
  { name: 'Discovery', value: 45 },
  { name: 'Qualification', value: 38 },
  { name: 'Proposal', value: 25 },
  { name: 'Negotiation', value: 18 },
  { name: 'Closing', value: 12 },
];

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState('week');
  
  // Metrics data
  const metrics = {
    newContacts: {
      value: timeframe === 'week' ? 114 : 485,
      trend: '+12%',
      trendDirection: 'up'
    },
    newDeals: {
      value: timeframe === 'week' ? 47 : 198,
      trend: '+8%',
      trendDirection: 'up'
    },
    openDeals: {
      value: 138,
      trend: '+5%',
      trendDirection: 'up'
    },
    closedWon: {
      value: 28,
      trend: '+15%',
      trendDirection: 'up'
    },
    closedLost: {
      value: 12,
      trend: '-10%',
      trendDirection: 'down'
    },
    conversionRate: {
      value: '32%',
      trend: '+3%',
      trendDirection: 'up'
    },
    avgDealSize: {
      value: '$12,500',
      trend: '+5%',
      trendDirection: 'up'
    },
    avgSalesCycle: {
      value: '28 days',
      trend: '-2 days',
      trendDirection: 'up'
    }
  };

  // Helper component for stat cards
type StatCardProps = {
  title: string;
  value: number | string;
  trend: number | string;
  trendDirection: 'up' | 'down';
};

const StatCard = ({ title, value, trend, trendDirection }: StatCardProps) => (
  <div className="card stat-card">
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <div className="mt-2">
      {/* ... */}
    </div>
  </div>
);
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>CRM Performance Dashboard</title>
        <meta name="description" content="HubSpot CRM Performance Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Bar */}
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-800">CRM Performance Dashboard</h1>
            <div className="flex items-center space-x-4">
              <select 
                className="dropdown"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
              >
                <option value="week">Weekly</option>
                <option value="month">Monthly</option>
              </select>
              <button className="btn btn-primary flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="New Contacts" 
            value="114" 
            trend={+12%} 
            trendDirection={metrics.newContacts.trendDirection as 'up' | 'down'}
          />
          <StatCard 
            title="New Deals" 
            value={metrics.newDeals.value} 
            trend={metrics.newDeals.trend} 
           trendDirection={metrics.newContacts.trendDirection as 'up' | 'down'}
          />
          <StatCard 
            title="Open Deals" 
            value={metrics.openDeals.value} 
            trend={metrics.openDeals.trend} 
            trendDirection={metrics.newContacts.trendDirection as 'up' | 'down'} 
          />
          <StatCard 
            title="Conversion Rate" 
            value={metrics.conversionRate.value} 
            trend={metrics.conversionRate.trend} 
           trendDirection={metrics.newContacts.trendDirection as 'up' | 'down'}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Trends Chart */}
          <div className="card">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              {timeframe === 'week' ? 'Weekly' : 'Monthly'} Trends
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={timeframe === 'week' ? weeklyContactsData : monthlyContactsData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorContacts" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorDeals" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="contacts" 
                    name="New Contacts" 
                    stroke="#0ea5e9" 
                    fillOpacity={1} 
                    fill="url(#colorContacts)" 
                  />
                  <Area 
                    type="monotone" 
                    data={timeframe === 'week' ? weeklyDealsData : monthlyDealsData}
                    dataKey="deals" 
                    name="New Deals" 
                    stroke="#10b981" 
                    fillOpacity={1} 
                    fill="url(#colorDeals)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Deal Stages Chart */}
          <div className="card">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Deals by Stage</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={dealStagesData}
                  margin={{ top: 10, right: 30, left: 60, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  <Tooltip />
                  <Bar dataKey="value" name="Deals" fill="#0ea5e9" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Closed Won" 
            value={metrics.closedWon.value} 
            trend={metrics.closedWon.trend} 
            trendDirection={metrics.newContacts.trendDirection as 'up' | 'down'}
          />
          <StatCard 
            title="Closed Lost" 
            value={metrics.closedLost.value} 
            trend={metrics.closedLost.trend} 
            trendDirection={metrics.newContacts.trendDirection as 'up' | 'down'}
          />
          <StatCard 
            title="Average Deal Size" 
            value={metrics.avgDealSize.value} 
            trend={metrics.avgDealSize.trend} 
            trendDirection={metrics.newContacts.trendDirection as 'up' | 'down'}
          />
          <StatCard 
            title="Average Sales Cycle" 
            value={metrics.avgSalesCycle.value} 
            trend={metrics.avgSalesCycle.trend} 
            trendDirection={metrics.newContacts.trendDirection as 'up' | 'down'}
          />
        </div>
      </main>
    </div>
  );
}