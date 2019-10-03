import WITClient = require("TFS/WorkItemTracking/RestClient");
import Models = require("TFS/WorkItemTracking/Contracts");

const extensionContext = VSS.getExtensionContext();
const client = WITClient.getClient();
