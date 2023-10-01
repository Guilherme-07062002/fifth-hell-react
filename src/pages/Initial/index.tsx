import { useSelector, useDispatch } from "react-redux";
import { RootState, setStarted } from "@/store";
import { Home, Scenario } from "@/pages";
import { LoadingScreen } from "../Loading";
import { setLoading } from "@/store";
import { useEffect } from "react";

export const Initial = () => {
  const { isLoading, started } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        dispatch(setLoading(false));
        dispatch(setStarted(true));
      }, 3000);
    }
  }, [isLoading, dispatch]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (!started && !isLoading) {
    return <Home />;
  }

  return <Scenario />;
};
