import { FC, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

export const A: FC = () => {
  console.log("render A");

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log("mount");
    const removeListner = history.listen((_, action) => {
      const isState = (val: any): val is { state: string } => {
        return val.state !== undefined;
      };
      if (isState(location.state) && action === "POP") {
      }
    });
    return () => {
      console.log("unmount");
      removeListner();
    };
  }, []);

  const toTopHandler = () => {};
  const toBHandler = () => {
    history.push("/b", { state: "a" });
  };
  const toCHandler = () => {
    history.push("/c", { state: "a" });
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
      history.replace("/a", { ...location.state, addition: "state" });
    }
  };

  return (
    <div>
      <h1>This is Page A.</h1>

      <div className="flex flex-col">
        <div className="btn-group">
          <button className="btn" onClick={toTopHandler}>
            to Top
          </button>
          <button className="btn" onClick={toBHandler}>
            to B
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
