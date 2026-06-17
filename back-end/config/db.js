const mongoose = require("mongoose");
const dns = require("dns");
const { execSync } = require("child_process");

try {
    let servers = dns.getServers();
    servers = servers.filter(s => s !== "127.0.0.1" && s !== "::1" && s !== "localhost");
    
    if (servers.length === 0) {
        if (process.platform === "win32") {
            const output = execSync("ipconfig /all").toString();
            const dnsLines = output.match(/DNS Servers[\s\S]*?\n\n/gi);
            if (dnsLines) {
                const ips = dnsLines[0].match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g);
                if (ips) {
                    servers.push(...ips);
                }
            }
        }
    }
    
    // Add default network fallback and public options
    servers.push("10.99.101.8", "8.8.8.8", "1.1.1.1");
    servers = Array.from(new Set(servers));
    
    dns.setServers(servers);
} catch (err) {
    console.warn("Could not set custom DNS servers:", err);
}


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {

        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        process.exit(1);
    }
};
module.exports = connectDB;