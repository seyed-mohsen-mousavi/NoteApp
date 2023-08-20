import { useState } from "react";

function AddNewNote({onADDNote}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit =  (e) => {
    e.preventDefault();
    if(!title || !description) return null;
    const newNote = {
      title,
      description,
      id: Date.now(),
      Finished: false,
      createdAt: new Date().toISOString(),
    };
    onADDNote(newNote)
    setTitle("")
    setDescription("")
  };
  return (
    <div className="add-new-note">
      <h2>ایجاد نوت جدید</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="عنوان نوت"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="متن نوت...."
        />
        <p className="error">
          دقت کنید که تمام فرم رو باید تکمیل کنید
        </p>
        <button type="submit" className="btn btn--primary ">
          ایجاد نوت
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
