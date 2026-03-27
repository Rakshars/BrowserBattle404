require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/db/db.js");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // Temporarily commented out until MONGO_URI is set
        // await connectDB();

        app.listen(PORT, () => {
            console.log(`Server up on port ${PORT} (Database not connected)`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();
