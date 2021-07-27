import React, { createRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "quill-mention";
import "quill-mention/dist/quill.mention.css";
import { List, Grid } from "semantic-ui-react";
import './EditorBasic.scss';
var mainRef = createRef();

const EditorBasic = () => {

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image", "video"],
      [{ direction: "rtl" }],
      ["formula"],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ script: "sub" }, { script: "super" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      ["clean"],
    ],

  };

  function dragover_handler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/html");
    ev.target.appendChild(document.getElementById(data));
  }

  const saveEditorData = () => {
    var getEditorData = mainRef.current.getEditor().root.innerHTML;
    console.log(getEditorData);
  }

  return (
    <>
      <header className="App-header" style={{ padding: "15px" }}>
        Editor
      </header>
      <div className="ui container">
        <Grid divided>
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <ReactQuill
                onDragOver={(event) => dragover_handler(event)}
                id="quillmain"
                modules={modules}
                placeholder="Write from here..."
                theme="snow"
                // onChange={getValue}
                ref={mainRef}
              />
              <button class="ui primary button mt-15" onClick={saveEditorData}>Save</button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};

export default EditorBasic;
