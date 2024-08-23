import TemperatureChart from "@/components/TemperatureChart";
import HumidityChart from "@/components/HumidityChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-medium text-lg">Data From Today</h1>
      <div className="w-full max-lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 pt-12">
        <TemperatureChart />
        <HumidityChart />
      </div>
    </main>
  );
}
