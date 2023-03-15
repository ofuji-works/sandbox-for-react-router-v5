import { FC } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const B: FC = () => {
  console.log("render B");

  const history = useHistory();
  const location = useLocation();

  const toTopHandler = () => {};
  const toAHandler = () => {
    history.push("/a", { state: "b" });
  };
  const toCHandler = () => {
    history.push("/c", { state: "b" });
  };

  const goBack = () => {
    history.goBack();
  };
  const goForward = () => {
    history.goForward();
  };

  const addState = () => {
    const isState = (val: any): val is { state: string } => {
      return val.state !== undefined;
    };
    if (isState(location.state)) {
      history.replace("/b", { ...location.state, addition: "state" });
    }
  };

  return (
    <div>
      <h1>This is Page B.</h1>

      <div className="flex flex-col">
        <div className="btn-group">
          <button className="btn" onClick={toTopHandler}>
            to Top
          </button>
          <button className="btn" onClick={toAHandler}>
            to A
          </button>
          <button className="btn" onClick={toCHandler}>
            to C
          </button>
        </div>
        <div className="">
          <p>{JSON.stringify(location.state)}</p>
        </div>
        <div className="btn-group">
          <button className="btn" onClick={goBack}>
            go back
          </button>
          <button className="btn" onClick={goForward}>
            go forward
          </button>
        </div>
        <button className="btn" onClick={addState}>
          add state
        </button>
      </div>
    </div>
  );
};
