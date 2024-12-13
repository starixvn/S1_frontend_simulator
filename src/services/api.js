//@ts-nocheck
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const getBetDetailApi = async (lastVersionKey) => {
  try {
    var params = new URLSearchParams();
    params.append("vendor_id", "DummyId");
    params.append("version_key", lastVersionKey);

    const response = await axios.post(
      `${apiUrl}/api/SabaSport/GetBetDetail`,
      params
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateBetDetailApi = async (rawTicket) => {
  try {
    const ticket = JSON.parse(rawTicket);
    ticket.islive = ticket.islive ?? '';
    ticket.betfrom = ticket.betfrom ?? '';
    ticket.isLucky = ticket.isLucky ?? '';
    ticket.bet_team = ticket.bet_team ?? '';
    ticket.ba_status = ticket.ba_status ?? '';
    ticket.sportname = ticket.sportname ?? [];
    ticket.leaguename = ticket.leaguename ?? [];
    ticket.tokenmoney = ticket.tokenmoney ?? '';
    ticket.bettypename = ticket.bettypename ?? [];
    ticket.customInfo1 = ticket.customInfo1 ?? '';
    ticket.customInfo2 = ticket.customInfo2 ?? '';
    ticket.customInfo3 = ticket.customInfo3 ?? '';
    ticket.customInfo4 = ticket.customInfo4 ?? '';
    ticket.customInfo5 = ticket.customInfo5 ?? '';
    ticket.match_datetime = ticket.match_datetime ?? '';
    ticket.settlement_time = ticket.settlement_time ?? '';
    ticket.ParlayData = ticket.ParlayData ?? {};
    const response = await axios.post(
      `${apiUrl}/api/SabaSport/UpdateBetDetail`,
      ticket,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};


export const placeBetParlayApi = async (betData) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/SabaSport/PlaceBetParlay`,
      betData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const placeBetApi = async (betData) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/SabaSport/PlaceBet`,
      betData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const confirmBetParlayApi = async (betData) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/SabaSport/ConfirmBetParlay`,
      betData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const confirmBetApi = async (betData) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/SabaSport/ConfirmBet`,
      betData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const canCelBetApi = async (betData) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/SabaSport/CancelBet`,
      betData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getBalanceApi = async (data) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/SabaSport/getBalance`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const settleBetApi = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/api/SabaSport/settle`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const reSettleBetApi = async (data) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/SabaSport/resettle`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const unSettleBetApi = async (data) => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/SabaSport/unsettle`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
