const ShimmerRow = () => {
  return (
    <>
      <tr>
        <td className="border-2 border-solid border-[#00000039] "></td>
        <td className="border-2 border-solid border-[#00000039] "></td>
        <td className="border-2 border-solid border-[#00000039] "></td>
        <td className="border-2 border-solid border-[#00000039] "></td>
        <td className="border-2 border-solid border-[#00000039] "></td>
        <td className="border-2 border-solid border-[#00000039] "></td>
      </tr>
    </>
  );
};

const Shimmer = () => {
  return (
    <>
      <h2 className="my-2 text-center uppercase font-bold text-xl text-[#0000000c]">
        XXXXXX
      </h2>
      <table className="w-[60rem] bg-[#80808018] mx-auto h-[40rem] border-2 border-solid border-[#0000001d] ">
        <tbody>
          <ShimmerRow />
          <ShimmerRow />
          <ShimmerRow />
          <ShimmerRow />
          <ShimmerRow />
        </tbody>
      </table>
    </>
  );
};
export default Shimmer;
