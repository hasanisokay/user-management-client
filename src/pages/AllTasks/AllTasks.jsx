import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllTasks = () => {
    const [viewFilter,setViewFilter] =useState("")
    const handleFilter = e=>{
        setViewFilter(e.target.value);
    }
    const [allTasks, setAllTasks] = useState([])
    const navigate = useNavigate()
    const handleChangeTask = (task) => {
        fetch(`https://user-management-server-six.vercel.app/updateStatus/${task._id}?status=${task.status}`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(data => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Status Changed Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    const handleUpdateTask = (id) => {
        navigate(`/update-task/${id}`)
    }

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://user-management-server-six.vercel.app/deleteTask/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your task has been deleted.',
                                'success'
                            )
                        }
                        console.log(data);
                    })
            }
        })
    }
    useEffect(() => {
        fetch(`https://user-management-server-six.vercel.app/allTasks?filter=${viewFilter}`)
            .then(res => res.json())
            .then(data => {
                setAllTasks(data)
            })
    }, [allTasks, viewFilter])
   
    return (
        <div className='w-full bg-gradient-to-r from-lime-200 via-red-200 to-slate-600'>
            <Helmet>
                <title>User Hub | All Tasks</title>
            </Helmet>
            {
                <div className="form-control w-[90%] mx-auto max-w-xs ">
                <label className="label">
                  <span className="label-text font-semibold">Sort View</span>
                </label>
                <select onChange={handleFilter} defaultValue="" className="select select-bordered">
                  <option></option>
                  <option>Pending</option>
                  <option>Done</option>        
                </select>
              </div>
            }
            <div className="py-10 mx-auto w-[99%] lg:overflow-hidden overflow-x-auto" >
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allTasks.map((task, index) => <tr key={task._id}>
                                <th>{index + 1}</th>
                                <td>{task.title}</td>
                                <td>{task.description.slice(0, 50) + "..."}</td>
                                <td onClick={() => handleChangeTask(task)} title='Click to change this status' className='text-center'><p className=' bg-blue-300 p-2 rounded-lg btn-outline btn border-0 btn-sm'>{task.status}</p>
                                </td>
                                <td><button onClick={() => handleUpdateTask(task._id)} className="btn btn-sm text-center">Update</button></td>
                                <td><button onClick={() => handleDelete(task._id)} className="btn btn-error btn-sm ">Delete</button></td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllTasks;