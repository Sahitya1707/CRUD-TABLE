import { TableData, TableHeading } from "./components/Table";

export default function Home() {
  return (
    <section className="">
      {/* Need to add filter and all those features will be over here */}
      <div>
        <table className="border-2 border-solid border-black mx-auto">
          <thead>
            <tr className="border-2 border-solid border-black ">
              <TableHeading tableHeading="First Name" />
              <TableHeading tableHeading="Last Name" />
              <TableHeading tableHeading="Image" />
              <TableHeading tableHeading="Email" />
              <TableHeading tableHeading="Phone Number" />
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableData tableData="Sahitya" />
              <TableData tableData="Neupane" />
              <TableData tableImg="/logo.png" imgDesc="image" />
              <TableData tableData="neupanesahitya1@gmail.com" />
              <TableData tableData="+1 (647) 9191-1596" />
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
