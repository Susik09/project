import type { JSX } from "react"
import "./modal.scss"

export const Modal = ({ children, isOpen, onClose, title }: { title: string, children: JSX.Element, isOpen: boolean, onClose: () => void }) => {

    if (!isOpen) return undefined
    return (
        <div className="modal">
            <div className="modal__elements">
                <h2>{title}</h2>
                <button className="modal__close-button" onClick={() => onClose()}>❌</button>
            </div>
            <div >
                {children}
            </div>
        </div>
    )
}