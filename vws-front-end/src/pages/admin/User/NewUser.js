import React, { useState, useEffect } from "react";
import NewTable from "../../../utilities/Table/NewTable";
import RegisterNewUser from "./RegisterNewUser";
export default function NewUser() {
  useEffect(() => {
    checkValidate();
  }, []);

  const checkValidate = async () => {
    const y = localStorage.getItem("USER_KEY");
    if (!y) {
      window.location.href = "/";
    }
  };
  const [joinRequestsData, setJoinRequestsData] = useState([
    {
      id: "R001",
      name: "Chathura Manohara",
      nic: "998547521v",
      phone: "+94 75 025 1451",
      date: "2022 09 12",
      status: (
        <button
          type="button"
          id="submit"
          name="submit"
          className="btn mt-0"
          style={{
            backgroundColor: "#96BE25",
            border: "none",
            marginRight: "2px",
          }}
          // #96BE25,#BE4D25
          // onClick={handleSubmit}
        >
          Rejister
        </button>
      ),
    },
  ]);

  const [joinRequestsTableHead, setJoinRequestsTableHead] = useState([
    { accessor: "id", Header: "REQUEST ID" },
    { accessor: "name", Header: "NAME" },
    { accessor: "nic", Header: "NIC" },
    { accessor: "phone", Header: "PHONE" },
    { accessor: "date", Header: "DATE" },
    { accessor: "status", Header: "STATUS" },
  ]);
  return (
    <>
      <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
        <div className="row gutters mt-10">
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters">New User</div>
                <div className="row gutters ">line 1</div>
                <div className="row gutters">line 2</div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 ">
            <div className="card h-100" id="contentcard">
              <div className="card-body">
                <div className="row gutters ">
                  <h3 className="ml-3">Title</h3>
                </div>
                <div className="row gutters ">Content</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row gutters mt-3">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card h-100" id="contentcard">
              <div className="card-body ">
              <h5>New Users</h5>

                <NewTable
                  columns={joinRequestsTableHead}
                  data={joinRequestsData}                 
                />
              </div>
            </div>
          </div>
        </div>
        <RegisterNewUser />
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#registerUser"
        >
          Register
        </button>
      </div>
    </>
  );
}
