import { useState } from "react";
import axios from "axios";
import './api.css';
export default function Api() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendRequest = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponse("");

    try {
      const options = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send body only for POST and PUT
      if (method === "POST" || method === "PUT") {
        options.body = body;
      }

      const res = await fetch(url, options);

      const contentType = res.headers.get("content-type");

      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        data = await res.text();
      }

      setResponse(
        JSON.stringify(
          {
            status: res.status,
            data: data,
          },
          null,
          2
        )
      );
    } catch (error) {
      setResponse(
        JSON.stringify(
          {
            error: error.message,
          },
          null,
          2
        )
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="api-container">

      {/* API FORM */}
      <form
        className="api-form"
        name="Apitester"
        onSubmit={sendRequest}
      >

        <h1 className="api-title">
          API Tester
        </h1>

        <p className="api-subtitle">
          Test your API endpoints
        </p>

        {/* REQUEST TYPE */}
        <label htmlFor="select">
          Request Type
        </label>

        <select
          name="select"
          id="select"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>

        {/* URL */}
        <label htmlFor="url">
          URL
        </label>

        <input
          type="text"
          id="url"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="http://localhost:3000/user"
          required
        />

        {/* REQUEST BODY */}
        <label htmlFor="add">
          Request Body
        </label>

        <textarea
          name="text"
          id="add"
          rows="5"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='{"id":2,"name":"Rahul","age":20}'
        />

        {/* SUBMIT */}
        <input
          type="submit"
          value={loading ? "Sending..." : "Send Request"}
          disabled={loading}
        />

      </form>

      {/* RESPONSE */}
      <div className="response-container">

        <h2>
          Response
        </h2>

        <pre>
          {response || "Response will appear here..."}
        </pre>

      </div>

    </div>
  );
}