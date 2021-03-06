import React from 'react'
import ReactDom from 'react-dom'


export default function Modal({open ,children,onClose}) {
    if(!open) return null

    return ReactDom.createPortal(
        <div className="modal-container">
            <div className="modal-bg">
            <div className="modal-title"><strong>Consolidated weather</strong></div>
                <button className="close" onClick={onClose}><i id="x-btn" className="fas fa-times"></i></button>
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}
