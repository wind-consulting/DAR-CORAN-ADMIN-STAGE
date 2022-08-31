
import { Button,Modal,Input } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from "react";
import axios from "axios";
const AddEdit = () => { 
  
  
    return (

    <div className="model_box">
    <form>
              <div class="form-group">
                  <input type="text" class="form-control"     name="first_name"    placeholder="Enter Name"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="last_name"    placeholder="Enter Last Name"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="phone"    placeholder="Enter Phone"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="email"  placeholder="Enter Email"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="gender"   placeholder="Enter Gender"/>
              </div>
              <div class="form-group mt-3">
                  <input type="text" class="form-control"     name="state"  placeholder=" Enter State"/>
              </div>
              
                <button type="submit" class="btn btn-success mt-4">Add Record</button>
              </form>


     {/* Model Box Finsihs */}
     </div>  
    );
  };
  export default AddEdit;