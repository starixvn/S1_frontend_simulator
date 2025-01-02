import { useEffect, useState } from "react";
import { getBalanceApi } from "../../services/api";
import { GetBalance } from "../../constant/Data.json";
import {
  setUserInfo,
  restartUserInfoStore,
} from "../../store/slices/userInfoSlice";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { useTypedDispatch, useTypedSelector } from "../../store";

const operatorKey = import.meta.env.VITE_SABA_SPORT_OPERATOR_KEY;

const UserInfo = () => {
  const dispatch = useTypedDispatch();
  const { userId, balance } = useTypedSelector((state) => state.userInfo);
  const [userNameInput, setUserNameInput] = useState("");
  

  useEffect(() => {
    const validUserId = userId || localStorage.getItem("saba-simulator-userId");

    if (validUserId) {
      const fetchBalance = async () => {
        GetBalance.message.UserId = validUserId;
        GetBalance.key = operatorKey;
        const res = await getBalanceApi(GetBalance);
        if (res.status === "0") {
          dispatch(
            setUserInfo({
              userId: res.userId,
              balance: res.balance,
            })
          );

          return;
        }
      };
      fetchBalance();
    }
  });

  const handleOnSave = async () => {
    GetBalance.message.UserId = userNameInput;

    const response = await getBalanceApi(GetBalance);
    if (response.status === "0") {
      dispatch(
        setUserInfo({ userId: response.userId, balance: response.balance })
      );
      localStorage.setItem("saba-simulator-userId", response.userId);
      return;
    }
    alert(response?.msg || "Something went wrong");
  };
  const handleOnChangeAccount = () => {
    localStorage.removeItem("saba-simulator-userId");
    setUserNameInput("");
    dispatch(restartUserInfoStore());
  };

  return (
    <div className="form-container">
      {Boolean(userId) ? (
        <>
          <label htmlFor="username" className="icon-username">
            {userId}{" "}
            <button onClick={handleOnChangeAccount}>
              <ChangeCircleIcon></ChangeCircleIcon>
            </button>
          </label>
          <label className="icon-username">balance: {balance}</label>
        </>
      ) : (
        <>
          <div className="form-group">
            <label htmlFor="user-id" className="icon-username">
              User Info
            </label>
            <input
              placeholder="User ID"
              type="text"
              name="user-id"
              id="user-id"
              value={userNameInput}
              onChange={(e) => setUserNameInput(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-save" onClick={handleOnSave}>
            Save
          </button>
        </>
      )}
    </div>
  );
};

export default UserInfo;
