const express = require("express");
const cors = require("cors");
const pageRoutes = require("./routes/page.routes");
const departmentRoutes = require("./routes/department.routes");
const academicRoutes = require("./routes/academic.routes");
const admissionRoutes = require("./routes/admission.routes");
const placementRoutes = require("./routes/placement.routes");
const researchRoutes = require("./routes/research.routes");
const campusLifeRoutes = require("./routes/campusLife.routes");
const studentRoutes = require("./routes/student.routes");
const alumniRoutes = require("./routes/alumni.routes");
const galleryRoutes = require("./routes/gallery.routes");
const contactRoutes = require("./routes/contact.routes");
const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const allowedOrigins = (process.env.CORS_ORIGIN || "http://localhost:5173")
	.split(",")
	.map((origin) => origin.trim())
	.filter(Boolean);

app.use(
	cors({
		origin(origin, callback) {
			if (!origin || allowedOrigins.includes(origin)) {
				return callback(null, true);
			}

			return callback(new Error("Not allowed by CORS"));
		},
		credentials: true,
	})
);

app.use(express.json());

app.use("/api/pages", pageRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/academics", academicRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/placements", placementRoutes);
app.use("/api/research", researchRoutes);
app.use("/api/campus-life", campusLifeRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/alumni", alumniRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: "Route not found",
	});
});

app.use(errorHandler);


module.exports = app;