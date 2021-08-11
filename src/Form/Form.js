import React from "react";
import '../style/Form.css';

export default class Form extends React.Component {

   render() {
      return (
         <div className="container Head">
            <div className="card col-md-12 Card">
               <div className="card-body  ">
                  <h5 className="card-title color text-center"><h4><b>จัดการCOD</b></h4></h5>
                  <div className="row container" style={{ marginTop: 70 }}>
                     <div className=" col-md-3 Card">
                        <select className="form-select" aria-label="Default select example">
                           <option selected>ประเภทลูกค้า</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <div className="col-md-3 ">
                        <input type="text" className="form-control" id="fullname" placeholder="สาขา" />
                     </div>
                     <div className="col-md-3">
                        <input type="text" className="form-control" id="fullname" placeholder="ค้นหาบาร์โค็ด" />
                     </div>
                     <div className="col-md-3">
                        <select className="form-select" aria-label="Default select example">
                           <option selected>Open this select menu</option>
                           <option value="1">One</option>
                           <option value="2">Two</option>
                           <option value="3">Three</option>
                        </select>
                     </div>
                     <div className="col-md-12" style={{ marginTop: 30 }}>
                        <input type="text" className="form-control" id="fullname" placeholder="ค้นหาเลขบัตรประชาชน/ค้นหาจากเบอร์โทรศัพท์" />
                     </div>
                     <div className="row" style={{ marginTop: 30 }}>
                        <div className="col-md-2">
                           <label>
                              <input type="checkbox" />วันที่ปันจุบัน
                           </label>
                        </div>
                        <div className="col-md-1">
                           <select className="form-select" aria-label="Default select example">
                              <option selected>ปี</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                           </select>
                        </div>
                        <div className="col-md-2" >
                           <select className="form-select" aria-label="Default select example">
                              <option selected>เดือน</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                           </select>
                        </div>
                        <div className="col-md-2" >
                           <select className="form-select" aria-label="Default select example">
                              <option selected>วันที่</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                           </select>
                        </div>
                        <div className="col-md-1">
                           <select className="form-select" aria-label="Default select example">
                              <option selected>ปี</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                           </select>
                        </div>
                        <div className="col-md-2">
                           <select className="form-select" aria-label="Default select example">
                              <option selected>เดือน</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                           </select>
                        </div>
                        <div className="col-md-2">
                           <select className="form-select" aria-label="Default select example">
                              <option selected>วันที่</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                           </select>
                        </div>
                        <div className="text-center" style={{ marginTop: 20 }}>
                           <button type="button" className="btn btn-primary"><i class="fas fa-search"></i> ค้นหา</button>{' '}
                           <button type="button" className="btn btn-secondary"><i class="fas fa-sync-alt"></i> ล้างค่า</button>
                        </div>
                     </div>
                  </div>
               </div>
               <canvas id="myChart" height="12"></canvas>
            </div>
         </div>
      )
   }

}