import { useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Link } from 'react-router-dom';

const Jacketlist = () => {
    const [products, setProducts] = useState([
        {
            id: 4,
            title: "جاكيت شتوي",
            description: "جاكيت شتوي باللون الازرق الفاتح مناسب للجنسين",
            price: "100 ريال",
            image: "https://img.icons8.com/?size=100&id=TpOP5EeeXL5T&format=png&color=000000"
        },
        {
            id: 5,
            title: "جاكيت جينز",
            description: "جاكيت جينز ازرق",
            price: "200 ريال",
            image: "https://img.icons8.com/?size=100&id=defSgYINaEQk&format=png&color=000000"
        },
        {
            id: 6,
            title: "جاكيت رسمي",
            description: "جاكيت طويل رسمي",
            price: "500 ريال",
            image: "https://img.icons8.com/?size=100&id=16579&format=png&color=000000"
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

export default Jacketlist;
