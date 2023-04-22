import React, { useEffect, useState } from 'react';
import UserAPI from '../API/UserAPI';
import ProductAPI from '../API/ProductAPI';

function Categories(props) {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const response = await ProductAPI.getCategories();
            setCategories(response);
        }

        fetchData()

    }, [])

    return (
        <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-7 align-self-center">
                        <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">QUẢN LÝ DANH MỤC</h4>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb m-0 p-0">
                                    <li className="breadcrumb-item"><a href="/" className="text-muted">TRANG CHỦ</a></li>
                                    <li className="breadcrumb-item text-muted active" aria-current="page">BẢNG</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">DANH MỤC</h4>
                                <div className='d-flex justify-content-between'>
                                    <input className="form-control w-25" type="text" placeholder="Tìm kiếm!" />
                                    <a
                                        href={'/categories/view-edit'}
                                        style={{ cursor: 'pointer', color: 'white' }}
                                        className='btn btn-success'>
                                        Tạo danh mục
                                    </a>
                                </div>
                                <br/>
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered no-wrap">
                                        <thead>
                                            <tr>
                                                <th>TÊN DANH MỤC</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                categories && categories.map(value => (
                                                    <tr key={value._id}>
                                                        <td>{value.category}</td>
                                                        <td>
                                                            <a href={`/categories/view-edit?id=${value._id}`} style={{cursor: 'pointer', color: 'white'}} className="btn btn-success">Cập nhật</a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center text-muted">
                All Rights Reserved by Admin Dashboard. Designed and Developed by <a
                    href="/">DUY PHAN</a>.
            </footer>
        </div>
    );
}

export default Categories;