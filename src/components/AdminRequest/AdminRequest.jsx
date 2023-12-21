import React, { useState, useEffect } from "react";
import axios from "axios";
import RequestCard from "./RequestCard";
const AdminRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const getRequests = async () => {
      const res = await axios.get("http://localhost:8080/api/v1/admin/pending");
      setRequests(res.data.data);
    };
    getRequests();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {requests.map((account) => {
        return <RequestCard account={account} />;
      })}
    </div>
  );
};

export default AdminRequest;
