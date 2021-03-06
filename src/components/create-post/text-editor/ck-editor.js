import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import InlineEditor from "@ckeditor/ckeditor5-build-inline";
import { Link } from "react-router-dom";

import "./editor.scss";

const titleEditorConfiguration = {
  toolbar: ["heading"],
  placeholder: "Title",
  heading: {
    options: [
      {
        model: "heading1",
        view: "h2",
        title: "Main Heading",
        class: "ck-heading_heading1"
      }
    ]
  }
};

class CKTextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div
        className="row editor-wrapper"
        style={{ minHeight: window.innerHeight }}
      >
        <div className="col-sm-2 col-md-3 col-xl-2" />
        <div className="col-sm-8 col-md-6 col-xl-8">
          <h2 className="heading">You can start to write!</h2>
          <div className="editor-frame title-wrapper mt-5">
            <CKEditor
              editor={InlineEditor}
              config={titleEditorConfiguration}
              data="<h2></h2>"
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const title = editor.getData();
                console.log({ title });
                this.setState({
                  title: title
                });
              }}
            />
          </div>
          <div className="editor-frame mt-3">
            <CKEditor
              editor={InlineEditor}
              config={{ placeholder: "Your text" }}
              data="<p></p>"
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const content = editor.getData();
                console.log({ content });
                this.setState({
                  content
                });
              }}
            />
          </div>
          <div className=" button-wrapper mt-10">
            <Link
              to={{
                pathname: "/post-preview",
                state: {
                  title: this.state.title,
                  content: this.state.content
                }
              }}
            >
              <button
                href=""
                className="genric-btn primary-border circle arrow"
              >
                Preview
              </button>
            </Link>

            <button href="" className="genric-btn primary-border circle arrow">
              Submit
              <span className="lnr lnr-arrow-right" />
            </button>
          </div>
        </div>
        <div className="col-sm-2 col-md-3 col-xl-2" />
      </div>
    );
  }
}

export default CKTextEditor;
