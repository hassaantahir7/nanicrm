import { Link } from 'react-router-dom';
import { MoreVertical, ArrowRight } from 'lucide-react';
import DashboardCard from './DashboardCard';
import TaskList from './TaskList';
import Calendar from './Calendar';
import TopPerformance from './TopPerformance';
import Statistics from './Statistics';
import OrdersChart from './OrdersChart';
import AdvertisementBreakdown from './AdvertisementBreakdown';
import SalesChart from './SalesChart';

const Dashboard = () => {
  return (
    <div className="pl-0 lg:pl-64">
      <header className="flex justify-between items-center mb-6 bg-[#001242] mt-16 px-4 lg:mt-0 py-3 rounded-xl">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="p-2 rounded-lg bg-blue-900 bg-opacity-50">
          <ArrowRight className="w-5 h-5" />
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/profile">
          <DashboardCard title="My Profile" image="/myprofile.png" />
        </Link>
        <Link to="/branding">
          <DashboardCard title="Branding" image="/branding.png" />
        </Link>
        <Link to="/marketing">
          <DashboardCard title="Marketing" image="/Marketing.png" />
        </Link>
        <Link to="/website">
          <DashboardCard title="Website" image="/website.png" />
        </Link>
        <Link to="/tasks">
          <DashboardCard title="Daily Task" image="/dailytask.png" />
        </Link>
        <Link to="/report">
          <DashboardCard title="Report" image="/report.png" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-1">
          <TaskList />
        </div>
        <div className="lg:col-span-1">
          <Calendar />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#001242] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">$22,880.50</h3>
                <p className="text-sm text-gray-400">Won from 18 Deals</p>
              </div>
              <span className="text-purple-500">
                <MoreVertical className="w-5 h-5" />
              </span>
            </div>
            <div className="mt-4 w-full bg-white rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '67%' }}></div>
            </div>
          </div>

          <div className="bg-[#001242] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">$1,096.30</h3>
                <p className="text-sm text-gray-400">Daily average income</p>
              </div>
              <span className="text-orange-500">
                <MoreVertical className="w-5 h-5" />
              </span>
            </div>
            <div className="mt-4 w-full bg-white rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '18%' }}></div>
            </div>
          </div>

          <div className="bg-[#001242] rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">778</h3>
                <p className="text-sm text-gray-400">Campaign sent</p>
              </div>
              <span className="text-yellow-500">
                <MoreVertical className="w-5 h-5" />
              </span>
            </div>
            <div className="mt-4 w-full bg-white rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <TopPerformance />
        <Statistics />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <OrdersChart />
        <div className="bg-[#001242] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Traffic Sources</h3>
            <MoreVertical className="w-5 h-5" />
          </div>
          <div className="relative">
            <div className="w-full aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border-8 border-red-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm font-medium">Traffic</div>
                    <div className="text-sm text-gray-400">Sources</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-sm">40% Social Media</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-sm">25% Paid Search</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm">15% Organic Search</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">20% Direct Traffic</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <AdvertisementBreakdown />
        <SalesChart />
      </div>
    </div>
  );
}

export default Dashboard;