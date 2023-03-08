import { Button } from "@mui/material";
import ExcelExport from "./components/ExcelExport";

const App = () => {

  const formatUsers = [
    {
      "dn": "cn=MAH - SK Slavia Praha - Filipko,cn=Users",
      "controls": [],
      "agentLicense": "0",
      "aliasSourceTelephoneNumber": "",
      "aliasTelephoneNumber": "",
      "allowMultiplePhones": "0",
      "autoURL": "0",
      "callWaiting": "0",
      "cn": "MAH - SK Slavia Praha - Filipko",
      "company": "9aa80500-6a24-4d13-8567-901b0ebe2665",
      "contactMode": "0",
      "currentHome": "27b20800-8207-4b12-8567-901b0ebe2665",
      "dectLine": "0",
      "departmentVoicemail": "00000000-0000-0000-0000-000000000000",
      "departmentVoicemail2": "00000000-0000-0000-0000-000000000000",
      "departmentVoicemail3": "00000000-0000-0000-0000-000000000000",
      "departmentVoicemail4": "00000000-0000-0000-0000-000000000000",
      "departmentVoicemail5": "00000000-0000-0000-0000-000000000000",
      "departmentVoicemail6": "00000000-0000-0000-0000-000000000000",
      "departmentVoicemail7": "00000000-0000-0000-0000-000000000000",
      "departmentVoicemail8": "00000000-0000-0000-0000-000000000000",
      "description": "",
      "dialPlan": "db910000-6a24-4d13-8567-901b0ebe2665",
      "dirAutoURL": "0",
      "disabled": "0",
      "disableSystemLNR": "0",
      "displayMode": "0",
      "doNotDisturb": "0",
      "editMode": "0",
      "emailMailbox": "",
      "emailNotifcationMode": "0",
      "emailPassword": "",
      "emailServer": "",
      "emailStorageMode": "0",
      "emailSyncMode": "0",
      "emailUsername": "",
      "exDirectory": "0",
      "extRef": "",
      "followMe": "0",
      "followMeTo": "",
      "forwardOnBusy": "0",
      "forwardOnBusyTo": "",
      "forwardOnNoAnswer": "0",
      "forwardOnNoAnswerTo": "",
      "givenname": "",
      "handsetAlarmCall": "",
      "handsetAlarms": "",
      "homePage": "",
      "homeTelephoneNumber": "",
      "initialPhone": "00000000-0000-0000-0000-000000000000",
      "ipcsLicense": "0",
      "locale": "",
      "location": "27b20800-8207-4b12-8567-901b0ebe2665",
      "locationAutomatic": "1",
      "loginAccessCode": "323650",
      "loginIdleTime": "0",
      "logoUrl": "",
      "mail": "",
      "messageArchiveLicense": "0",
      "messageBoxLicense": "0",
      "mobileTelephoneNumber": "",
      "navigateOutlookLicense": "0",
      "navigateSFBLicense": "0",
      "navigateSoftphoneLicense": "0",
      "noAnswerTime": "15",
      "ocsLicense": "0",
      "operatorConsoleLicense": "0",
      "outgoingCallBar": "0",
      "outOfOffice": "0",
      "outOfOfficeMsg": "",
      "owner": "00000000-0000-0000-0000-000000000000",
      "parkSlotBase": "0",
      "parkSlotOffset": "0",
      "partnerHomePage": "",
      "phoneLabel": "",
      "pickupAlerts": "0",
      "pushType": "0",
      "pushUrl": "",
      "pushUrl2": "",
      "recordMode": "0",
      "remoteWorkingCode": "",
      "requireAccountCoding": "0",
      "restrictContacts": "0",
      "restrictGroups": "0",
      "secureMode": "0",
      "sipLicense": "0",
      "smsEnabled": "0",
      "smsOriginator": "",
      "sn": "",
      "spare1TelephoneNumber": "",
      "spare2TelephoneNumber": "",
      "supervisorOf": "00000000-0000-0000-0000-000000000000",
      "teamsWebHookURL": "",
      "telephoneNumber": "678012",
      "totalControlLicense": "0",
      "URL": "",
      "userClass": "0",
      "userDisplayPref": "0",
      "userType": "0",
      "viewMode": "0",
      "virtualUserLicense": "0",
      "voicemailAccessCode": "",
      "voicemailAssistantTelephoneNumber": "",
      "voicemailEnabled": "0",
      "objectclass": "User",
      "GUID": "eb150c00-3aa9-5213-8567-901b0ebe2665",
      "hasAssignedPhone": false,
      "formatCn": [
        "MAH ",
        " SK Slavia Praha ",
        " Filipko"
      ]
    }
  ]

  const workbookOptions = {

    filename: "Arkwright House - Telephony And Data Overview",
    sheets: [{
      name: "Telephony",
      options: {
        columns: [
          { header: "Customer" },
          { header: "Name" }
        ]
      },
      data: formatUsers,
      keys: [{
        label: "formatCn",
        formatValue: (val) => val[1],

      }, {
        label: "cn",
      }]
    },
    ],
    button: {
      component: Button,
      props: {
        color: "error",
        variant: "contained"
      },
      label: "Test"
    }
  }

  return (
    <div style={{ width: '800px' }}>
      <ExcelExport options={workbookOptions} />
    </div>
  );
};

export default App
