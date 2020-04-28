import axios from "axios";

const linkValidate = (id, url) =>
  new Promise((resolve) =>
    axios(url)
      .then((res) =>
        resolve({ id, status: res.status, statusText: res.statusText })
      )
      .catch(() => resolve({ id, status: 404, statusText: "FAIL" }))
  );

export { linkValidate };
