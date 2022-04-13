import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Container,
  makeStyles,
  OutlinedInput,
  Grid,
  InputLabel,
  CircularProgress,
  Button,
} from "@material-ui/core";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
// import { AccountCircle } from "@material-ui/icons";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    border: `${theme.palette.primary.main} solid 1px`,
    borderRadius: "5px",
    padding: "4px",
    fontSize: "1.4em",
  },
  couponCodeBox: {
    border: `${theme.palette.primary.main} solid 2px`,
    borderRadius: "10px",
    padding: "6px",
    margin: "4px",
    maxWidth: "300px",
    fontWeight: "bold",
    fontSize: "1.5em",
    display: "flex",
    justifyContent: "space-between",
  },
  Button: {
    margin: 10,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
  modal: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    backgroundColor: theme.palette.primary.main,
    boxShadow: 540,
    borderRadius: 2,
    p: 4,
    mt: 10,
  },
  jobCardContainer: {
    [theme.breakpoints.between("xs", 770)]: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
  },
  jobCard: {
    width: "100%",
    height: "200px",
    backgroundColor: "white",
    borderRadius: "5px",
    overflow: "hidden",
    boxShadow: "3px 3px 10px silver",
    transition: "100ms All linear",
    display: "flex",
    margin: "20px 0",
    [theme.breakpoints.between("xs", 770)]: {
      flexDirection: "column",
      maxWidth: "350px",
      height: "auto",
    },
    "&:hover": {
      border: "1px solid #3F51B5",
      boxShadow: "3px 3px 15px gray",
      padding: 0,
    },
  },
  left: {
    width: "30%",
    height: "100%",
    padding: "15px",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.between("xs", 770)]: {
      width: "100%",
    },
  },
  leftImg: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  right: {
    height: "100%",
    backgroundColor: "white",
    padding: "25px",
    fontWeight: "light",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "50px",
    borderRadius: "10px",
    boxShadow: "0 0 10px silver",
    [theme.breakpoints.between("xs", 770)]: {
      width: "100%",
    },
  },
  applyBtn: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
  },
  label: {
    backgroundColor: "white",
    padding: "2px 5px",
    marginTop: "-5px",
  },
  headcontain: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    [theme.breakpoints.between("xs", 770)]: {
      flexDirection: "column",
    },
  },
  editbtn: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.between("xs", 770)]: {
      margin: "0",
    },
  },

  btn: {
    border: "blue solid 1px",
    "&:hover": {
      border: "blue solid 1px",
      backgroundColor: "white",
      color: "blue",
    },
  },
  body: {
    marginTop: "100px",
  },
  Chip: {
    margin: "5px",
  },
  Chip2: {
    margin: "5px",
    backgroundColor: "blue",
  },
}));
const User = () => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [smLoading, setSmLoading] = useState(false);
  const [user, setUser] = useState();
  const [show, setShow] = useState(false);
  const [resume, setResume] = useState("");
  const navigate = useNavigate();

  const copyCode = (ccode) => {
    try {
      navigator.clipboard.writeText(
        `https://www.cryptonaukri.com/userSignUp?code=${ccode}`
      );
      toast.success("Coupon copied to clipboard");
    } catch (error) {
      toast.error("Something went wrong!!");
    }
  };

  const getUser = () => {
    setLoading(true);
    if (token) {
      //console.log(token.split('"')[1]);

      const response = axios.get(
        "https://cryptonaukribackend.herokuapp.com/api/v1/user/loggedInUserDetails",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      response.then((data) => {
        console.log(data.data);
        setUser(data.data);
        setLoading(false);
      });
      setUser(response.data);
    } else {
      setLoading(false);
      toast.error("Please Login first !!");
      navigate("/");
    }
  };

  const updateResume = () => {
    setSmLoading(true);
    const response = axios.put(
      "https://cryptonaukribackend.herokuapp.com/api/v1/user/updateResume",
      {
        education: [],
        jobs: [],
        internships: [],
        courses: [],
        projects: [],
        skills: [],
        links: {
          github: "",
          linkedin: "",
          otherLinks: [resume],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    response.then((resp) => {
      setSmLoading(false);
      if (resp.data.isResumeUpdated) {
        toast.success("Resume Updated Successfully");
        getUser();
        setShow(!show);
      } else {
        toast.error("Error Occured while updating resume, please try again !!");
      }
      console.log(resp);
    });

    setSmLoading(false);
  };

  const addResume = () => {
    setSmLoading(true);
    //console.log(resume);
    const response = axios.post(
      "https://cryptonaukribackend.herokuapp.com/api/v1/user/addResume",
      {
        education: [],
        jobs: [],
        internships: [],
        courses: [],
        projects: [],
        skills: [],
        links: {
          github: "",
          linkedin: "",
          otherLinks: [resume],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    response.then((resp) => {
      setSmLoading(false);
      if (resp.data.resumeAdded) {
        toast.success("Resume Added Successfully");
        getUser();
        setShow(!show);
      } else {
        toast.error("Error Occured while updating resume, please try again !!");
      }
      console.log(resp);
    });

    setSmLoading(false);
  };

  useEffect(() => {
    if (!token) {
      toast.error("Please Login first !!");
      navigate("/");
    } else {
      getUser();
    }
  }, []);

  const classes = useStyles();

  if (loading) {
    return (
      <>
        <div className={classes.body}>
          <Box className={classes.jobCardContainer}>
            <Container>
              <Box className={classes.right}>
                <Typography className={classes.cardHead} variant={"h4"}>
                  <Box
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    <Skeleton variant="text" />
                  </Box>
                </Typography>
                <Typography className={classes.cardHead} variant={"h6"}>
                  <Box
                    sx={{
                      fontWeight: "400",
                    }}
                  >
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                  </Box>
                </Typography>
                <Typography className={classes.cardHead} variant={"h6"}>
                  <Box
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    My Applications
                  </Box>
                </Typography>
                <br />
                <Box className={classes.right}>
                  <Typography sx={{ fontWeight: "500" }} variant="h7">
                    Job Id : <Skeleton type="text" />
                  </Typography>
                  <Typography variant="p">
                    Applied on{" "}
                    <span sx={{ fontWeight: "500" }}>
                      <Skeleton type="text" />
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
        </div>
      </>
    );
  }

  return (
    <>
      {user ? (
        <div className={classes.body}>
          <Box className={classes.jobCardContainer}>
            <Container>
              <Box className={classes.right}>
                <Typography className={classes.cardHead} variant={"h4"}>
                  <Box
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    {user.firstName + " " + user.lastName}
                  </Box>
                </Typography>
                <Typography className={classes.cardHead} variant={"h7"}>
                  <Box
                    sx={{
                      fontWeight: "300",
                    }}
                  >
                    {user.email}
                    <br />
                    {user.phoneNumber}
                    <br />
                    {user.location}
                    <br />
                    <br />
                    <Box>
                      <Typography className={classes.cardHead} variant={"h6"}>
                        <Box
                          sx={{
                            fontWeight: "500",
                          }}
                        >
                          My Cupon Code :
                        </Box>
                      </Typography>
                      <Box className={classes.couponCodeBox}>
                        {user.couponCode}
                        <Button
                          onClick={() => copyCode(user.couponCode)}
                          color="primary"
                        >
                          <ContentCopyIcon />
                        </Button>
                      </Box>
                    </Box>

                    {user.userResume ? (
                      <>
                        <Typography className={classes.cardHead} variant={"h6"}>
                          <Box
                            sx={{
                              fontWeight: "500",
                            }}
                          >
                            My Resume :
                          </Box>
                        </Typography>
                      </>
                    ) : (
                      <>
                        You have'nt added a resume yet, use the below option to
                        add a resume.
                      </>
                    )}
                  </Box>
                </Typography>

                {show ? (
                  <Grid item xs={30}>
                    <InputLabel
                      className={classes.label}
                      htmlFor="outlined-adornment-name"
                    >
                      {user.userResume ? "Update" : "Add"} Resume
                    </InputLabel>
                    <br />
                    <OutlinedInput
                      sx={{
                        fontSize: "10px",
                      }}
                      id="outlined-adornment-name"
                      type="text"
                      value={resume}
                      onChange={(e) => {
                        setResume(e.target.value);
                      }}
                      name="Resume Link"
                      label="Add your resume link"
                    />
                    {smLoading ? (
                      <CircularProgress />
                    ) : (
                      <>
                        {user.userResume ? (
                          <>
                            <Button
                              onClick={() => updateResume()}
                              variant="outlined"
                              color="primary"
                              className={classes.Button}
                            >
                              Update
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              onClick={() => addResume()}
                              variant="outlined"
                              color="primary"
                              className={classes.Button}
                            >
                              Add
                            </Button>
                          </>
                        )}
                      </>
                    )}
                  </Grid>
                ) : (
                  <Box sx={{ width: "300px" }}>
                    {user.userResume ? (
                      <>
                        <a
                          href={user.userResume.links.otherLinks}
                          target="_blank"
                          rel="noreferrer"
                          variant="outlined"
                          color="primary"
                          className={classes.links}
                        >
                          View
                        </a>
                        <Button
                          onClick={() => setShow(!show)}
                          color="primary"
                          className={classes.Button}
                        >
                          {user.userResume ? <EditIcon /> : <>Add Resume</>}
                        </Button>
                      </>
                    ) : (
                      <></>
                    )}
                  </Box>
                )}
                <br />
                <Typography className={classes.cardHead} variant={"h6"}>
                  <Box
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    My Applications (Jobs)
                  </Box>
                </Typography>
                <br />
                {user ? (
                  <>
                    {user.appliedAtJobs.map((data, index) => {
                      var time = data.appliedOn.split("T");
                      {
                        console.log(data);
                      }
                      return (
                        <Box className={classes.right}>
                          <Typography sx={{ fontWeight: "500" }} variant="h7">
                            {index + 1}.{" "}
                            <a
                              href={`/jobapplication?id=${data.jobAssociated}`}
                            >
                              {data.jobDetails.jobTitle}
                            </a>
                          </Typography>
                          <Typography variant="p">
                            Applied on{" "}
                            <span sx={{ fontWeight: "500" }}>{time[0]}</span>
                          </Typography>
                          {/* Status : Pending */}
                        </Box>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
                {user.appliedAtJobs.length === 0 ? (
                  <>You have no pending applications.</>
                ) : (
                  <></>
                )}
                <Typography className={classes.cardHead} variant={"h6"}>
                  <Box
                    sx={{
                      fontWeight: "500",
                    }}
                  >
                    My Applications (Internships)
                  </Box>
                </Typography>
                <br />
                {user ? (
                  <>
                    {user.appliedAtInternships.map((data, index) => {
                      var time = data.appliedOn.split("T");
                      return (
                        <Box className={classes.right}>
                          <Typography sx={{ fontWeight: "500" }} variant="h7">
                            {index + 1}. Job Id :{" "}
                            <a
                              href={`/jobapplication?id=${data.jobAssociated}`}
                            >
                              {data.jobAssociated}
                            </a>
                          </Typography>
                          <Typography variant="p">
                            Applied on{" "}
                            <span sx={{ fontWeight: "500" }}>{time[0]}</span>
                          </Typography>
                          {/* Status : Pending */}
                        </Box>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
                {user.appliedAtInternships.length === 0 ? (
                  <>You have no pending applications.</>
                ) : (
                  <></>
                )}
              </Box>
            </Container>
          </Box>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default User;
