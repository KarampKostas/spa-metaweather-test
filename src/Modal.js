import React from 'react'
import ReactDom from 'react-dom'

export default function Modal({open ,children,onClose}) {
    if(!open) return null

    return ReactDom.createPortal(
        <div className="modal-container">
            <div className="modal-bg">
                <button className="close" onClick={onClose}>Close modal</button>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}
