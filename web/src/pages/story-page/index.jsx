import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '@mui/system'
import EditorJS from '@editorjs/editorjs'
import Header from 'editorjs-header-with-alignment'
import Quote from '@editorjs/quote'
import List from '@editorjs/list'
import Paragraph from 'editorjs-paragraph-with-alignment'
import DragDrop from 'editorjs-drag-drop';
import Delimiter from '@editorjs/delimiter'
import NestedList from '@editorjs/nested-list'

export default function SearchPage() {
  let editor = { isReady: false }

  useEffect(() => {
    if(!editor.isReady) {
      editor = new EditorJS({
        autofocus: true,
        holder: 'editorjs',
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: {
              placeholder: 'Enter a header',
              levels: [1, 2, 3, 4],
              defaultLevel: 1,
              defaultAlignment: 'right'
            }
          },
          delimiter: Delimiter,
          quote: Quote,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true
          },
          list: {
            class: NestedList,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered'
            }
          },
        },
        data: {},
        
        onReady: () => {
          new DragDrop(editor)
          console.log(`Editor.js is ready`)
        },
        placeholder: `Write your story hear!`,
        // readOnly: true
      })
    }
  })

  return (
    <div>
      <h1>Story Page</h1>
      {/* <NavLink to={`/`}>Dev Page</NavLink> */}
      <Container>
        <div id='editorjs' style={{ border: "black 1px solid" }}></div>
      </Container>
    </div>
  )
}