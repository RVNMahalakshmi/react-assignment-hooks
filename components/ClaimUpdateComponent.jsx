import React, { useState } from 'react'
import { FormGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Footer from './FooterComponent.jsx';
import Header from './Headercomponent';
import axios from 'axios';


class ClaimUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            claimId: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

        console.log(this.state.claimId);
        let id = this.state.claimId;
        axios.get("http://localhost:7000/claims/" + id)
            .then(res => {
                console.log(res.data.ClaimStartDate);
                console.log(res.data.ClaimProgram);
                document.getElementById("empID").value = res.data.id;
                document.getElementById("empName").value = res.data.EmployeeName;
                document.getElementById("cNumber").value = res.data.ClaimNumber;
                document.getElementById("cType").value = res.data.ClaimType;
                /*document.getElementById("cstartDate").value = res.data.ClaimStartDate;
                document.getElementById("cendDate").value = res.data.ClaimEdDate;*/
                document.getElementById("cPrograms").value = res.data.ClaimProgram;
            })
    }

    handleSubmit(e) {
        e.preventDefault();

        let params = {
            "id" : this.refs["empID"].value,   
            "EmployeeName" : this.refs["empName"].value,
            "ClaimNumber" : this.refs["cNumber"].value,
            "ClaimType" : this.refs["cType"].value,
            "ClaimStartDate" : this.refs["cstartDate"].value,
            "ClaimEdDate" : this.refs["cendDate"].value,
            "ClaimProgram" : this.refs["cPrograms"].value
        }
        console.log(params);
        axios.put("http://localhost:7000/claims/update/"+ this.state.claimId, params)
        .then(res => {
            console.log(res.status);
            if(res.status == 200){
                document.getElementById("result").innerHTML = "Claim has updated succesfully";
            }
            //this.props.router.push("/ClaimList");
            //browserHistory.push("claim/true");
        })
    }

    render() {
        this.state.claimId = this.props.params.id;
        return (
            <div>
                <Header />
                <div class="form-wrap">
                    <form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <spam id="result"/><br/>
                            <label for="empID" class="label1">Employee ID</label>
                            <Form.Control type="text" id="empID" ref="empID" />
                            <label for="empName" class="label1">Employee Name</label>
                            <Form.Control type="text" id="empName" ref="empName" />
                            <br />
                            <label for="cNumber" class="label1">Claim Number</label>
                            <Form.Control type="text" id="cNumber" ref="cNumber" />
                            <br />
                            <label for="cType" class="label1">Claim Type</label>
                            <Form.Control type="text" id="cType" ref="cType" />
                            <br />
                            <label for="cstartDate" class="cstartDate" min="1997-01-01" max="2030-12-31">Claim Start Date</label>
                            <Form.Control type="date" id="cstartDate" ref="cstartDate" />
                            <br />
                            <label for="cendDate" class="label1" min="1997-01-01" max="2030-12-31">Claim End Date</label>
                            <Form.Control type="date" id="cendDate" ref="cendDate" />
                            <br />
                            <label for="cPrograms" class="label1">Claim Programs</label>
                            <Form.Control type="text" id="cPrograms" ref="cPrograms" />
                            <br />
                            <Button variant="primary" id="btnSubmit" type="submit" >Submit </Button>
                            <Button variant="primary" id="btnCancel" type="cancel" >Cancel </Button>
                        </Form.Group>
                    </form>
                </div>
                <Footer />
            </div >
        );
    }
}

export default ClaimUpdate;

