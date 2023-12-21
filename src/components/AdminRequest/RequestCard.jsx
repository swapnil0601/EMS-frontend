import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const RequestCard = ({ account }) => {
  const { accountId, firstName, lastName } = account;

  const handleAcceptRequest = async (accountId) => {
    try {
      await axios.post("http://localhost:8080/api/v1/admin/accept", {
        accountId: accountId,
      });
      toast.success("Request accepted");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeclineRequest = async (accountId) => {
    try {
      await axios.post("http://localhost:8080/api/v1/admin/decline", {
        accountId,
      });
      toast.success("Request declined");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      key={accountId}
      className="admin-request-card m-4 p-4 border rounded-lg shadow-md"
    >
      <span className="font-semibold">
        {firstName} {lastName}
      </span>
      <div className="mt-2">
        <button
          onClick={() => handleAcceptRequest(accountId)}
          className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 mr-2 rounded"
        >
          Accept
        </button>
        <button
          onClick={() => handleDeclineRequest(accountId)}
          className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
