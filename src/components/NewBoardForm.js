import { useState } from "react";

const INITIAL_FORM_DATA = {
    title: "Inspo Board Title",
    owner: "Inspo Board Owner"
}

const NewBoardForm = (props) => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA)

    const handleChange = (e) => {
        console.log('Handling the change');
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value
        }
        setFormData(newFormData);
    };

    const handleNewBoardSubmit = (e) => {
        e.preventDefault();
        props.addBoardCallBackFunc(formData);
    }

    return(
        <form onSubmit={handleNewBoardSubmit}>
            <label htmlFor='title'>Board Title</label>
            <input
                type='text'
                id='title'
                name='title'
                value={formData.title}
                onChange={handleChange}
            />
            <label htmlFor='owner'>Board Owner</label>
            <input
                type='text'
                id='owner'
                name='owner'
                value={formData.owner}
                onChange={handleChange}
            />

            <input
                type='submit'
                value='Add Board'
            />
        </form>
    );
}

export default NewBoardForm;