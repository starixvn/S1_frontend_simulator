import { useDispatch, useSelector } from "react-redux";
import {
  restartSabaPlusStore,
  handleChangeState,
  updateDisplayData,
  updateCurrentState,
} from "../store/slices/sabaPlusSlice";
import { sabaPlusLookup } from "../helper/sabaPlusHelper";
import { useTypedDispatch, useTypedSelector } from "../store";
type Props = {
  headerText: string;
  handleClick: (button: string) => void;
};

const SabaPlusGroupAutoButton = ({ headerText }: Props) => {
  const dispatch = useTypedDispatch();
  const userId = useTypedSelector((state) => state.userInfo.userId);
  const vendorOptions = useTypedSelector((state) => state.sabaPlus.vendorOptions);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const onAutoClickHandle = async (keys) => {
    if (!userId) {
      alert("Please insert User Id then click save");
      return;
    }
    dispatch(
      restartSabaPlusStore({
        vendorOptions: {
          ...vendorOptions
        },
      })
    );
    for (let i = 0; i < keys.length; i++) {
      const dataSample = sabaPlusLookup[keys[i]]?.getSampleData();
      const response = await sabaPlusLookup[keys[i]]?.callApi(dataSample);
      dispatch(updateCurrentState({ type: keys[i], retryId: null }));
      dispatch(
        updateDisplayData({
          type: keys[i],
          request: dataSample,
          response: response,
        })
      );

      if (response.ErrorCode !== 0) {
        return;
      }
      dispatch(handleChangeState(keys[i]));
      await delay(1000);
    }
  };

  return (
    <div className="button-group">
      <h4 className="header-text">{headerText}</h4>
      <button
        className={`betting-btn next`}
        onClick={() => onAutoClickHandle(["placeBet", "endGame"])}
      >
        Auto Bet
      </button>
    </div>
  );
};

export default SabaPlusGroupAutoButton;
