import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "lumin-api-reference",
    },
    {
      type: "category",
      label: "Signature Request",
      link: {
        type: "doc",
        id: "signature-request",
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
          id: "cancel-signature-request",
          label: "Cancel Signature Request",
          className: "api-method put",
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
      label: "User",
      link: {
        type: "doc",
        id: "user",
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
      label: "Template",
      link: {
        type: "doc",
        id: "template",
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
          id: "generate-document-from-template",
          label: "Generate Document from Template",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar;
