import React, { useState,useEffect } from "react";
import "./create.scss";
import { AllcollectionCategory } from "../../redux/actions/user-create-collection";
import { useDispatch } from "react-redux";
import { Dropdown, DropdownButton } from 'react-bootstrap';

export const Create = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState('');
  const [allcategory, setAllcategory] = useState();
  const [selectedCategory, setSelectedCategory] = useState("Select Category");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Collaction = await dispatch(AllcollectionCategory());
        if (Collaction) {
          setAllcategory(Collaction);
        }
      } catch (err) {}
    };
    fetchData();
  }, []);

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="create_wrp">
      <div className="container-fluid">
        <div className="create_inner">
          <h1 className="text-center">Create A New NFT</h1>
          <div className="create_form_wrp mb-5">
            <form>
              <div className="row">
                <div className="col-lg-5 col-md-12 create_form_lft_wrp">
                  <label className="form_input_wrp">
                    <input type="file" className="d-none"  onChange={handleChange} />
                    <div>
                      {file === "" ? (
                        <>
                        fsgrh
                        </>
                      ):(
                        <>
                        <img src={file} />
                        </>
                      )

                      }
                    </div>
                    
                  </label>
                </div>
                <div className="col-lg-7 col-md-12 create_form_right_wrp">
                  <div className="create_right">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="email"
                        className="form-control"
                        id="title"
                        placeholder="Enter item title"
                      />
                      <span
                        style={{
                          color: "red",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                       error
                      </span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        type="email"
                        className="form-control"
                        id="description"
                        placeholder="Type item description"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input
                        type="email"
                        className="form-control"
                        id="price"
                        placeholder="0 ETH"
                      />
                        <span
                        style={{
                          color: "red",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                       error
                      </span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="royalties">Royalties *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="royalties"
                        placeholder="10"
                      />
                    </div>
                    <div className="form-group category_wrp">
                      <label htmlFor="royalties">Category *</label>
                      <Dropdown>  {/* onSelect={changecategory} */}
                          <Dropdown.Toggle
                            variant="secondry"
                           className=""
                            id="dropdown-basic"
                          >
                           {selectedCategory}
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item disabled={true} eventKey="">
                              Select Category
                            </Dropdown.Item>
                            {allcategory?.map((val , i) => {
                                return (
                                  <>
                                    <Dropdown.Item
                                      key={i}
                                      onClick={() => setSelectedCategory(val.name)}
                                      eventKey={val._id}
                                    >
                                      {val.name}
                                    </Dropdown.Item>
                                  </>
                                );
                            })}
                          </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="submit_wrp" >
                            <button type="submit"   >Create Item</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
