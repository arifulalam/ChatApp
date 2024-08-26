/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { updateNote } from "../../features/NoteSlice";

const UpdateNote = ({ setIsUpdate, note }) => {
  const { id, title, content } = note;
  const [_title, setTitle] = useState(title);
  const [_content, setContent] = useState(content);

  const dispatch = useDispatch();

  const HandleUpdateNotes = (e) => {
    e.preventDefault();

    const _note = {
      id: id,
      title: _title,
      content: _content,
      createdAt: note.createdAt,
    };
    dispatch(updateNote(_note));
    setIsUpdate(false);
  };

  return (
    <>
      <div className="w-full h-auto flex place-content-center items-center bg-[rgba(255,255,255, 0.3)]">
        <div className="w-1/2 justify-center bg-slate-200 rounded-md shadow-sm border border-sky-100 p-2">
          <div>
            <div className="relative">
              <h1 className="text-2xl mb-10">...Update Note...</h1>
              <IoMdCloseCircle
                className="absolute top-2 right-2 text-2xl cursor-pointer"
                onClick={() => setIsUpdate(false)}
              />
            </div>
            <form method="post">
              <input
                type="text"
                value={_title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="input input-bordered rounded-md w-full mb-[15px]"
              />
              <br />
              <textarea
                value={_content}
                onChange={(e) => setContent(e.target.value)}
                className="textarea input-bordered rounded-md w-full mb-[15px]"
                rows="8"
                placeholder="Note"
              ></textarea>
              <br />
              <button
                onClick={HandleUpdateNotes}
                className="btn btn-primary w-full rounded-md"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateNote;
