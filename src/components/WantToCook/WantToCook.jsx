import { useState } from "react";

const WantToCook = ({ items, setCook }) => {
  const [prepare, setPrepare] = useState([]);
  // console.log(items);

  const handleCook = (p) => {
    const newPrepare = prepare.find((item) => item.recipe_id == p.recipe_id);
    if (!newPrepare) {
      setPrepare([...prepare, p]);
    }

    const newExist = items.filter((i) => i.recipe_id != p.recipe_id);
    setCook(newExist);
  };

  return (
    <div className="border border-[#28282833] rounded-xl w-full lg:max-w-[41%] text-center pb-5">
      <div className="px-10">
        <h3 className="text-xl lg:text-2xl p-5 font-semibold text-[#282828]">
          Want to cook: {items.length}
        </h3>
        <hr />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table text-[#878787]">
          <thead>
            <tr className="*:py-3 *:px-1 lg:*:py-4 lg:*:px-3">
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((i, index) => (
              <tr
                key={i.recipe_id}
                className="bg-[#28282808] w-full p-0 *:p-1 lg:*:py-4 lg:*:px-3 text-[12px] lg:text-sm"
              >
                <th className="text-[#282828CC]">{index + 1}</th>
                <td>{i.recipe_name}</td>
                <td>{i.preparing_time} Minutes</td>
                <td>
                  {i.calories} <br />
                  Calories
                </td>
                <td>
                  <button
                    onClick={() => handleCook(i)}
                    className="lg:py-3 py-2 px-2 lg:px-4 bg-[#0BE58A] hover:bg-[#34a073] duration-300 rounded-full font-bold text-black"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-10">
          <h3 className="text-xl lg:text-2xl p-6 font-semibold text-[#282828]">
            Currently cooking: {prepare.length}
          </h3>
          <hr />
        </div>
        <table className="table text-[#878787]">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {prepare.map((i, index) => (
              <tr key={i.recipe_id} className="bg-[#28282808] w-full">
                <th className="text-[#282828CC] pl-4">{index + 1}</th>
                <td>{i.recipe_name}</td>
                <td>{i.preparing_time} Minutes</td>
                <td className="pr-6">{i.calories} Calories</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WantToCook;
