import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPet, deleteList, createPet, updatePetList } from "../API/Api";
import Tablepagination from "../Pagination/Tablepagination";
import { fillTextSelector } from "../redux/slice";

export const SampleFilltext = () => {
  const dispatch = useDispatch();

  const { fillText } = useSelector(fillTextSelector);
  const [search, setSearch] = useState();
  const [form, setForm] = useState({ id: "", name: "", status: "" });

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  // const [value, setValue] = useState()

  useEffect(() => {
    dispatch(getPet(search));
  }, [search]);

  let value = fillText;
console.log("value",value);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // const currentRecords = value?.slice(indexOfFirstRecord, indexOfLastRecord);
  // const nPages = Math.ceil(value?.length / recordsPerPage);
  // console.log("currentRecords",currentRecords);
  let reqData = {
    // "id":Math.floor((Math.random()*100)+1),
    id: form.id,
    category: {
      id: form.id,
      name: form.name,
    },
    name: form.name,
    photourls: ["string"], 
    tags: [
      {
        id: form.id,
        name: form.name,
      },
    ],
    status: form.status,
  };

  const addpet = () => {
    dispatch(createPet(reqData));
    clearForm();
  };
  const editPet = (val) => {
    setForm(val);
  };
  const updatePet = () => {
    dispatch(updatePetList(form));
  };
  const deletePet = (id) => {
    dispatch(deleteList(id));
  };
  const clearForm = () => {
    setForm({ id: "", name: "", status: "" });
  };
  const handleInput = (e) => {
    let myData = { ...form };
    myData[e.target.name] = e.target.value;
    setForm(myData);
  };
  const handleCheck = (e) => {
    let myUser = { ...search };
    myUser[e.target.value] = e.target.checked;
    setSearch(myUser);
  };
  return (
    <div>
      <h1>Swagger API </h1>
      <form action="">
        Id :
        <input
          type="number"
          placeholder="Enter id"
          value={form.id}
          name="id"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        Name:{" "}
        <input
          type="text"
          placeholder="Breed type"
          value={form.name}
          name="name"
          onChange={(e) => {
            handleInput(e);
          }}
        />
        Status:{" "}
        <input
          type="text"
          placeholder="available , pending , sold"
          name="status"
          value={form.status}
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <button type="button" onClick={addpet}>
          Add
        </button>
        <button type="button" onClick={updatePet}>
          Update
        </button>
      </form>
      <div>
        <p>Total pets :{value.length}</p>
        <input
          type="checkbox"
          value="available"
          name="status"
          onChange={(e) => {
            handleCheck(e);
          }}
        />
        Availble
        <input
          type="checkbox"
          value="pending"
          name="status"
          onChange={(e) => {
            handleCheck(e);
          }}
        />
        Pending
        <input
          type="checkbox"
          value="sold"
          name="status"
          onChange={(e) => {
            handleCheck(e);
          }}
        />
        Sold
        { value?.length >= 0 ? (
          <table border="1px ">
            <thead>
              <tr>
                <th>S.No</th>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { value?.map((val, i) => {
                return (
                  <>
                    <tr>
                      <td>{i + 1}</td>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.status}</td>
                      <td>
                        <button
                          onClick={() => {
                            editPet(val);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            deletePet(val.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        ) : (
          "Loading...."
        )}
        {/* <Tablepagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        /> */}
      </div>
    </div>
  );
};
export default SampleFilltext;

  {/* <div class="row">
            <div class="col-sm-3 col-md-3 col-xl-3 col-lg-3 col-xs-12">
              <div class="selected-participants-card shadow">
                <div class="submitted-results-card-profile">
                  <img src="../images/profile/femaleavatar.png" alt="profile" />
                  <p>5 <i class="fas fa-star"></i></p>
                </div>
                <div class="bookmark-card-name-work-details">
                  <h2>Shelly K</h2>
                  <hr />
                  <div class="contest-title">
                    <h5>COVID-19 Healthcare APP challenge</h5>
                  </div>
                  <div class="contest-short-details">
                    <p>
                      Economic and social circumstances, access to testing and
                      treatment, and underlying health conditions are just a few
                      of the hurdles many underserved communities face. What if
                      you could build an app that made a difference?......
                    </p>
                  </div>
                  <div class="see-more-btn">
                    <a href="../MasteJudges/viewSingleAnswer.html">See More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 col-xl-3 col-lg-3 col-xs-12">
              <div class="selected-participants-card shadow">
                <div class="submitted-results-card-profile">
                  <img src="../images/profile/femaleavatar.png" alt="profile" />
                  <p>4.5 <i class="fas fa-star"></i></p>
                </div>
                <div class="bookmark-card-name-work-details">
                  <h2>Shelly K</h2>
                  <hr />
                  <div class="contest-title">
                    <h5>COVID-19 Healthcare APP challenge</h5>
                  </div>
                  <div class="contest-short-details">
                    <p>
                      Economic and social circumstances, access to testing and
                      treatment, and underlying health conditions are just a few
                      of the hurdles many underserved communities face. What if
                      you could build an app that made a difference?......
                    </p>
                  </div>
                  <div class="see-more-btn">
                    <a href="../MasteJudges/viewSingleAnswer.html">See More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 col-xl-3 col-lg-3 col-xs-12">
              <div class="selected-participants-card shadow">
                <div class="submitted-results-card-profile">
                  <img src="../images/profile/femaleavatar.png" alt="profile" />
                  <p>4.5 <i class="fas fa-star"></i></p>
                </div>
                <div class="bookmark-card-name-work-details">
                  <h2>Shelly K</h2>
                  <hr />
                  <div class="contest-title">
                    <h5>COVID-19 Healthcare APP challenge</h5>
                  </div>
                  <div class="contest-short-details">
                    <p>
                      Economic and social circumstances, access to testing and
                      treatment, and underlying health conditions are just a few
                      of the hurdles many underserved communities face. What if
                      you could build an app that made a difference?......
                    </p>
                  </div>
                  <div class="see-more-btn">
                    <a href="../MasteJudges/viewSingleAnswer.html">See More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 col-xl-3 col-lg-3 col-xs-12">
              <div class="selected-participants-card shadow">
                <div class="submitted-results-card-profile">
                  <img src="../images/profile/femaleavatar.png" alt="profile" />
                  <p>4 <i class="fas fa-star"></i></p>
                </div>
                <div class="bookmark-card-name-work-details">
                  <h2>Shelly K</h2>
                  <hr />
                  <div class="contest-title">
                    <h5>COVID-19 Healthcare APP challenge</h5>
                  </div>
                  <div class="contest-short-details">
                    <p>
                      Economic and social circumstances, access to testing and
                      treatment, and underlying health conditions are just a few
                      of the hurdles many underserved communities face. What if
                      you could build an app that made a difference?......
                    </p>
                  </div>
                  <div class="see-more-btn">
                    <a href="../MasteJudges/viewSingleAnswer.html">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div class="row">
            <div class="col-sm-3 col-md-3 col-xl-3 col-lg-3 col-xs-12">
              <div class="selected-participants-card shadow">
                <div class="submitted-results-card-profile">
                  <img src="../images/profile/femaleavatar.png" alt="profile" />
                  <p>3 <i class="fas fa-star"></i></p>
                </div>
                <div class="bookmark-card-name-work-details">
                  <h2>Shelly K</h2>
                  <hr />
                  <div class="contest-title">
                    <h5>COVID-19 Healthcare APP challenge</h5>
                  </div>
                  <div class="contest-short-details">
                    <p>
                      Economic and social circumstances, access to testing and
                      treatment, and underlying health conditions are just a few
                      of the hurdles many underserved communities face. What if
                      you could build an app that made a difference?......
                    </p>
                  </div>
                  <div class="see-more-btn">
                    <a href="../MasteJudges/viewSingleAnswer.html">See More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 col-xl-3 col-lg-3 col-xs-12">
              <div class="selected-participants-card shadow">
                <div class="submitted-results-card-profile">
                  <img src="../images/profile/femaleavatar.png" alt="profile" />
                  <p>3 <i class="fas fa-star"></i></p>
                </div>
                <div class="bookmark-card-name-work-details">
                  <h2>Shelly K</h2>
                  <hr />
                  <div class="contest-title">
                    <h5>COVID-19 Healthcare APP challenge</h5>
                  </div>
                  <div class="contest-short-details">
                    <p>
                      Economic and social circumstances, access to testing and
                      treatment, and underlying health conditions are just a few
                      of the hurdles many underserved communities face. What if
                      you could build an app that made a difference?......
                    </p>
                  </div>
                  <div class="see-more-btn">
                    <a href="../MasteJudges/viewSingleAnswer.html">See More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 col-xl-3 col-lg-3 col-xs-12">
              <div class="selected-participants-card shadow">
                <div class="submitted-results-card-profile">
                  <img src="../images/profile/femaleavatar.png" alt="profile" />
                  <p>2 <i class="fas fa-star"></i></p>
                </div>
                <div class="bookmark-card-name-work-details">
                  <h2>Shelly K</h2>
                  <hr />
                  <div class="contest-title">
                    <h5>COVID-19 Healthcare APP challenge</h5>
                  </div>
                  <div class="contest-short-details">
                    <p>
                      Economic and social circumstances, access to testing and
                      treatment, and underlying health conditions are just a few
                      of the hurdles many underserved communities face. What if
                      you could build an app that made a difference?......
                    </p>
                  </div>
                  <div class="see-more-btn">
                    <a href="../MasteJudges/viewSingleAnswer.html">See More</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 col-md-3 col-xl-3 col-lg-3 col-xs-12">
              <div class="selected-participants-card shadow">
                <div class="submitted-results-card-profile">
                  <img src="../images/profile/femaleavatar.png" alt="profile" />
                  <p>2 <i class="fas fa-star"></i></p>
                </div>
                <div class="bookmark-card-name-work-details">
                  <h2>Shelly K</h2>
                  <hr />
                  <div class="contest-title">
                    <h5>COVID-19 Healthcare APP challenge</h5>
                  </div>
                  <div class="contest-short-details">
                    <p>
                      Economic and social circumstances, access to testing and
                      treatment, and underlying health conditions are just a few
                      of the hurdles many underserved communities face. What if
                      you could build an app that made a difference?......
                    </p>
                  </div>
                  <div class="see-more-btn">
                    <a href="../MasteJudges/viewSingleAnswer.html">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}