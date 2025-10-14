import CardList from "@/components/CardList";
import AppAreaChart from "@/components/charts/AppAreaChart";
import AppBarChart from "@/components/charts/AppBarChart";
import AppPieChart from "@/components/charts/AppPieChart";
import Todolist from "@/components/Todolist";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 gap-4 ">
      <div className=" bg-primary-foreground rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 p-4">
        <AppBarChart /></div>
      <div className=" bg-primary-foreground rounded-lg p-4">
        <CardList title="latestTransactions" /></div>
      <div className=" bg-primary-foreground rounded-lg p-4">
        <AppPieChart /></div>
      <div className=" bg-primary-foreground rounded-lg p-4">
        <Todolist /></div>
      <div className=" bg-primary-foreground rounded-lg p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart /></div>
      <div className=" bg-primary-foreground rounded-lg p-4">
        <CardList title="Popular Products" /></div>

    </div >
  );
}
