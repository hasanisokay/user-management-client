import React from 'react';
import Swal from 'sweetalert2';

const AddTask = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value
        const description = form.description.value
        const status = form.status.value
        const newTask = {title, description, status}
        fetch(`http://localhost:5000/addTask`,{
            method: "POST",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(newTask)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
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
<form onSubmit={handleSubmit} className='mx-auto py-10 w-[99%]'>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-semibold">Task Title</span>
                </label>
                <input type="text" required name='title' placeholder="Title here" className="input input-bordered" />
            </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text font-semibold">Task Description</span>
                </label>
                {/* <input type="text" name='description' placeholder="Descrtiption here" className="input input-bordered w-full " /> */}
                <textarea required className="textarea textarea-bordered h-24" name='description' placeholder="Description"></textarea>

            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-semibold">Task Status</span>
                </label>
                <select name='status' required className="select select-bordered">
                    <option>Pending</option>
                    <option>Done</option>
                </select>
            </div>
            <input type="submit" value="Add Task" className='btn bg-orange-500 border-0 my-4' name="" id="" />
        </form>
</div>
    );
};

export default AddTask;