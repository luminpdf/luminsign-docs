import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";

export default function SignatureRequestMultipart() {
  return (
    <Tabs>
          <TabItem value="bash" label="cURL">
            <CodeBlock
              language="bash"
            >
              {`API_KEY=my_simple_api_key
curl -L -X POST "https://api.luminpdf.com/v1/signature_request/send" \\
-H "x-api-key: \${API_KEY}" \\
-F "file=@"/path/to/file"" \\
-F "title=My first request signing document" \\
-F "expires_at=1727510980694" \\
-F "signers[0][email_address]=nhuttm@luminpdf.com" \\
-F "signers[0][name]=Nhut Tran" \\
-F "signers[1][email_address]=nhuttm1@luminpdf.com" \\
-F "signers[1][name]=Hieu Do" \\
-F "viewers[0][email_address]=nhuttm3@luminpdf.com" \\
-F "viewers[0][name]=Cong Nguyen" \\
-F "viewers[1][email_address]=nhuttm2@luminpdf.com" \\
-F "viewers[1][name]=Tien Tran" \\
-F "signers[2][email_address]=nhuttm5@luminpdf.com" \\
-F "signers[2][name]=Hien Tran" \\
-F "viewers[2][email_address]=nhuttm4@luminpdf.com" \\
-F "viewers[2][name]=Phap Huynh"`}
            </CodeBlock>
          </TabItem>

          <TabItem value="Node" label="Node">
            <CodeBlock
              language="js">
              {`var axios = require("axios");
var FormData = require("form-data");
var fs = require("fs");
var data = new FormData();
data.append("file", fs.createReadStream("/path/to/file"));
data.append("title", "My first request signing document");
data.append("expires_at", "1727510980694");
data.append("signers[0][email_address]", "nhuttm@luminpdf.com");
data.append("signers[0][name]", "Nhut Tran");
data.append("signers[1][email_address]", "nhuttm1@luminpdf.com");
data.append("signers[1][name]", "Hieu Do");
data.append("viewers[0][email_address]", "nhuttm3@luminpdf.com");
data.append("viewers[0][name]", "Cong Nguyen");
data.append("viewers[1][email_address]", "nhuttm2@luminpdf.com");
data.append("viewers[1][name]", "Tien Tran");
data.append("signers[2][email_address]", "nhuttm5@luminpdf.com");
data.append("signers[2][name]", "Hien Tran");
data.append("viewers[2][email_address]", "nhuttm4@luminpdf.com");
data.append("viewers[2][name]", "Phap Huynh");

var config = {
  method: "post",
  url: "https://api.luminpdf.com/v1/signature_request/send",
  headers: {
    "x-api-key": "YOUR_API_KEY",
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
`}
            </CodeBlock>
          </TabItem>

          <TabItem value="Go" label="Go">
            <CodeBlock
              language="go">
              {`package main

import (
  "fmt"
  "bytes"
  "mime/multipart"
  "os"
  "path/filepath"
  "io"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "https://api.luminpdf.com/v1/signature_request/send"
  method := "POST"

  payload := &bytes.Buffer{}
  writer := multipart.NewWriter(payload)
  file, errFile1 := os.Open("/path/to/file")
  defer file.Close()
  part1,
         errFile1 := writer.CreateFormFile("file",filepath.Base("/path/to/file"))
  _, errFile1 = io.Copy(part1, file)
  if errFile1 != nil {
    fmt.Println(errFile1)
    return
  }
  _ = writer.WriteField("title", "My first request signing document")
  _ = writer.WriteField("expires_at", "1727510980694")
  _ = writer.WriteField("signers[0][email_address]", "nhuttm@luminpdf.com")
  _ = writer.WriteField("signers[0][name]", "Nhut Tran")
  _ = writer.WriteField("signers[1][email_address]", "nhuttm1@luminpdf.com")
  _ = writer.WriteField("signers[1][name]", "Hieu Do")
  _ = writer.WriteField("viewers[0][email_address]", "nhuttm3@luminpdf.com")
  _ = writer.WriteField("viewers[0][name]", "Cong Nguyen")
  _ = writer.WriteField("viewers[1][email_address]", "nhuttm2@luminpdf.com")
  _ = writer.WriteField("viewers[1][name]", "Tien Tran")
  _ = writer.WriteField("signers[2][email_address]", "nhuttm5@luminpdf.com")
  _ = writer.WriteField("signers[2][name]", "Hien Tran")
  _ = writer.WriteField("viewers[2][email_address]", "nhuttm4@luminpdf.com")
  _ = writer.WriteField("viewers[2][name]", "Phap Huynh")
  err := writer.Close()
  if err != nil {
    fmt.Println(err)
    return
  }


  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-api-key", "YOUR_API_KEY")

  req.Header.Set("Content-Type", writer.FormDataContentType())
  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
`}
            </CodeBlock>
          </TabItem>

          <TabItem value="Python" label="Python">
            <CodeBlock
              language="python">
              {`import requests

url = "https://api.luminpdf.com/v1/signature_request/send"

payload={'title': 'My first request signing document',
'expires_at': '1727510980694',
'signers[0][email_address]': 'nhuttm@luminpdf.com',
'signers[0][name]': 'Nhut Tran',
'signers[1][email_address]': 'hieudm@luminpdf.com',
'signers[1][name]': 'Hieu Do',
'viewers[0][email_address]': 'congnt@luminpdf.com',
'viewers[0][name]': 'Cong Nguyen',
'viewers[1][email_address]': 'tientm@luminpdf.com',
'viewers[1][name]': 'Tien Tran',
'signers[2][email_address]': 'hientv@luminpdf.com',
'signers[2][name]': 'Hien Tran',
'viewers[2][email_address]': 'tannn@luminpdf.com',
'viewers[2][name]': 'Phap Huynh'}
files=[
  ('file',('Signing.pdf',open('/path/to/file','rb'),'application/pdf'))
]
headers = {
  'x-api-key': 'YOUR_API_KEY',
}

response = requests.request("POST", url, headers=headers, data=payload, files=files)

print(response.text)
`}
            </CodeBlock>
          </TabItem>
          <TabItem value="Groovy" label="Groovy">
            <CodeBlock
              language="groovy">
              {`@Grab('com.squareup.okhttp3:okhttp:4.9.0')
import okhttp3.MediaType
import okhttp3.MultipartBody
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody
import okhttp3.Response;

OkHttpClient client = new OkHttpClient()

def filePath = "path/to/file.pdf"
def apikey = "YOUR_API_KEY"

File file = new File(filePath)
String url = "https://api.luminpdf.com/v1/signature_request/send"

RequestBody fileBody = RequestBody.create(file, MediaType.parse("application/pdf"))

MultipartBody requestBody = new MultipartBody.Builder()
    .setType(MultipartBody.FORM)
    .addFormDataPart("file", file.name, fileBody)
    .addFormDataPart("title", "My sample file")
    .addFormDataPart("expires_at", "1727510980694")
    .addFormDataPart("signing_type", "SAME_TIME")
    .addFormDataPart("signers[0][name]", "nhuttm")
    .addFormDataPart("signers[0][email_address]", "nhuttm@luminpdf.com")
    .build()

Request request = new Request.Builder()
    .url(url)
    .addHeader("x-api-key", apikey)
    .post(requestBody)
    .build()
try (Response response = client.newCall(request).execute())
        {
            resBody = response.body().string();
            println(resBody);
        }
`}
            </CodeBlock>
          </TabItem>
        </Tabs>
  );
}