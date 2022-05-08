import './profileUpdate.css';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { showErrMsg, showSuccessMsg } from './../Notification'

import { fetchUser } from '../../redux/action/authAction'
import U_CONTROLLER from '../../Controllers/User.Controller';
import { Form, Input, Button, message, Skeleton, Switch, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { FormInput, FormSelect, MultiFormSelect } from '../../components/Form/Form'
const initialState = {
	fristname: '',
	role: '',
	phone: '',
	birthday: '',
	address: '',

	err: '',
	success: ''
}

function Profile() {

	const [userData, setUserData] = useState(null);
	const [filePath, setFilePath] = useState('');

	useEffect(() => {
		const token = sessionStorage.getItem('token')
		async function getUser() {
			const userdata = await fetchUser(token);
			console.log("asasas", userdata);
			setUserData(userdata.data)
		}
		getUser();
		console.log("uD", userData);
	}, [])

	const [user, setUser] = useState(initialState)
	const { fristname, role, address, phone, birthday, err, success } = user

	const handleChange = e => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value, err: '', success: '' })
	}

	const updateUser = async e => {
		let image;
		if (filePath) {
			image = filePath;
			console.log("imgpath234: ", image);
		} else {

		}

		try {
			const res = await axios.put('/user/update/' + userData?._id, {
				fristname, role, phone, birthday, address, image
			})

			setUser({ ...user, err: '', success: res.data.msg })
			let path = `/profile`;

			navigate(path);

		} catch (err) {
			err.response.data.msg &&
				setUser({ ...user, err: err.response.data.msg, success: '' })
		}

	}

	const onDelete = async () => {
		const data = {
			id: userData?._id,
			name: userData?.email,
		}
		const result = await U_CONTROLLER.deleteUser(data);
		if (result == 200) {
			let path = `/add`;

			navigate(path);
		}
		console.log(result);
	}
	let navigate = useNavigate();

	const props = {
		name: 'file',
		multiple: false,
		action: 'http://localhost:5000/api/file',
		maxCount: 1,
		onChange(info) {
			const { status } = info.file;
			if (status !== 'uploading') {
				if (info.fileList.length > 0) {
					setFilePath(info.file.response)


				} else {
					setFilePath('')
				}
			}
			if (status === 'done') {
				message.success(`${info.file.name} file uploaded successfully.`);

			} else if (status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
	};

	const AT_OPTIONS = [{ label: userData?.role, value: "" },
	...['Seller ', 'Buyer', 'Other'].map(i => {
		return {
			label: i,
			value: i
		}
	})];
	console.log("imgpath: ", filePath);
	//   console.log("img: ", userData?.image);
	return (
		<div className="container">
				{err && showErrMsg(err)}
				{success && showSuccessMsg(success)}
			<div className="row gutters">
				<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
					<div className="card h-100">
						<div className="card-body">
							{err && showErrMsg(err)}
							{success && showSuccessMsg(success)}
							<div className="account-settings">
								<div className="user-profile">
									<div className="user-avatar">
										<img className={"imageStyle"} src={`http://localhost:5000/${userData?.image}`} alt="UserImage" />
										{/* <img className={"imageStyle"} src={userData?.image} alt="UserImage" /> */}
										{/* <img  src={`http://localhost:5000/${userData?.image}`} /> */}
									</div>
									<h5 className="user-name">{userData?.fristname}</h5>
									<h6 className="user-name">{userData?.email}</h6>


								</div>

								<Upload {...props}>
									<Button className="btn-upload" icon={<UploadOutlined />}>Edit profile picture</Button>
								</Upload>


							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
					<div className="card h-100">
						<div className="card-body">
							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<h6 className="mb-2 text-primary">Profile Update</h6>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="fristname">Full Name</label>
										<FormInput type="text" className="form-control" id="fristname" name="fristname" onChange={handleChange} placeholder={userData?.fristname} />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="eMail">Email</label>
										<FormInput type="email" className="form-control" id="email" name="email" onChange={handleChange} disabled="disabled" value={userData?.email} />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="phone">Phone</label>
										<FormInput type="text" className="form-control" id="phone" name="phone" onChange={handleChange} placeholder={userData?.phone} />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="website">Birthday</label>
										<FormInput  className="form-control" id="birthday" name="birthday" onChange={handleChange} placeholder={userData?.birthday} />
									</div>
								</div>
							</div>
							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="Street">Address</label>
										<FormInput type="name" className="form-control" id="address" name="address" onChange={handleChange} placeholder={userData?.address} />
									</div>
								</div>
								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">
										<label for="ciTy">Role</label>
										<FormSelect type="role" className="form-control" id="role" name="role" onChange={handleChange} options={AT_OPTIONS} placeholder={userData?.role} />
									</div>
								</div>

								<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
									<div className="form-group">



									</div>
								</div>



							</div>
							<div className="row gutters">
								<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
									<div className="text-right">
										<button type="button" id="submit" name="submit" className="btn btn-secondary" onClick={onDelete} >Delete</button>
										<button type="button" id="submit" name="submit" className="btn btn-primary" onClick={updateUser}>Update</button>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	)


}




export default Profile