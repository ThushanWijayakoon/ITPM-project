import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { Form, Input, Button, message, Skeleton, Switch, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { updateUser, getUser, updatePassword } from '../../Controllers/Users';

function EditUser({user, userUpdate}) {
    const dispatch = useDispatch();
    let { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(false);
    const [loadingPass, setLoadingPass] = useState(false);
    const [ hidePass, setHidePass] = useState(false);
    const [filePath, setFilePath] = useState('');

    const fetchUser = async(userId) => {
      const res = await dispatch(getUser(userId));
      user = res;
      form.setFieldsValue(res)
      setLoading(false);
  }
    useEffect(() => {
      if(user) {
        form.setFieldsValue(user)
      } else {
        setLoading(true);
        fetchUser(id)
      }
    }, [])

    function onPasswordChange(checked) {
      setHidePass(checked);
    }

    const tailFormItemLayout = {
      wrapperCol: {
          xs: {
          span: 24,
          offset: 0,
          },
          sm: {
          span: 16,
          offset: 8,
          },
      },
    };

  const [form] = Form.useForm();
  const [passForm] = Form.useForm();

  const onFinish = async(values) => {
    setLoadingBtn(true)
    let updatedUser;
    if (filePath) {
      updatedUser = {id, ...values , profile_photo: filePath};
    } else {
      updatedUser = {id, ...values , profile_photo: user?.profile_photo};
    }
    const res = await dispatch(updateUser(updatedUser))

    if (res.status === 200) {
      if (user) {
        userUpdate({...updatedUser, regNumber: user.regNumber, role: user.role})
      }
      message.success("Profile Updated Successfully")
    } else if (res.status === 401) {
      message.error("Your Password is wrong")
    }else {
      message.error("An Error Occurred")
    }
    setLoadingBtn(false)
  };

  const onPasswordUpdate = async(values) => {
    setLoadingPass(true)
    const updatePass = {id, ...values};
    const res = await dispatch(updatePassword(updatePass));
    if (res.status === 200) {
      message.success("Password Updated Successfully")
    } else {
      message.error(res.data)
    }
    setLoadingPass(false)
  }

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

    return (
      <>
      {loading ? 
        <>
            <Skeleton active /> 
            <Skeleton active /> 
            <Skeleton active /> 
            <Skeleton active /> 
        </>
        :
        <>
        <div>
        <br />
        <div style={{margin: 'auto', width:'700px', border: '2px solid #9fd1ff', borderRadius: '10px', padding: '30px flex', alignContent: 'space-around'}}> 
        <br />  
          <div style={{width:'400px', margin: 'auto'}}>
            <h2 style={{textAlign: 'center',color: '#1890ff' }}>Update Profile</h2>
            <Form
              layout="vertical"
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
                <Form.Item
                  name="contactNo"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your phone number!',
                    },
                  ]}
                >
                  <Input
                    style={{
                      width: '100%',
                    }}
                  />
                </Form.Item>
                <Form.Item>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Click to Upload Profile Picture</Button>
                </Upload>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <div className="center">
                    <Button type="primary" htmlType="submit" loading={loadingBtn} style={{padding: '0 150px'}}>
                        Update Profile
                    </Button>
                  </div>
                </Form.Item>
              </Form>

              <Switch onChange={onPasswordChange}/> Update Password?
              { hidePass ? 
                <Form
                layout="vertical"
                form={passForm}
                name="passForm"
                onFinish={onPasswordUpdate}
                scrollToFirstError
              >
                <Form.Item
                name="oldPassword"
                label="Old Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
        
              <Form.Item
                name="password"
                label="New Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please input your new password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <div className="center">
                  <Button type="primary" htmlType="submit" loading={loadingPass} style={{padding: '0 150px'}}>
                      Update Password
                  </Button>
                </div>
              </Form.Item>
                
              </Form> : ''
              }
            </div>
            <br />
            </div> 
            </div> 
          </>
      }
    </>
  );
}

export default EditUser
