import * as React from "react";
import { extendTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PaymentIcon from "@mui/icons-material/Payment";
import { Button } from "@mui/material";
import { jsPDF } from "jspdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import ForumIcon from "@mui/icons-material/Forum";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const MonthlyIntakeViewed = React.lazy(
  () => import("./Components/MonthlyIntakeViewed.js")
);
const MonthlyIntakeSubmitted = React.lazy(
  () => import("./Components/MonthlyIntakeSubmitted.js")
);
const MonthlyIntakeViewSubmitted = React.lazy(
  () => import("./Components/MonthlyIntakeViewSubmitted.js")
);

const NAVIGATION = [
  {
    segment: "patients",
    title: "Patients",
    icon: <PersonIcon />,
  },
  {
    segment: "appointments",
    title: "Appointments",
    icon: <CalendarMonthIcon />,
  },
  {
    segment: "communication",
    title: "Communication",
    icon: <ForumIcon />,
  },
  {
    segment: "survey",
    title: "Survey",
    icon: <InsertChartIcon />,
  },
  {
    segment: "payment",
    title: "Payment",
    icon: <PaymentIcon />,
  },
  {
    segment: "users",
    title: "Manage Users",
    icon: <GroupAddIcon />,
    header: "",
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);
  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

function DemoPageContent({ pathname }) {
  const [isViewSubmitType, setIsViewSubmitType] = React.useState("bar");
  const [isViewType, setIsViewType] = React.useState("bar");
  const [isSubmitType, setIsSubmitType] = React.useState("bar");

  const HandleChangeChart = (type) => {
    if (type === "viewSub") {
      setIsViewSubmitType(isViewSubmitType === "bar" ? "line" : "bar");
    } else if (type === "view") {
      setIsViewType(isViewType === "bar" ? "line" : "bar");
    } else if (type === "Sub") {
      setIsSubmitType(isSubmitType === "bar" ? "line" : "bar");
    }
  };

  const HandleDownload = (type) => {
    let data = [];
    let categories = [
      "Nov 2023",
      "Dec 2023",
      "Jan 2024",
      "Feb 2024",
      "Mar 2024",
      "Apr 2024",
      "May 2024",
      "Jun 2024",
      "Jul 2024",
      "Aug 2024",
      "Sep 2024",
      "Oct 2024",
    ];
    let title = "";
    if (type === "viewIntake") {
      data = [
        18114, 14114, 22100, 18114, 18128, 17114, 19014, 18114, 15214, 21114,
        18114, 18114,
      ];
      title = "Monthly Intake Viewd";
    } else if (type === "subIntake") {
      data = [
        18114, 14114, 22100, 18114, 18128, 17114, 19014, 18114, 15214, 21114,
        18114, 18114,
      ];
      title = "Monthly Intake Submitted";
    }

    let doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.text(title, 10, 10);

    // Add table headers
    doc.setFontSize(12);
    doc.text("Month", 10, 20);
    doc.text("Value", 60, 20);

    // Add table rows
    categories.forEach((category, index) => {
      const y = 30 + index * 10; // Dynamic Y position
      doc.text(category, 10, y); // Month
      doc.text(data[index].toString(), 60, y); // Value
    });

    // Save the PDF
    doc.save("data-report.pdf");
  };

  const HandleDownloadOverAll = () => {
    let categories = [
      "Nov 2023",
      "Dec 2023",
      "Jan 2024",
      "Feb 2024",
      "Mar 2024",
      "Apr 2024",
      "May 2024",
      "Jun 2024",
      "Jul 2024",
      "Aug 2024",
      "Sep 2024",
      "Oct 2024",
    ];

    let intakeViewData = [
      18114, 14114, 22100, 18114, 18128, 17114, 19014, 18114, 15214, 21114,
      18114, 18114,
    ];

    let intakeSubmittedData = [
      18114, 14114, 22100, 18114, 18128, 17114, 19014, 18114, 15214, 21114,
      18114, 18114,
    ];
    let doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.text("Monthly Intake Data Report", 10, 10);

    // Table Headers
    doc.setFontSize(12);
    doc.text("Month", 10, 20);
    doc.text("Intake View", 60, 20);
    doc.text("Intake Submitted", 110, 20);

    // Table Data
    categories.forEach((category, index) => {
      const y = 30 + index * 10; // Dynamic Y position
      doc.text(category, 10, y); // Month
      doc.text(intakeViewData[index].toString(), 60, y); // Intake View
      doc.text(intakeSubmittedData[index].toString(), 110, y); // Intake Submitted
    });

    // Save PDF
    doc.save("intake-data-report.pdf");
  };

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {pathname && pathname === "/patients" ? (
        <div className="col-12 p-3">
          <div className="row">
            <div className="col-sm-12 col-md-6 mt-3">
              <div className="shadow rounded p-3">
                {isViewType && (
                  <div className="">
                    <React.Suspense fallback={<h1> </h1>}>
                      <MonthlyIntakeViewed chartType={isViewType} />
                    </React.Suspense>
                  </div>
                )}
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <Button
                    size="small"
                    variant="contained"
                    className="bg-primary text-white"
                    onClick={() => HandleDownload("viewIntake")}
                  >
                    Download PDF
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    className={
                      isViewType === "bar"
                        ? "bg-info text-white h6"
                        : "bg-primary text-white h6"
                    }
                    onClick={() => HandleChangeChart("view")}
                  >
                    {isViewType === "bar" ? "Change to Line Chart" : null}
                    {isViewType === "line" ? "Change to Bar Chart" : null}
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 mt-3">
              <div className="shadow rounded p-3">
                {isSubmitType && (
                  <div className="">
                    <React.Suspense fallback={<h1> </h1>}>
                      <MonthlyIntakeSubmitted chartType={isSubmitType} />
                    </React.Suspense>
                  </div>
                )}
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <Button
                    size="small"
                    variant="contained"
                    className="bg-primary text-white"
                    onClick={() => HandleDownload("subIntake")}
                  >
                    Download PDF
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    className={
                      isSubmitType === "bar"
                        ? "bg-info text-white h6"
                        : "bg-primary text-white h6"
                    }
                    onClick={() => HandleChangeChart("Sub")}
                  >
                    {isSubmitType === "bar" ? "Change to Line Chart" : null}
                    {isSubmitType === "line" ? "Change to Bar Chart" : null}
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 mt-3">
              <div className="shadow rounded p-3">
                {isViewSubmitType && (
                  <div className="">
                    <React.Suspense fallback={<h1> </h1>}>
                      <MonthlyIntakeViewSubmitted
                        chartType={isViewSubmitType}
                      />
                    </React.Suspense>
                  </div>
                )}
                <div className="d-flex justify-content-between align-items-center mt-4">
                  <Button
                    size="small"
                    variant="contained"
                    className="bg-primary text-white"
                    onClick={() => HandleDownloadOverAll()}
                  >
                    Download PDF
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    className={
                      isViewSubmitType === "bar"
                        ? "bg-info text-white h6"
                        : "bg-primary text-white h6"
                    }
                    onClick={() => HandleChangeChart("viewSub")}
                  >
                    {isViewSubmitType === "bar" ? "Change to Line Chart" : null}
                    {isViewSubmitType === "line" ? "Change to Bar Chart" : null}
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6 mt-3 d-flex justify-content-end align-items-end"
              style={{ maxHeight: "350" }}
            >
              <div className=" ">
                <Button
                  size="small"
                  variant="contained"
                  className="bg-primary text-white h6"
                  onClick={() => HandleDownloadOverAll()}
                  startIcon={<FileDownloadIcon />}
                >
                  Download All
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {pathname && pathname === "/appointments" ? (
        <div className="col-12 p-3 shadow rounded bg-warning">
          <div className="text-center" style={{ color: "white" }}>
            Appointments
          </div>
        </div>
      ) : null}

      {pathname && pathname === "/communication" ? (
        <div className="col-12 p-3 shadow rounded bg-primary">
          <div className="text-center" style={{ color: "white" }}>
            Communication
          </div>
        </div>
      ) : null}

      {pathname && pathname === "/survey" ? (
        <div className="col-12 p-3 shadow rounded bg-info">
          <div className="text-center" style={{ color: "white" }}>
            Survey
          </div>
        </div>
      ) : null}

      {pathname && pathname === "/payment" ? (
        <div className="col-12 p-3 shadow rounded bg-success">
          <div className="text-center" style={{ color: "white" }}>
            Payment
          </div>
        </div>
      ) : null}
      {pathname && pathname === "/users" ? (
        <div className="col-12 p-3 shadow rounded bg-danger">
          <div className="text-center" style={{ color: "white" }}>
            Manage Users
          </div>
        </div>
      ) : null}
    </Box>
  );
}

export default function App(props) {
  const { window } = props;

  const router = useDemoRouter("/patients");

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      branding={{ title: "Management", logo: "" }}
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
