import { useForm } from 'react-hook-form';
import Modal from '../ui/Modal';

const AddTaskModal = ({isOpen, setIsOpen}) => {

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Task Manager"}>
              <form className='flex flex-col align-middle justify-center' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">Name</label>
                <input {...register("name")} type="text" />
                <label htmlFor="">Password</label>
                <input type="password" {...register("password")} />
                <label htmlFor="">Username</label>
                <input {...register("username")} type="text" />
                <button className='btn btn-primary mt-2'>Submit</button>
              </form>
            </Modal>
        </div>
    );
};

export default AddTaskModal;