import React from "react";
import '../style/Form.css';

export default class Table extends React.Component {
   render() {
      return (
         <div className="container">
            
            <button type="button" className="btn btn-primary Card" style={{marginTop:20}}>จัดการสถานะหลายรายการ</button>&nbsp;&nbsp;&nbsp;
            <button type="button" className="btn btn-secondary Card" style={{marginTop:20}}>รวม: 5</button>
            <br /><br />

            <div className="col-md-12 ">
               <table className="table table-bordered">
                  <thead className="text-center bkg">
                     <tr>
                        <th scope="col">#</th>
                        <th scope="col">พนักงานโอนเงินเข้าเเล้ว</th>
                        <th scope="col">หมายเลขโทรศัพท์</th>
                        <th scope="col">ข้อมูลผู้ส่ง</th>
                        <th scope="col">เลขพัสดุฯ</th>
                        <th scope="col">จำนวนเงินCOD</th>
                        <th scope="col">สถานะ COD</th>
                        <th scope="col"></th>
                     </tr>
                  </thead>
                  <tbody className="text-center" >
                     <tr>
                        <th scope="row"><i class="far fa-square"></i></th>
                        <td><button type="button" class="btn btn-primary" style={{borderRadius:40}}><i class="fas fa-check"></i></button></td>
                        <td>1246789760</td>
                        <td>Porlor Express<br/>
                           6101029533
                           ธนาคารไทยพาณิชย์
                        </td>
                        <td>76542522352</td>
                        <td>500 บาท</td>
                        <td><button type="button" class="btn btn-success">โอนเเล้ว</button></td>
                        <td><button type="button" class="btn btn-success">จัดการ</button></td>
                     </tr>
                     <tr>
                        <th scope="row"><i class="far fa-square"></i></th>
                        <td><button type="button" class="btn btn-danger" style={{borderRadius:40}}><i class="fas fa-times"></i></button></td>
                        <td>1246789760</td>
                        <td>Porlor Express<br/>
                           6101029533
                           ธนาคารไทยพาณิชย์
                        </td>
                        <td>76542522352</td>
                        <td>500 บาท</td>
                        <td><button type="button" class="btn btn-warning">ถึงกำหนดโอน</button></td>
                        <td><button type="button" class="btn btn-success">จัดการ</button></td>
                     </tr>
                     <tr>
                        <th scope="row"><i class="far fa-square"></i></th>
                        <td><button type="button" class="btn btn-primary" style={{borderRadius:40}}><i class="fas fa-times"></i></button></td>
                        <td>1246789760</td>
                        <td>Porlor Express<br/>
                           6101029533
                           ธนาคารไทยพาณิชย์
                        </td>
                        <td>76542522352</td>
                        <td>500 บาท</td>
                        <td><button type="button" class="btn btn-danger">ยังไม่ได้โอน</button></td>
                        <td><button type="button" class="btn btn-success">จัดการ</button></td>
                     </tr>
                     <tr>
                        <th scope="row"><i class="far fa-square"></i></th>
                        <td><button type="button" class="btn btn-danger" style={{borderRadius:40}}><i class="fas fa-check"></i></button></td>
                        <td>1246789760</td>
                        <td>Porlor Express<br/>
                           6101029533
                           ธนาคารไทยพาณิชย์
                        </td>
                        <td>76542522352</td>
                        <td>500 บาท</td>
                        <td><button type="button" class="btn btn-success">โอนเเล้ว</button></td>
                        <td><button type="button" class="btn btn-success">จัดการ</button></td>
                     </tr><tr>
                        <th scope="row"><i class="far fa-square"></i></th>
                        <td><button type="button" class="btn btn-primary" style={{borderRadius:40}}><i class="fas fa-check"></i></button></td>
                        <td>1246789760</td>
                        <td>Porlor Express<br/>
                           6101029533
                           ธนาคารไทยพาณิชย์
                        </td>
                        <td>76542522352</td>
                        <td>500 บาท</td>
                        <td><button type="button" class="btn btn-danger">ยังไม่ได้โอน</button></td>
                        <td><button type="button" class="btn btn-success">จัดการ</button></td>
                     </tr>
                  </tbody>
               </table>
               <canvas id="myChart" height="30"></canvas>
            </div>
         </div>
      )
   }
}
