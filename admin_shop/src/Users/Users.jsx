import React, { useEffect, useState } from 'react';
import UserAPI from '../API/UserAPI';

function Users(props) {

    const [users, setUsers] = useState([])

    useEffect(() => {

        const fetchData = async () => {

            const response = await UserAPI.getAllData()
            console.log(response)

            setUsers(response)

        }

        fetchData()

    }, [])

    return (
        <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-7 align-self-center">
                        <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">KHỞI TẠO</h4>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb m-0 p-0">
                                    <li className="breadcrumb-item"><a href="/" className="text-muted">TRANG CHỦ</a></li>
                                    <li className="breadcrumb-item text-muted active" aria-current="page">BẢNG THÔNG TIN</li>
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
                                <h4 className="card-title">NGƯỜI DÙNG</h4>
                                <input className="form-control w-25" type="text" placeholder="Tìm kiếm "/>
                                <br/>
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered no-wrap">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tên</th>
                                                <th>Email</th>
                                                <th>Số điện thoại</th>
                                                <th>Chỉnh sửa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users && users.map(value => (
                                                    <tr key={value._id}>
                                                        <td>{value._id}</td>
                                                        <td>{value.fullname}</td>
                                                        <td>{value.email}</td>
                                                        <td>{value.phone}</td>
                                                        <td>
                                                            <a style={{cursor: 'pointer', color: 'white'}} className="btn btn-success">Cập nhật</a>
                                                            &nbsp;
                                                            <a style={{cursor: 'pointer', color: 'white'}} className="btn btn-danger">Xóa</a>
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
                    href="#">Duy Phan</a>.
            </footer>
        </div>
    );
}

export default Users;