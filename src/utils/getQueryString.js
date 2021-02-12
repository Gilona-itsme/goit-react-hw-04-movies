import queryString from "query-string";

const getQueryParams = (queryStr) => {
  return queryString.parse(queryStr);
};

export default getQueryParams;
