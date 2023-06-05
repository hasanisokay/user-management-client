import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';

const AddTask = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        console.log(data);
        fetch(`https://user-management-server-six.vercel.app/addTask`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your task has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className='bg-gradient-to-r from-slate-200 via-slate-400 to-stone-500'>
                   <Helmet>
                <title>User Hub | Add Task</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-auto py-10 w-[99%]'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Task Title</span>
                    </label>
                    <input type="text" name='title' {...register("title", { required: true })} placeholder="Title here" className="input input-bordered" />
                    {errors.title && <span className='text-red-600'>Title is required</span>}
                    </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Task Description</span>
                    </label>
                    {/* <input type="text" name='description' placeholder="Descrtiption here" className="input input-bordered w-full " /> */}
                    <textarea  {...register("description", { required: true })} className="textarea textarea-bordered h-24" name='description' placeholder="Description"></textarea>
                    {errors.description && <span className='text-red-600'>Description is required</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Task Status</span>
                    </label>
                    <select {...register("status", { required: true })}  name='status' required className="select select-bordered">
                        <option>Pending</option>
                        <option>Done</option>
                    </select>
                    {errors.status && <span className='text-red-600'>Status is required</span>}
                </div>
                <input type="submit" value="Add Task" className='btn bg-orange-500 border-0 my-4' name="" id="" />
            </form>
        </div>
    );
};

export default AddTask;