import Modal from '../ui/Modal';

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Task Manager"}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quisquam! Odit saepe reprehenderit fugit enim! Cum architecto quia vitae enim, velit, fuga voluptatum error dicta rerum porro eius aspernatur eum.</p>
            </Modal>
        </div>
    );
};

export default AddTaskModal;