import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "lumin-api-reference",
    },
    {
      type: "category",
      label: "Signature Requests",
      collapsed: true,
      link: {
        type: "doc",
        id: "signature-requests",
      },
      items: [
        {
          type: "doc",
          id: "get-signature-request",
          label: "Get Signature Request",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "send-signature-request",
          label: "Send Signature Request",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "update-signature-request",
          label: "Update Signature Request",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "send-reminder-emails",
          label: "Send Reminder Emails",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "cancel-signature-request",
          label: "Cancel Signature Request",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "get-signature-request-file",
          label: "Get Signature Request File",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "download-file-as-file-url",
          label: "Download File as File URL",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "download-file",
          label: "Download File",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      collapsed: true,
      link: {
        type: "doc",
        id: "users",
      },
      items: [
        {
          type: "doc",
          id: "get-user-information",
          label: "Get User Information",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Templates",
      collapsed: true,
      link: {
        type: "doc",
        id: "templates",
      },
      items: [
        {
          type: "doc",
          id: "list-templates",
          label: "List Templates",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "get-template-details",
          label: "Get Template Details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "generate-document-from-template",
          label: "Generate Document from Template",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Documents",
      collapsed: true,
      link: {
        type: "doc",
        id: "documents",
      },
      items: [
        {
          type: "doc",
          id: "upload-document",
          label: "Upload Document",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Workspaces",
      collapsed: true,
      link: {
        type: "doc",
        id: "workspaces",
      },
      items: [
        {
          type: "doc",
          id: "get-workspace-information",
          label: "Get Workspace Information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "get-workspace-members",
          label: "Get Workspace Members",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar;
