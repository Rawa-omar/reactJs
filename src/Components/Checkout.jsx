import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import MainLayout from "../Layouts/MainLayout";

const Checkout = () => {
    const location = useLocation();
    const { cartItems } = location.state || {}; // استلام السلة من ShoppingCart

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    // التحقق من العناصر في السلة
    console.log("cartItems:", cartItems);

    // حساب إجمالي المنتجات
    const totalProductPrice = cartItems ? cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price);
        console.log("item price:", price); // طباعة سعر المنتج
        // إضافة السعر إلى المجموع إذا كان السعر رقماً
        return !isNaN(price) ? acc + price : acc;
    }, 0) : 0;

    // تحديد الشحن
    const [shippingCost, setShippingCost] = useState(5); 

    // تغيير تكلفة الشحن 
    const handleShippingChange = (event) => {
        setShippingCost(Number(event.target.value));
    };

    // حساب المجموع النهائي
    const totalAmount = totalProductPrice + shippingCost;

    //  التأكد من أن القيمة هي رقم ثم تنسيقه
    const formatCurrency = (value) => {
        if (typeof value === 'number' && !isNaN(value)) {
            return value.toFixed(2); 
        }
        return '0.00'; 
    };

    return (
        <MainLayout>
            <section className="h-100 h-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body p-4" style={{ backgroundColor:'#A6885038'}}>
                                    <h5 className="mb-3">
                                        <Link
                                            to="/"
                                            className="btn"
                                            style={{
                                                backgroundColor: '#803D3B',
                                                color: '#FAF6E3',
                                                padding: '10px 20px',
                                                borderRadius: '5px',
                                                textDecoration: 'none',
                                                display: 'inline-block',
                                                textAlign: 'center'
                                            }}
                                        >
                                            مواصلة الشراء
                                        </Link>
                                    </h5>

                                    <hr />

                                    <h5 className="mb-3" >مراجعة الطلب</h5>
                                    <hr />
                                    {cartItems && cartItems.map((item) => (
                                        <div key={item.id} className="d-flex justify-content-between align-items-center mb-4">
                                            <div className="d-flex flex-row align-items-center">
                                                <img src={item.image} className="img-fluid rounded-3" alt="Shopping item" width={100} height={100} />
                                                <div className="ms-3">
                                                    <small className="p-2">{item.title}</small>
                                                    <p className="small mb-0">{item.description}</p>
                                                </div>
                                            </div>
                                            <h5 className="mb-0">{parseFloat(item.price).toFixed(2)} $</h5> 
                                        </div>
                                    ))}

                                    <h5 className="mb-3 mt-5">بيانات المستخدم</h5>
                                    <div className="row">
                                        <div className="col">
                                            <label className="form-label">الاسم</label>
                                            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} style={{backgroundColor:'#C8B28B8F'}} />
                                        </div>
                                        <div className="col">
                                            <label className="form-label">البريد الإليكتروني</label>
                                            <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} style={{backgroundColor:'#C8B28B8F'}} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label className="form-label">رقم الهاتف</label>
                                            <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} style={{backgroundColor:'#C8B28B8F'}}/>
                                        </div>
                                        <div className="col">
                                            <label className="form-label">العنوان</label>
                                            <input type="text" className="form-control" onChange={(e) => setAddress(e.target.value)} style={{backgroundColor:'#C8B28B8F'}}/>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            <button className="btn" style={{backgroundColor:'#803D3B' , color:'#FAF6E3'}}>شراء</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ملخص الفاتورة */}
                        <div className="col-lg-4">
                            <div className="card" style={{backgroundColor:'#C8B28B8F'}}>
                                <div className="card-body p-4">
                                    <h3 className="fw-bold mb-5 mt-2 pt-1" style={{color:'#3C5B6F'}}>الفاتورة</h3>           
                                    <hr />

                                    <div className="d-flex justify-content-between">
                                        <p className="mb-0">مجموع المنتجات:</p>
                                        <p className="mb-0">{formatCurrency(totalProductPrice)} $</p>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">اختيار الشحن</label>
                                        <select className="form-select" onChange={handleShippingChange} style={{backgroundColor:'#ECEBDE'}} >
                                            <option value="5">شحن قياسي - 5 $</option>
                                            <option value="10">شحن سريع - 10 $</option>
                                            
                                        </select>
                                    </div>

                                    <div className="d-flex justify-content-between">
                                        <p className="mb-0">الشحن:</p>
                                        <p className="mb-0">{formatCurrency(shippingCost)} $</p>
                                    </div>

                                    <div className="d-flex justify-content-between mt-3">
                                        <p className="mb-0">المجموع النهائي:</p>
                                        <p className="mb-0">{formatCurrency(totalAmount)} $</p>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default Checkout;
