import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateTask = () => {

    // getting task id from params
    const {id}= useParams();
    const [task,setTask] = useState([])
    const {title, description, status}= task;
    console.log(task);
    const handleSubmit =()=>{

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
            <h2 className='text-3xl text-center py-4 text-white'>Update Task</h2>
            <form onSubmit={handleSubmit} className='w-[90%] py-10 mx-auto  '>
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text text-white font-semibold">Task Title</span>
            </label>
            <input type="text" defaultValue={title} required name='title' placeholder="Title here" className="input input-bordered" />
        </div>
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text font-semibold text-white">Task Description</span>
            </label>
            {/* <input type="text" name='description' placeholder="Descrtiption here" className="input input-bordered w-full " /> */}
            <textarea defaultValue={description} required className="textarea textarea-bordered h-24" name='description' placeholder="Description"></textarea>

        </div>
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text font-semibold text-white">Task Status</span>
            </label>
            <select name='status' defaultValue={status} required className="select select-bordered">
                <option>{status}</option>
                {status ==="Pending" && <option>Done</option>}
                {status ==="Done" && <option>Pending</option>}
            </select>
        </div>
        <input type="submit" value="Update Task" className='btn bg-orange-500 border-0 my-4' name="" id="" />
    </form>
        </div>
    );
};

export default UpdateTask;