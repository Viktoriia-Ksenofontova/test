import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';
import { ReactComponent as CloseModalBtn } from '../../images/closeBtn.svg';
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onCloseModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleCloseByEsc);

    return () => {
      window.removeEventListener('keydown', handleCloseByEsc);
    };
  });

  // Close by backdrop
  const handleCloseByBackdrop = e =>
    e.currentTarget === e.target && onCloseModal();

  // Close by ESC
  const handleCloseByEsc = e => e.code === 'Escape' && onCloseModal();

  return createPortal(
    <div className={s.backdrop} onClick={handleCloseByBackdrop}>
      <div className={s.content}>
        <div className={s.childrenWrap}>{children}</div>
        <CloseModalBtn className={s.closeModalBtn} onClick={onCloseModal} />
      </div>
    </div >
    ,
    modalRoot,
  );
};

// Modal.propTypes = {
//   onCloseModal: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
// };

export default Modal;
