import React, { useState, useEffect } from "react";
import "./create.scss";
import { AllcollectionCategory } from "../../redux/actions/user-create-collection";
import { useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { toast } from "react-toastify";
import { createItemAction } from "../../redux";
import { useNavigate } from "react-router-dom";
import { routeMap } from "../../rout-map";
export const Create = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [attachment, setAttachment] = useState("");
  const [allcategory, setAllcategory] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [selectedCategory, setSelectedCategory] = useState({name: 'Select Category'});
  // const [usdAmount, setUsdAmount] = useState(0);
  const [errorAttach, setErrorAttach] = useState(false);
  const [isSubmited, setIsSubmitted] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const [collectionAddress, setCollectionAddress] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [Ipfs, SetIpfs] = useState();
  const [itemid, Setitemid] = useState("");
  const [error, setError] = useState({
    price: "",
    title: "",
    description: "",
    royalties: "",
    attachment: "",
    selectedCategory: "",
    nftType: "",
    nftCategory: "",
  });

  const network_id = 1;
  useEffect(() => {
    setCollectionAddress(
      network_id === process.env.REACT_APP_KLATYN_NETWORK_ID
        ? process.env.REACT_APP_KLYTN_USER_MINTABLE_ADD
        : process.env.REACT_APP_ETH_USER_MINTABLE_ADD
    );
    console.log(selectedCategory);
    const fetchData = async () => {
      try {
        const Collaction = await dispatch(AllcollectionCategory());
        if (Collaction) {
          setAllcategory(Collaction);
        }
      } catch (err) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {

    e.preventDefault();
    setIsSubmitted(true);
    let errorMsg1 = "";
    let errorMsg2 = "";
    let errorMsg3 = "";
    let errorMsg4 = "";
    const errorMsg5 = "";
    let errorMsg6 = "";
    let errorMsg7 = "";
    let errorMsg8 = "";
    if (attachment === "" || attachment === null || !attachment) {
      errorMsg1 = "Image can not be empty";
      setErrorAttach(true);
    } else if (attachment.size / 1024 / 1024 > 30) {
      errorMsg1 = "Please select file size not more than 30 MB";
      setErrorAttach(true);
      toast.error(
        "Please select file size not more than 30 MB with valid format(Image, MP3, MP4)",
        { appearance: "error", autoDismiss: true, theme: "colored", }
      );
    }
    if (title === "") {
      errorMsg2 = "Title can not be empty";
    }
    const regex = /^\d+(\.\d{1,2})?$/;
    const regex1 = /^(?:\d*\.\d{1,17}|\d+)$/;
    if (royalties === "") {
      errorMsg3 = "Royalties can not be empty";
    } else if (royalties > 90) {
      errorMsg3 = "Royalties can not set more than 90";
    } else if (royalties < 0) {
      errorMsg3 = "Royalties can not set less than 0";
    } else if (!regex.test(royalties)) {
      errorMsg3 =
        "Royalties can set only two decimal after a number, For example: 51.36";
    }
    if (price === "") {
      errorMsg7 = "Price can not be empty";
    } else if (price.length >= 19) {
      errorMsg7 = "Price should not more then 18 digit";
    } else if (price <= 0) {
      errorMsg7 = "Price must be greater than 0";
    } else if (!regex1.test(price)) {
      errorMsg7 = "Please enter correct value";
    }

    if (selectedCategory.name === "Select Category") {
      errorMsg6 = "Category can not be empty";
    }

    setError({
      ...error,
      title: errorMsg2,
      attachment: errorMsg1,
      royalties: errorMsg3,
      nftType: errorMsg4,
      nftCategory: errorMsg6,
      price: errorMsg7,
      isAgreementSignedErr: errorMsg8,
    });
    if (
      errorMsg1 === "" &&
      errorMsg2 === "" &&
      errorMsg3 === "" &&
      errorMsg4 === "" &&
      errorMsg5 === "" &&
      errorMsg6 === "" &&
      errorMsg7 === "" &&
      errorMsg8 === ""
    ) {
      createTeamHandler();
    }
  };
  const createTeamHandler = async () => {
    try {
      setIsSubmitted(true);
      const finalPropertyArr = [];
      const items = document.querySelectorAll(".property_field_wrp") || null;
      for (const item of items) {
        const key = item.getElementsByTagName("input")[0].value;
        const value = item.getElementsByTagName("input")[1].value;
        if (key || value) {
          finalPropertyArr.push({ key: key, value: value });
        }
      }

      const formData = new FormData();
      formData.append("description", description || "");
      let network = 1;
      if (network_id === process.env.REACT_APP_KLATYN_NETWORK_ID) {
        network = 2;
      }
      formData.append("title", title);
      formData.append("royalties", royalties || "");
      formData.append(
        "category_id",
        selectedCategory && selectedCategory._id ? selectedCategory._id : ""
      );
      formData.append(
        "nft_type",
        selectedCategory && selectedCategory.name
          ? selectedCategory.name.toLowerCase()
          : ""
      );

      formData.append("isLuxuryAuthReq", "false");
      formData.append("brand", "");
      formData.append("attachment", attachment || "");
      formData.append("network_id", network);
      formData.append("collection_address", collectionAddress);
      formData.append(
        "collectible_owner",
        "0x2aFB6ACFb8e84b93dE2B9eebf113cE63d5F1fb65"
      );

      window.onbeforeunload = function () {
        return "If you reload this page, your previous action will be repeated";
      };
      setHideCursor(true);
      setIsLoaded(false);

      const result = await dispatch(createItemAction(formData));
      if (result) {
        // SetIpfs(result.data);
        setIsSubmitted(false);
        // Setitemid(result.data._id);
        setIsLoaded(true);
        if (result && result.status) {
          toast.success("Item created successfully", {
            appearance: "success",
            autoDismiss: true,
            theme: "colored",
          });
          setIsModalVisible(true);
          setHideCursor(false);
          navigate(`${routeMap.Gallery}/${result.data._id}`);
        }
      } else {
        setIsSubmitted(false);
        setIsLoaded(true);
        window.onbeforeunload = null;
        setHideCursor(false);
      }
    } catch (err) {
      setIsSubmitted(false);
      setIsLoaded(true);
      window.onbeforeunload = null;
      setHideCursor(false);
      console.log(err);
    }
  };
  const inputClickHandler = (e) => {
    const { name, value } = e.target;
    // const regexImg = new RegExp("(.*?).(gif|jpe?g|png|webp|bmp|svg)$");
    switch (name) {
      case "attachment":
        if (value === "" || value === null || !value) {
          if (!attachment) {
            setError({ ...error, attachment: "can not be empty" });
          }
        } else {
          setError({ ...error, attachment: "" });
        }
        if (
          e.target.files &&
          e.target.files[0] &&
          !e.target.files[0]?.type?.startsWith("image/") &&
          !e.target.files[0]?.type?.startsWith("video/mp4") &&
          !e.target.files[0]?.type?.startsWith("audio/")
        ) {
          setError({
            ...error,
            attachment: "Please select file  valid format(Image, MP3, MP4)",
          });
          toast.error("Please select file valid format(Image, MP3, MP4)", {
            appearance: "error",
            autoDismiss: true,
            theme: "colored",
          });
          return;
        }
        if (value) {
          setAttachment(e.target.files[0]);
          const imageUrlData = {
            imageurl: e.target.files[0],
            name: 'attachment',
          };
          if (e.target.files[0].size / 1024 / 1024 > 30) {
            setError({
              ...error,
              attachment: "Please select file size not more than 30 MB",
            });
            setErrorAttach(true);
            toast.error("Please select file size not more than 30 MB", {
              appearance: "error",
              autoDismiss: true,
              theme: "colored",
            });
            return;
          } else {
            setErrorAttach(false);
            setError({ ...error, attachment: "" });
          }
        }
        break;
      case "title":
        if (value === "") {
          setError({ ...error, title: "Title can not be empty" });
        } else {
          setError({ ...error, title: "" });
        }
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "royalties":
        const regex = /^\d+(\.\d{1,2})?$/;
        if (value === "") {
          setError({ ...error, royalties: "Royalties can not be empty" });
        } else if (value < 0) {
          setError({
            ...error,
            royalties: "Royalties can not set less than 0",
          });
        } else if (!regex.test(value)) {
          setError({
            ...error,
            royalties:
              "Royalties can set only two decimal after a number, For example: 51.36",
          });
        } else if (value > 90) {
          setError({
            ...error,
            royalties: "Royalties can not set more than 90",
          });
        } else {
          setError({ ...error, royalties: "" });
        }
        setRoyalties(value);
        break;
      case "price":
        const regCheck = /^(?:\d*\.\d{1,17}|\d+)$/;
        if (value === "") {
          // setUsdAmount(0);
          setPrice("");
          setError({ ...error, price: "Price can not be empty" });
        } else if (value <= 0) {
          // setUsdAmount(0);
          setPrice(value);
          setError({ ...error, price: "Price must be greater than 0" });
        } else if (!regCheck.test(value)) {
          setPrice(value);
          setError({ ...error, price: "Please enter correct value" });
          return false;
        } else if (value.length >= 19) {
          setError({ ...error, price: "Price should not more then 18 digit" });
          return false;
        } else {
          setError({ ...error, price: "" });
          setPrice(value);
        }
        break;
      default:
        break;
    }
  };

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
                    <input
                      type="file"
                      className="d-none"
                      name="attachment"
                      // onChange={(e) => handleChange(e)}
                      onChange={(e) => inputClickHandler(e)}
                    />
                    <div>
                      {attachment === "" ? (
                        <>
                          <div className="undroped_img_wrp text-center  ">
                            <svg
                              width="80"
                              height="80"
                              viewBox="0 0 80 80"
                              className="a1J"
                            >
                              <path
                                d="M28.3333 45L36.6667 55L48.3333 40L63.3333 60H16.6667L28.3333 45ZM70 63.3333V16.6667C70 12.9667 67 10 63.3333 10H16.6667C14.8986 10 13.2029 10.7024 11.9526 11.9526C10.7024 13.2029 10 14.8986 10 16.6667V63.3333C10 65.1014 10.7024 66.7971 11.9526 68.0474C13.2029 69.2976 14.8986 70 16.6667 70H63.3333C65.1014 70 66.7971 69.2976 68.0474 68.0474C69.2976 66.7971 70 65.1014 70 63.3333Z"
                                fill="#4D4C5A"
                              ></path>
                            </svg>
                            <h2>Upload Image</h2>
                            <p>
                              File types Supported: jpg, png, gif, svg, mp4, mp3
                            </p>
                            <span
                        style={{
                          color: "red",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        {error.attachment}
                       { errorAttach}
                      </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="droped_img_wrp">
                            <img src={window.URL.createObjectURL(attachment)} alt='Attachment' />
                          </div>
                        </>
                      )}
                    </div>
                  </label>
                </div>
                <div className="col-lg-7 col-md-12 create_form_right_wrp">
                  <div className="create_right">
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        onChange={(e) => inputClickHandler(e)}
                        placeholder="Enter item title"
                      />
                      <span
                        style={{
                          color: "red",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        {error.title}
                      </span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        name="description"
                        onChange={(e) => inputClickHandler(e)}
                        placeholder="Type item description"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        onChange={(e) => inputClickHandler(e)}
                        placeholder="0 ETH"
                      />
                      <span
                        style={{
                          color: "red",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        {error.price}
                      </span>
                    </div>
                    <div className="form-group">
                      <label htmlFor="royalties">Royalties *</label>
                      <input
                        type="number"
                        className="form-control"
                        id="royalties"
                        name="royalties"
                        onChange={(e) => inputClickHandler(e)}
                        placeholder="10"
                      />
                      <span
                        style={{
                          color: "red",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        {error.royalties}
                      </span>
                    </div>
                    <div className="form-group category_wrp">
                      <label htmlFor="royalties">Category *</label>
                      <Dropdown>
                        {" "}
                        {/* onSelect={changecategory} */}
                        <Dropdown.Toggle
                          variant="secondry"
                          className=""
                          id="dropdown-basic"
                        >
                          {console.log(selectedCategory)}
                          {selectedCategory?.name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item disabled={true} eventKey="">
                            Select Category
                          </Dropdown.Item>
                          {allcategory?.map((val, i) => {
                            return (
                              <>
                                <Dropdown.Item
                                  key={i}
                                  onClick={() => setSelectedCategory(val)}
                                  eventKey={val._id}
                                >
                                  {val.name}
                                </Dropdown.Item>
                              </>
                            );
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                      <span
                        style={{
                          color: "red",
                          fontSize: 12,
                          fontWeight: "bold",
                        }}
                      >
                        {error.nftCategory}
                      </span>
                    </div>
                    <div className="submit_wrp">
                      <button type="submit" onClick={handleSubmit}>
                        {isLoaded ? 'Create Item' : 'Creating Item ...'}
                      </button>
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
