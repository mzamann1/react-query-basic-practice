import Skeleton from "react-loading-skeleton";

const SkeletonStructure=() => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
      return (
        <div className="card" key={index}>
          <h3>
            <Skeleton key={1} />
          </h3>
          <p>
            <Skeleton />
          </p>
        </div>
      );
    });

    return <>{list}</>;
  }

  export default SkeletonStructure;