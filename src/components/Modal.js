import React from 'react'

function Modal({
    buttonId,
    modalHeading,
    modalMessage,
    btn1,
    btn2
    }) {
    return (
        <>
            <div class="modal fade px-3" id={buttonId} tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content text-center">
                        <div class="modal-header pb-1 mt-3 d-block border-0">
                            <h4 class="modal-title">{modalHeading}</h4>
                        </div>
                        <div class="modal-body pt-0">
                            {modalMessage}
                        </div>
                        <div class="modal-footer border-0 justify-content-center">
                            <button type="button" class="btn btn-secondary px-3" data-dismiss="modal">{btn1}</button>
                            <button type="button" class="btn btn-warning px-3">{btn2}</button>
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Modal
