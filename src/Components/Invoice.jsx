
import { useEffect,useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import { Link, useLocation } from "react-router-dom";
const Invoice = () => {
    const location=useLocation();
    
    return (
    <>
    
    <div class="card">
  <div class="card-header bg-black"></div>
  <div class="card-body">

    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <i class="far fa-building text-danger fa-6x float-start"></i>
        </div>
      </div>


      <div class="row">
        <div class="col-xl-12">

          <ul class="list-unstyled float-end">
            <li >Company</li>
            <li>123, Elm Street</li>
            <li>123-456-789</li>
            <li>mail@mail.com</li>
          </ul>
        </div>
      </div>

      <div class="row text-center">
        <h3 class="text-uppercase text-center mt-3">فاتورة شراء</h3>
        <p>123456789</p>
      </div>
      <div class="row text-center">
        <h3 class="text-uppercase text-center mt-3"> اسم الزبون</h3>
        <p> {location.state.name} </p>
      </div>
      <div class="row mx-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">الوصف</th>
              <th scope="col">الإجمالي</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{location.state.title}</td>
              <td><i class="fas fa-dollar-sign"></i>{location.state.price}</td>
            </tr>
           
           
          </tbody>
        </table>

      </div>
      <div class="row">
        <div class="col-xl-8">
          <ul class="list-unstyled float-end me-0">
            <li><span class="me-3 float-start">Total Amount:</span><i class="fas fa-dollar-sign"></i> 6850,00
            </li>
            <li> <span class="me-5">Discount:</span><i class="fas fa-dollar-sign"></i> 500,00</li>
            <li><span class="float-start" >Shippment: </span><i
                class="fas fa-dollar-sign"></i> 500,00</li>
          </ul>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-xl-8" >
          <p class="float-end"
            >
            Total:
            <span><i class="fas fa-dollar-sign"></i> 6350,00</span></p>
        </div>

      </div>

      <div class="row mt-2 mb-5">
        <p class="fw-bold">Date: <span class="text-muted">23 June 20221</span></p>
        <p class="fw-bold mt-3">Signature:</p>
      </div>

    </div>



  </div>
  <div class="card-footer bg-black"></div>
</div>
    
    </>
    
);
}
 
export default Invoice;