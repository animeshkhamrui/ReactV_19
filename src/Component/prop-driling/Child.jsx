import GrandChild from "./GrandChild";

const Child = ({ data }) => {
  return (
    <>
      Child Component
      <div>
        <GrandChild data={data} />
      </div>
    </>
  );
};

export default Child;
