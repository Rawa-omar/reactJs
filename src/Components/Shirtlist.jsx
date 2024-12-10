import { useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Link } from 'react-router-dom';

const Shirtlist = () => {
    const [products, setProducts] = useState([
        {
            id: 7,
            title: "قميص صيفي",
            description: "قميص صيفي اصفر ",
            price: "100 ريال",
            image: "https://img.icons8.com/?size=100&id=afcwHV75JChK&format=png&color=000000"
        },
        {
            id: 8,
            title: "قميص بنات",
            description: "قميص فريق بناتي باللون البنفسجي الفاتح",
            price: "200 ريال",
            image: "https://img.icons8.com/?size=100&id=vcH3BB4Isls5&format=png&color=000000"
        },
        {
            id: 9,
            title: "قميص رسمي",
            description: "قميص رسمي باللون السماوي ",
            price: "500 ريال",
            image: "https://img.icons8.com/?size=100&id=42167&format=png&color=000000"
        }
    ]);

    return (
        <MainLayout>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {products.map((product) => (
                            <div className="card mt-2" key={product.id}>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <span className="badge" style={{backgroundColor:'#3C5B6F' , color:'#FAF6E3' , fontSize:'15px'}}>
                                                {product.price}
                                            </span>
                                            <div className="row mt-5">
                                                <div className="col">
                                                    <Link to={`/details?id=${product.id}`}>
                                                        <button className="btn" style={{backgroundColor:'#803D3B' , color:'#FAF6E3'}}>معاينة التفاصيل</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-9 mt-3 text-start">
                                            <h5 className="alert alert-light text-dark" style={{ marginLeft: '25px' }}>
                                                {product.title}
                                            </h5>
                                            <p>{product.description}</p>
                                        </div>
                                        <div className="col-sm-1 d-flex justify-content-end">
                                            <img src={product.image} alt={product.title} width={80} height={80} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Shirtlist;
