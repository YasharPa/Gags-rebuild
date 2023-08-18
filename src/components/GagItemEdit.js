import { useEffect, useState } from "react";
import Button from "./Button";
import { useEditGagMutation } from "../store";

function GagItemEdit({ gag, onSubmit }) {
  const [newContent, setNewContent] = useState(gag.content);
  const [editGag] = useEditGagMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const params = { gag, content: newContent };
    await editGag(params);
    onSubmit();
    console.log(gag);
  };

  const handleChangeContent = (event) => {
    setNewContent(event.target.value);
  };
  useEffect(() => {}, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>{gag.content}</label>
      <input
        className="input"
        placeholder="what is your thoughts?"
        value={newContent}
        onChange={handleChangeContent}
      ></input>
      <Button primary rounded>
        Accept
      </Button>
    </form>
  );
}

export default GagItemEdit;
