import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from "../pages/Editor";
import '../CSS/CreateBlog.css';

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('http://localhost:3001/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <form className="create-blog-form" onSubmit={createNewPost} >
      <input type="title"
             placeholder="Title"
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
      <input type="summary"
             placeholder="Summary"
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
      <input type="file"
             onChange={ev => setFiles(ev.target.files)} />
      <div className="editor-container">
        <Editor value={content} onChange={setContent} />
      </div>
      <button>Create post</button>
    </form>
  );
};
