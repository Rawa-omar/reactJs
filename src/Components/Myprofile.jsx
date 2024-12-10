import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';

// بيانات للمستخدم
const user = {
  id: 1,
  name: "روى عمر ",
  email: "ra.umir221@gmail.com",
  address: {
    street: "شارع رقم 123",
    city: "الرياض",
    country: "السعودية"
    
  },
  phone: "+966123456789",
  createdAt: "2025-01-01",
};

// بيانات  الطلبات السابقة
const orders = [
  {
    orderId: "001",
    date: "2023-11-01",
    totalAmount: 150.00,
    status: "تم التسليم"
  },
  {
    orderId: "002",
    date: "2023-11-15",
    totalAmount: 200.00,
    status: "قيد المعالجة"
  }
];

const MyProfile = () => {
  return (
    <MainLayout>
      <div className="container py-5">
        <div className="row">
          {/*  معلومات المستخدم */}
          <div className="col-lg-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#C8B28B8F' }}>
              <div className="card-body">
                <div className="text-center">
                 
                  <img 
                    src='https://img.icons8.com/?size=100&id=FVhO4oOt7MeC&format=png&color=3c5b6f' 
                    alt="User Profile" 
                    className="img-fluid mb-3" 
                    style={{ width: '150px', height: '150px' }} 
                  />
                  <h5 className="text-center mt-3">{user.name}</h5>
                  <p className="text-center">{user.email}</p>

                  <p className="text-center">الهاتف: {user.phone}</p>

                  <p className="text-center">
                    {user.address.street}, {user.address.city}, {user.address.zipCode}, {user.address.country}
                  </p>

                  <p className="text-center">تاريخ التسجيل: {new Date(user.createdAt).toLocaleDateString()}</p>

                  <div className="d-flex justify-content-center">
                    <Link to="/edit-profile">
                      <button className="btn" style={{backgroundColor:'#803D3B' , color:'#FAF6E3'}}>تعديل الحساب</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  الطلبات السابقة */}
          <div className="col-lg-8 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#A6885038' }}>
              <div className="card-body">
                <h5 className="card-title">الطلبات السابقة</h5>
                <div>
                  {orders.length === 0 ? (
                    <p>لا توجد طلبات سابقة</p>
                  ) : (
                    orders.map((order, index) => (
                      <div key={index} className="mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <h6>طلب رقم {order.orderId}</h6>
                          <span className={`badge ${order.status === 'تم التسليم' ? 'bg-success' : 'bg-warning'}`}>
                            {order.status}
                          </span>
                        </div>
                        <p>تاريخ الطلب: {order.date}</p>
                        <p>المجموع: {order.totalAmount} $</p>
                        <hr />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MyProfile;
