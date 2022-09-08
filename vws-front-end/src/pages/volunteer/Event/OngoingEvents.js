import React, { useEffect,useState } from 'react';
import MapFormPopUp from './MapFormPopUp';
import JoinEventForm from './JoinEventForm';
import ConfirmPopUp from '../../../utilities/PopUps/ConfirmPopUp';
// for remove box shadow
import { Paper } from "@material-ui/core";
import MaterialTable from "material-table";
// services
import { getOngoingEvents } from './../../../services/eventServices/eventService';


export default function OngoingEvents() {
  
  
  


    useEffect(() => {
        checkValidate();
        getOngoingEventDetails();
    }, []);

    const checkValidate = async () => {
        const y = localStorage.getItem("USER_KEY");
        if (!y) {
            window.location.href = "/";
        }
    };

    const getOngoingEventDetails = async () => {
      const res = await getOngoingEvents();
      // console.log(res.data);
      setOnGoingEventData(res.data);
    };

    const [onGoingEventData, setOnGoingEventData] = useState([]);
    const [selected, setSelected] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState({});

    return (
        <>
        
            <div className="container-fluid calculated-bodywidth" style={{}} id="bla">
                

                <div className="row gutters mt-3">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="card h-100" id="contentcard">
                            <div className="card-body ">
                            <h5>Ongoing Events</h5><br></br>
                            <MaterialTable
                    components={{
                      Container: (props) => <Paper {...props} elevation={0} />,
                    }}
                    options={{ actionsColumnIndex: -1 }}
                    title="Ongoing Events"
                    columns={[
                      {
                        field: "eventId",
                        title: "EVENT ID",
                        
                      },
                      {
                        field: "category",
                        title: "CATEGORY",
                      },
                      { field: "name", title: "COORDINATOR" },
                      
                      {
                        field: "startDate",
                        title: "STARTED ON",
                        minWidth: "150px",
                      },
                      {
                        field: "endDate",
                        title: "ENDS ON",
                        minWidth: "150px",
                      },
                      {
                        field: "noOfVolunteers",
                        title: "NO OF MEMBERS",
                      },
                      
                    ]}
                    data={onGoingEventData}
                    actions={[
                      {
                        
                        icon: () => {
                          return (
                            <button
                              type="button"
                              class="btn"
                              data-toggle="modal"
                              data-target="#CoordinateEventForm"
                              style={{
                                backgroundColor: "#2596BE",
                                width: "6rem",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              View
                            </button>
                          );
                        },
                        onClick: (event, rowData) => {
                          setSelectedEvent(rowData);
                          setSelected(true);
                        },
                        tooltip: "Coordinate Event",
                      },

                      {
                        
                        icon: () => {
                          return (
                            <button
                              type="button"
                              class="btn"
                              style={{
                                backgroundColor: "#96BE25",
                                width: "6rem",
                                border: "none",
                                marginRight: 0,
                              }}
                            >
                              Join
                            </button>
                          );
                        },
                        // onClick: (event, rowData) => {
                        //   setSelectedProject(rowData);
                        //   setSelected(true);
                        // },
                        tooltip: "Project Details",
                      },
                      
                    ]}

                    

                    

                    
                  />
                  {/* {selected && (
          // <CoordinateEventForm setSelected={setSelected} data={coordinateEventToProject}/>
        )} */}
                            
                                
                                <JoinEventForm />
                                <MapFormPopUp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
