import "./Simulator.css";

import SabaPlusPopup from "../SabaPlus/SabaPlusPopup";

import TabContext from "@mui/lab/TabContext";
import SimulatorTab from "../components/Tab/SimulatorTab";
import { restartSabaPlusStore } from "../store/slices/sabaPlusSlice";
import { updateTabValue } from "../store/slices/tabSlice";

import SabaPlusWrapper from "../SabaPlus/SabaPlusWrapper";
import { useTypedDispatch, useTypedSelector } from "../store";
import { TTab } from "../type/StateType";

const SabaPlus = () => {
  const dispatch = useTypedDispatch();
  const tabValue = useTypedSelector((state) => state.tabSimulator.tabValue);
  const handleChangeTab = (event: React.SyntheticEvent, newValue: TTab) => {
    dispatch(restartSabaPlusStore({}));
    dispatch(updateTabValue(newValue));
  };
  return (
    <div className="container-root saba-plus-root">
      <TabContext value={tabValue}>
        <SabaPlusPopup />
        <SabaPlusWrapper>
          <SimulatorTab
            handleChange={handleChangeTab}
            hasBetResultCheck
          ></SimulatorTab>
        </SabaPlusWrapper>
      </TabContext>
    </div>
  );
};

export default SabaPlus;
