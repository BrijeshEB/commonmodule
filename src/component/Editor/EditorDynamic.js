import React, { createRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "quill-mention";
import "quill-mention/dist/quill.mention.css";
import { List, Grid } from "semantic-ui-react";
import './Editor.scss';
var mainRef = createRef();

const atValues = [
  { id: 1, value: "Anil Sharma" },
  { id: 2, value: "Dolly Santer" },
  { id: 3, value: "Shubhankar" },
  { id: 4, value: "Brijesh" },
];

const EditorDynamic = () => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image", "video"],
      // ["code-block"],
      [{ direction: "rtl" }],
      ["formula"],
      // [{ size: ["small", false, "large", "huge"] }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ script: "sub" }, { script: "super" }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      ["clean"],
    ],

    mention: {
      allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
      mentionDenotationChars: ["@", "#"],
      source: function (searchTerm, renderItem, mentionChar) {
        let values;
        if (mentionChar === "@" || mentionChar === "#") {
          values = atValues;
        }

        if (searchTerm.length === 0) {
          renderItem(values, searchTerm);
        } else {
          const matches = [];
          for (let i = 0; i < values.length; i++)
            if (
              ~values[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
            )
              matches.push(values[i]);
          renderItem(matches, searchTerm);
        }
      },
    },
  };

  // const getValue = (content, delta, source, editor) => {
  //   //const text = editor.getText(content);
  //   var getEditorData = mainRef.current.getEditor().root.innerHTML;
  //   console.log(getEditorData);
  // };

  // function drag(event) {
  //   event.dataTransfer.setData("text/html", event.target.outerHTML);
  // }

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
        List + Editor
      </header>
      <div className="ui container">
        <Grid divided>
          <Grid.Row columns={2}>
            <Grid.Column width={5}>
              <div id="listdata">
                <List
                  divided
                  verticalAlign="middle"
                  style={{ cursor: "pointer" }}
                  className="user-list-to-drop"
                >
                  <List.Item className="users-list-item">
                    <span draggable={true} className="mention" contenteditable='false' style={{color: 'rgb(255, 0, 0)', userSelect: 'all',width:'initial',display:'inline'}}
                    >
                      &#xfeff;<span contenteditable="false" className="mention" >Dolly Santer</span>&#xfeff;
                    </span>
                    <p className="mention-description">React Developer at EngineerBabu</p>
                  </List.Item>
                  <List.Item className="users-list-item">
                    <span draggable={true} className="mention" contenteditable='false' style={{color: 'rgb(255, 0, 0)', userSelect: 'all',width:'initial',display:'inline'}}
                    >
                      &#xfeff;<span contenteditable="false" className="mention" >Brijesh Bhatore</span>&#xfeff;
                    </span>
                    <p className="mention-description">React Developer at EngineerBabu</p>
                  </List.Item>
                  <List.Item className="users-list-item">
                    <span draggable={true} className="mention" contenteditable='false' style={{color: 'rgb(255, 0, 0)', userSelect: 'all',width:'initial',display:'inline'}}
                    >
                      &#xfeff;<span contenteditable="false" className="mention" >Shubhankar Kesharwani</span>&#xfeff;
                    </span>
                    <p className="mention-description">Full Stack Developer at EngineerBabu</p>
                  </List.Item>
                  <List.Item className="users-list-item">
                    <span draggable={true} className="mention" contenteditable='false' style={{color: 'rgb(255, 0, 0)', userSelect: 'all',width:'initial',display:'inline'}}
                    >
                      &#xfeff;<span contenteditable="false" className="mention" >Shristi</span>&#xfeff;
                    </span>
                    <p className="mention-description">Falana dhimka Developer at EngineerBabu</p>
                  </List.Item>
                </List>
              </div>
            </Grid.Column>
            <Grid.Column width={11}>
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

export default EditorDynamic;
