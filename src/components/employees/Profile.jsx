/* eslint-disable react/prop-types */
import {
  Box,
  Grid,
  Stack,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Divider,
  Typography,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";
import { Edit, LinkedIn, Facebook, Twitter, Add } from "@mui/icons-material";
import {
  GlobalButton,
  FlexBetween,
} from "../styledComponents/styledComponents";

const Profile = ({ data }) => {
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Stack spacing={2}>
              <Card>
                <Box display="flex" justifyContent="center" pt={4} pb={2}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data?.avatar.file || ""}
                    alt="profile picture"
                    sx={{ width: "35%", borderRadius: "15px" }}
                  />
                </Box>
                <Stack direction="column" alignItems="center" pb={2}>
                  <Typography fontWeight="Bold">{data?.staffId}</Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {data.firstName} {data.lastName}
                  </Typography>
                  <Typography>{data.phone}</Typography>
                  <Typography>{data.user.email}</Typography>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  ml={8}
                  mr={8}
                  pb={2}>
                  <LinkedIn fontSize="large" color="info" />
                  <Twitter fontSize="large" color="info" />
                  <Facebook fontSize="large" color="info" />
                </Stack>
              </Card>

              <Card>
                <CardHeader
                  title={
                    <Typography fontWeight="bold">REPORTING TO</Typography>
                  }
                />
                <Divider />
                <Stack direction="column" alignItems="center" pb={10}>
                  <Typography fontWeight="Bold"></Typography>
                </Stack>
              </Card>

              <Card>
                <CardHeader
                  title={<Typography fontWeight="bold">SKILL SET</Typography>}
                  action={
                    <IconButton>
                      <Edit />
                    </IconButton>
                  }
                />
                <Divider />
                <Stack direction="column" alignItems="center" pb={10}>
                  <Typography fontWeight="Bold"></Typography>
                </Stack>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8} mb={4}>
            <Card>
              <CardHeader
                title={
                  <Typography fontWeight="bold">BASIC INFORMATION</Typography>
                }
                action={
                  <IconButton>
                    <Edit />
                  </IconButton>
                }
              />
              <Divider />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box p={4}>
                    <Stack spacing={5}>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold">
                          First Name:
                        </Box>{" "}
                        {data.firstName}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold">
                          Middle Name:
                        </Box>{" "}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Birthday:
                        </Box>{" "}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Marital Status:
                        </Box>{" "}
                        Married
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Phone:
                        </Box>{" "}
                        {data.phone}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Home Address:
                        </Box>{" "}
                        {data.address}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Country of Origin:
                        </Box>{" "}
                        {data.country}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Local Govt of Origin:
                        </Box>{" "}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Position:
                        </Box>{" "}
                        {data.position}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          PFA:
                        </Box>{" "}
                        {data.pfa}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Bank Name:
                        </Box>{" "}
                        {data.bank_name}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Account Name:
                        </Box>{" "}
                        {data.account_name}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Passport Number:
                        </Box>{" "}
                        {data.passport}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Genotype:
                        </Box>{" "}
                        {data.genotype}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Blood Group
                        </Box>{" "}
                        {data.blood_group}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box p={4}>
                    <Stack spacing={5}>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Last Name:
                        </Box>{" "}
                        {data.lastName}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          EmployeeID:
                        </Box>{" "}
                        {data.staffId}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Employee Status:
                        </Box>{" "}
                        {data.user.active ? "Active" : "Inactive"}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={1}>
                          Date Joined:
                        </Box>{" "}
                        2020-06-07
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={1}>
                          Email:
                        </Box>{" "}
                        {data.user.email}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          City:
                        </Box>{" "}
                        {data.city}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          State of Origin:
                        </Box>{" "}
                        {data.state}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Permanent Home Address:
                        </Box>{" "}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Rank:
                        </Box>{" "}
                        {data.rank}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          PEN (PFA) Number:
                        </Box>{" "}
                        {data.pfa_number}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Bank Number:
                        </Box>{" "}
                        {data.account_number}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Tax ID:
                        </Box>{" "}
                        {data.tax_id}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          NHF Number:
                        </Box>{" "}
                        {data.nhf}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          NIN:
                        </Box>{" "}
                        {data.nin}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <Box pb={2}>
          <FlexBetween>
            <Typography component="p" variant="h5" fontWeight="bold">
              Educational Records
            </Typography>
            <GlobalButton variant="contained">
              <Add sx={{ mr: "5px" }} />
              Add Education
            </GlobalButton>
          </FlexBetween>
        </Box>

        <TableContainer component={Paper}>
          <Table aria-aria-label="educational">
            <TableHead>
              <TableRow>
                <TableCell>School</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Degree/Diploma</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Graduation Date</TableCell>
                <TableCell>Certificate</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>OAU</TableCell>
                <TableCell>Computer Science</TableCell>
                <TableCell>B.sc</TableCell>
                <TableCell>Second class Upper</TableCell>
                <TableCell>11/22/2000</TableCell>
                <TableCell>cert file</TableCell>
                <TableCell>button</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        mt={5}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <Box pb={2}>
          <FlexBetween>
            <Typography component="p" variant="h5" fontWeight="bold">
              Professional Qualifications
            </Typography>
            <GlobalButton variant="contained">
              <Add sx={{ mr: "5px" }} />
              Add Qualification
            </GlobalButton>
          </FlexBetween>
        </Box>

        <TableContainer component={Paper}>
          <Table aria-aria-label="educational">
            <TableHead>
              <TableRow>
                <TableCell>Certification Body</TableCell>
                <TableCell>Name of Certifcation</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date Obtained</TableCell>
                <TableCell>Certificate</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>AWS</TableCell>
                <TableCell>Associate</TableCell>
                <TableCell>Not expired</TableCell>
                <TableCell>3/5/2022</TableCell>
                <TableCell>cert</TableCell>
                <TableCell>button</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        mt={5}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <Box pb={2}>
          <FlexBetween>
            <Typography component="p" variant="h5" fontWeight="bold">
              Previous Employments
            </Typography>
            <GlobalButton variant="contained">
              <Add sx={{ mr: "5px" }} />
              Add Experience
            </GlobalButton>
          </FlexBetween>
        </Box>

        <TableContainer component={Paper}>
          <Table aria-aria-label="educational">
            <TableHead>
              <TableRow>
                <TableCell>Company Name</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>From Date</TableCell>
                <TableCell>To Date</TableCell>
                <TableCell>Job Description</TableCell>
                <TableCell>Reason for leaving</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>

      <Box
        mt={5}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <Box pb={2}>
          <FlexBetween>
            <Typography component="p" variant="h5" fontWeight="bold">
              Guarantor
            </Typography>
            <GlobalButton variant="contained">
              <Add sx={{ mr: "5px" }} />
              Add Guarantor
            </GlobalButton>
          </FlexBetween>
        </Box>

        <TableContainer component={Paper}>
          <Table aria-aria-label="educational">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Occupation</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>To Date</TableCell>
                <TableCell>Place of Work</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>

      <Box
        mt={5}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <Box pb={2}>
          <FlexBetween>
            <Typography component="p" variant="h5" fontWeight="bold">
              Next of Kin
            </Typography>
            <GlobalButton variant="contained">
              <Add sx={{ mr: "5px" }} />
              Add Next of Kin
            </GlobalButton>
          </FlexBetween>
        </Box>

        <TableContainer component={Paper}>
          <Table aria-aria-label="educational">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Relationship</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>

      <Box
        mt={5}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <Box pb={2}>
          <FlexBetween>
            <Typography component="p" variant="h5" fontWeight="bold">
              Files
            </Typography>
            <GlobalButton variant="contained">
              <Add sx={{ mr: "5px" }} />
              Add File
            </GlobalButton>
          </FlexBetween>
        </Box>

        <TableContainer component={Paper}>
          <Table aria-aria-label="educational">
            <TableHead>
              <TableRow>
                <TableCell>Document Type</TableCell>
                <TableCell>Document</TableCell>
                <TableCell>Added By</TableCell>
                <TableCell>Added Time</TableCell>
                <TableCell>Modified By</TableCell>
                <TableCell>Modified Time</TableCell>
                <TableCell>Preview</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Profile;
