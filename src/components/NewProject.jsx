import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredDueDate.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-800 my-4">Invalid Input</h2>
        <p className="text-stone-700 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-700 mb-4">
          Please make sure you provide a valide value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-500 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textarea={true} />
          <Input type="date" ref={dueDate} label="Due date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
