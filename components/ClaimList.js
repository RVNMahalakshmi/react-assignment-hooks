import React, { useState, useEffect }from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Header from './Headercomponent';
import Footer from './FooterComponent.jsx';
import Claim from "./Claim";

const ClaimList = () => {
  const [claims, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/claims")
      .then((response) => response.data)
      .then((claims) => {
        console.log(claims);
        setProducts(claims);
      });
  }, []);

  let renderClaims = () => {
    return claims.map((claim, idx) => {
      return (
      
          <Claim key={idx} claim={claim} />
        
      );
    });
  };

  return (
    <div className="">
      <Header />
      <Table striped bordered hover id="customers">
        <thead>
          <tr>
          <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Claim Number</th>
              <th>Claim Type</th>
              <th>Claim Start date</th>
              <th>Claim End date</th>
              <th>Claim Program</th>
              <th>Update</th>
          </tr>
        </thead>
        <tbody>
        {renderClaims()}
        </tbody>
      </Table>
      <Footer />
    </div>
  );
}
export default ClaimList;
