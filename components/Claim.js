import React from "react";
import { Link, BrowserRouter } from 'react-router-dom';

const Claim = (props) => {
  let { claim } = props;
  return (
    <tr>
      <td>{claim.id}</td>
      <td>{claim.EmployeeName}</td>
      <td>{claim.ClaimNumber}</td>
      <td>{claim.ClaimType}</td>
      <td>{claim.ClaimStartDate}</td>
      <td>{claim.ClaimEdDate}</td>
      <td>{claim.ClaimProgram}</td>
      <BrowserRouter>
      <td><Link className="btn btn-outline-primary" to={`/update/${claim.id}`}>Update</Link></td>
      </BrowserRouter>
    </tr>
  );
};

export default Claim;