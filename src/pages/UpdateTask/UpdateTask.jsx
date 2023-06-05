import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const UpdateTask = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    // getting task id from params
    const {id}= useParams();
    const [task,setTask] = useState([])
    const {title, description, status}= task;
   
    const onSubmit =(data)=>{
        console.log(data);
        fetch(`https://user-management-server-six.vercel.app/updateTask/${id}`, {
            method: "PATCH",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'Task Updated Successfully',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                navigate("/all-tasks")
            }
        })
    }
    useEffect(()=>{
        fetch(`https://user-management-server-six.vercel.app/task/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setTask(data)            
        })
    },[])
    return (
        <div className='bg-gradient-to-r from-zinc-800 to-gray-500'>
                   <Helmet>
                <title>User Hub | Update Task</title>
            </Helmet>
            <h2 className='text-3xl text-center py-4 text-white'>Update Task</h2>
            <form onSubmit={handleSubmit(onSubmit)}  className='w-[90%] py-10 mx-auto  '>
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text text-white font-semibold">Task Title</span>
            </label>
            <input type="text" {...register("title", { required: true })}  defaultValue={title} name='title' placeholder="Title here" className="input input-bordered" />
            {errors.title && <span className='text-red-600'>Title is required</span>}
        </div>
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text font-semibold text-white">Task Description</span>
            </label>
            {/* <input type="text" name='description' placeholder="Descrtiption here" className="input input-bordered w-full " /> */}
            <textarea defaultValue={description} {...register("description", { required: true })} className="textarea textarea-bordered h-24" name='description' placeholder="Description"></textarea>
            {errors.description && <span className='text-red-600'>Description is required</span>}
        </div>
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text font-semibold text-white">Task Status</span>
            </label>
            <select name='status' {...register("status", { required: true })} defaultValue={status} className="select select-bordered">
                <option>{status}</option>
                {status ==="Pending" && <option>Done</option>}
                {status ==="Done" && <option>Pending</option>}
            </select>
            {errors.status && <span className='text-red-600'>Status is required</span>}
        </div>
        <input type="submit" value="Update Task" className='btn bg-orange-500 border-0 my-4'  />
    </form>
        </div>
    );
};

export default UpdateTask;